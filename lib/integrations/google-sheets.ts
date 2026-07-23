import { SignJWT, importPKCS8 } from "jose";

async function getAccessToken() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  let key = process.env.GOOGLE_PRIVATE_KEY;
  if (!email || !key) return null;

  // Netlify's env var UI can leave surrounding quotes or keep the
  // literal two-character sequence \n instead of a real newline —
  // normalize both cases so PKCS8 parsing never fails on formatting.
  key = key.trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  key = key.replace(/\\n/g, "\n");

  // TEMP DIAGNOSTIC — safe to keep briefly, logs shape not content.
  console.log("[google-sheets] key length:", key.length);
  console.log("[google-sheets] key starts:", JSON.stringify(key.slice(0, 30)));
  console.log("[google-sheets] key ends:", JSON.stringify(key.slice(-30)));
  console.log("[google-sheets] newline count:", (key.match(/\n/g) || []).length);

  const privateKey = await importPKCS8(key, "RS256");
  const jwt = await new SignJWT({ scope: "https://www.googleapis.com/auth/spreadsheets" })
    .setProtectedHeader({ alg: "RS256" })
    .setIssuer(email)
    .setSubject(email)
    .setAudience("https://oauth2.googleapis.com/token")
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(privateKey);

 const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: jwt }),
  });
  const tokenJson = await res.json();
  if (!res.ok || !tokenJson.access_token) {
    console.error("[google-sheets] token request failed:", res.status, JSON.stringify(tokenJson));
  }
  return tokenJson.access_token as string | undefined;
  }
export async function appendLeadRow(lead: {
  name: string; phone: string; country: string; job: string; hasPassport: boolean | null;
}) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const token = await getAccessToken();
  if (!sheetId || !token) {
    console.warn("[google-sheets] Missing credentials — skipping.");
    return { skipped: true };
  }

  const row = [
    new Date().toISOString(), lead.name, lead.phone, lead.country, lead.job,
    lead.hasPassport === null ? "" : lead.hasPassport ? "نعم" : "لا",
  ];

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Leads!A1:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [row] }),
    }
  );

  if (!res.ok) throw new Error(`Google Sheets error: ${res.status} ${await res.text()}`);
  return res.json();
}
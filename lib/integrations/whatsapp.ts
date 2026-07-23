export async function notifyWhatsApp(lead: { name: string; phone: string; country: string; job: string; }) {
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const notifyNumber = process.env.WHATSAPP_NOTIFY_NUMBER;
  if (!phoneId || !token || !notifyNumber) {
    console.warn("[whatsapp] Missing credentials — skipping.");
    return { skipped: true };
  }

  const res = await fetch(`https://graph.facebook.com/v20.0/${phoneId}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: notifyNumber,
      type: "text",
      text: { body: `طلب استشارة جديد ✅\nالاسم: ${lead.name}\nالهاتف: ${lead.phone}\nالدولة: ${lead.country}\nالمهنة: ${lead.job}` },
    }),
  });

  if (!res.ok) throw new Error(`WhatsApp API error: ${res.status} ${await res.text()}`);
  return res.json();
}

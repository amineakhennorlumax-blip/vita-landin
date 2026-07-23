export async function sendMetaLeadEvent(lead: {
  name: string; phone: string; country: string; job: string; clientIp?: string; userAgent?: string;
}) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  if (!pixelId || !accessToken) {
    console.warn("[meta-capi] Missing META_PIXEL_ID / META_ACCESS_TOKEN — skipping.");
    return { skipped: true };
  }

  const body = {
    data: [{
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      user_data: { client_ip_address: lead.clientIp, client_user_agent: lead.userAgent },
      custom_data: { content_name: lead.job, content_category: lead.country },
    }],
  };

  const res = await fetch(`https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Meta CAPI error: ${res.status} ${await res.text()}`);
  return res.json();
}

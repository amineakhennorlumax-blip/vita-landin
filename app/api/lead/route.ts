import { NextRequest, NextResponse } from "next/server";
import { sendMetaLeadEvent } from "@/lib/integrations/meta-capi";
import { appendLeadRow } from "@/lib/integrations/google-sheets";
import { notifyWhatsApp } from "@/lib/integrations/whatsapp";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.name || !body?.phone || !body?.country || !body?.job) {
    return NextResponse.json({ error: "الحقول المطلوبة ناقصة" }, { status: 400 });
  }

  const lead = {
    name: String(body.name),
    phone: String(body.phone),
    country: String(body.country),
    job: String(body.job),
    hasPassport: typeof body.hasPassport === "boolean" ? body.hasPassport : null,
  };

  const clientIp = req.headers.get("x-forwarded-for") ?? undefined;
  const userAgent = req.headers.get("user-agent") ?? undefined;

  const results = await Promise.allSettled([
    sendMetaLeadEvent({ ...lead, clientIp, userAgent }),
    appendLeadRow(lead),
    notifyWhatsApp(lead),
  ]);

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length) console.error("[api/lead] partial failure:", failed);

  return NextResponse.json({ ok: true, synced: results.length - failed.length });
}

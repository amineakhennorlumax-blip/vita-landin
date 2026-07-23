"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, User, Phone, Globe2, Briefcase, PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/ui/button";

const FIELDS = [
  { id: "name", label: "الاسم الكامل", icon: User, type: "text", placeholder: "الاسم الكامل" },
  { id: "phone", label: "رقم الهاتف", icon: Phone, type: "tel", placeholder: "رقم الهاتف" },
  { id: "country", label: "الدولة", icon: Globe2, type: "text", placeholder: "الدولة" },
  { id: "job", label: "المهنة", icon: Briefcase, type: "text", placeholder: "المهنة" },
];

export default function FloatingForm() {
  const [hasPassport, setHasPassport] = useState<boolean | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      phone: form.get("phone"),
      country: form.get("country"),
      job: form.get("job"),
      hasPassport,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("lead submit failed");
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  }

  return (
    <section id="form" className="relative z-10 -mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="mx-auto max-w-5xl rounded-card border border-gold/20 bg-paper p-8 shadow-2xl sm:p-10"
      >
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">ابدأ رحلتك اليوم</h2>
          <p className="mt-2 text-sm text-ink/60">املأ المعلومات التالية وسيتواصل معك مستشارنا</p>
        </div>

        {status === "sent" ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <ShieldCheck className="h-10 w-10 text-gold" />
            <p className="font-display text-lg font-semibold text-ink">تم استلام طلبك</p>
            <p className="text-sm text-ink/60">سيتواصل معك أحد مستشارينا خلال 24 ساعة.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FIELDS.map(({ id, icon: Icon, type, placeholder }) => (
                <div key={id} className="relative">
                  <Icon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                  <input
                    required
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    className="h-12 w-full rounded-full border border-ink/10 bg-white pl-4 pr-10 text-sm text-ink outline-none transition-colors focus:border-gold"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink/[0.03] px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-ink/70">
                <PlaneTakeoff className="h-4 w-4 text-gold" />
                هل لديك جواز سفر؟
              </div>
              <div className="flex gap-2">
                {["نعم", "لا"].map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setHasPassport(opt === "نعم")}
                    className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                      hasPassport === (opt === "نعم") ? "border-gold bg-gold text-ink" : "border-ink/15 text-ink/60 hover:border-gold/50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row-reverse sm:justify-between">
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
                {status === "sending" ? "جارٍ الإرسال..." : "احصل على استشارة مجانية"}
              </Button>
              <p className="flex items-center gap-2 text-xs text-ink/40">
                <ShieldCheck className="h-3.5 w-3.5" />
                بياناتك محمية ولن يتم مشاركتها مع أي طرف ثالث
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}

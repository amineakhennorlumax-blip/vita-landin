"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 text-paper">
      <div className="absolute inset-0 -z-10">
        <img src="/images/germany-landmark.jpg" alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/80 to-ink" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="font-display text-3xl font-bold sm:text-4xl">ألمانيا أقرب مما تتوقع!</h2>
        <p className="mx-auto mt-4 max-w-xl text-paper/70">لا تضيع المزيد من الوقت. مستقبلك يبدأ بخطوة واحدة.</p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <a href="#form">احجز استشارتك المجانية الآن</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

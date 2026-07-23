"use client";

import { motion } from "framer-motion";
import { steps } from "@/utils/content";
import { Button } from "@/components/ui/button";

export default function Timeline() {
  return (
    <section id="steps" className="bg-ink py-24 text-paper">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold">مسار واضح، خطوة بخطوة</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">رحلتك نحو ألمانيا في 6 خطوات</h2>
        </div>

        <div className="relative">
          <div className="seam absolute right-0 top-6 hidden w-full lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-ink font-display text-sm font-bold text-gold">
                  {step.index}
                </div>
                <h3 className="mb-2 font-display text-base font-semibold">{step.title}</h3>
                <p className="text-sm leading-6 text-paper/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <a href="#form">ابدأ رحلتك الآن</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

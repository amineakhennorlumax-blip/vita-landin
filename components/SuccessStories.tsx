"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { testimonials } from "@/utils/content";
import { Button } from "@/components/ui/button";

export default function SuccessStories() {
  return (
    <section id="stories" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold-dim">شهادات موثّقة</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">قصص نجاح عملائنا</h2>
          <p className="mx-auto mt-3 max-w-lg text-ink/60">الآلاف حققوا حلمهم في ألمانيا. والآن دورك!</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-card"
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={t.photo}
                  alt={`${t.name} يحمل جواز سفره الذي يحمل تأشيرة عمل ألمانية`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

                <button aria-label={`تشغيل شهادة ${t.name}`} className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </button>

                <motion.div
                  initial={{ opacity: 0, scale: 1.8, rotate: -14 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -14 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 + 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-double border-gold bg-ink/70 backdrop-blur-sm"
                >
                  <span className="latin text-[6px] font-bold leading-none tracking-tight text-gold">VISA</span>
                </motion.div>

                <img src={t.flag} alt="" className="absolute bottom-3 right-3 h-4 w-6 rounded-sm shadow" />

                <figcaption className="absolute inset-x-0 bottom-3 px-3 text-paper">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-[11px] text-paper/70">{t.role}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-ink/15 text-ink hover:bg-ink/5" asChild>
            <a href="#stories">شاهد المزيد من قصص النجاح</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

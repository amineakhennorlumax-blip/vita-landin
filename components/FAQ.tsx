"use client";

import { motion } from "framer-motion";
import { faqs } from "@/utils/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [left, right] = [faqs.slice(0, 3), faqs.slice(3)];

  return (
    <section id="faq" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold-dim">الأسئلة الشائعة</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">إجابات على أكثر الأسئلة التي يطرحها عملاؤنا</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-x-12 sm:grid-cols-2"
        >
          <Accordion type="single" collapsible>
            {left.map((f, i) => (
              <AccordionItem key={i} value={`l-${i}`}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible>
            {right.map((f, i) => (
              <AccordionItem key={i} value={`r-${i}`}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-ink/15 text-ink hover:bg-ink/5" asChild>
            <a href="#faq">تصفح جميع الأسئلة</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

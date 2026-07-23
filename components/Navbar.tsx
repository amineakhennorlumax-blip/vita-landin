"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "قصص النجاح", href: "#stories" },
  { label: "خطوات التقديم", href: "#steps" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="flex items-baseline gap-2">
          <span className="latin text-2xl font-bold tracking-wide text-paper">VITA</span>
          <span className="hidden text-[10px] tracking-[0.3em] text-gold sm:inline">YOUR VISA PARTNER</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-paper/80 transition-colors hover:text-gold">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+212600000000" className="flex items-center gap-2 text-sm text-paper/70 hover:text-gold">
            <PhoneCall className="h-4 w-4" />
            <span className="latin">+212 600 000 000</span>
          </a>
          <Button size="sm" asChild>
            <a href="#form">احجز استشارتك</a>
          </Button>
        </div>

        <button aria-label="فتح القائمة" className="text-paper lg:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden bg-ink lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-3 text-paper/90 hover:text-gold">{link.label}</a>
              </li>
            ))}
            <li className="pt-2">
              <Button className="w-full" asChild>
                <a href="#form">احجز استشارتك</a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}

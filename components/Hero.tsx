"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Play, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.6 })
        .from(".hero-line", { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.3")
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-stamp", { scale: 1.6, rotate: -24, opacity: 0, duration: 0.7, ease: "back.out(1.6)" }, "-=0.5")
        .from(".hero-photo", { opacity: 0, scale: 1.08, duration: 1.1, ease: "power2.out" }, 0);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={rootRef} className="relative overflow-hidden bg-ink pb-28 pt-32 text-paper">
      <div className="hero-photo absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,rgba(15,27,45,0.15),rgba(15,27,45,0.94))]" />
        <img
          src="/images/hero-passport.jpg"
          alt="مرشح يحمل جواز سفره يحمل تأشيرة عمل ألمانية"
          className="h-full w-full object-cover object-[20%_30%] opacity-70"
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="hero-eyebrow mb-4 text-sm tracking-[0.25em] text-gold">
            عقد عمل حقيقي · راتب مجزي · حياة مستقرة
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.25] sm:text-5xl lg:text-6xl">
            <span className="hero-line block">رحلتك نحو مستقبل أفضل</span>
            <span className="hero-line block text-gold">في ألمانيا تبدأ من هنا</span>
          </h1>
          <p className="hero-sub mt-6 max-w-xl text-base leading-8 text-paper/70 sm:text-lg">
            نرافقك من ملفك الأول وصولك إلى ألمانيا بأمان، خطوة بخطوة، مع فريق يتحدث لغتك ويعرف الطريق.
          </p>

          <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href="#form">ابدأ الآن واحصل على تقييم مجاني لملفك</a>
            </Button>
            <button onClick={() => setVideoOpen(true)} className="group flex items-center gap-3 text-paper/90 transition-colors hover:text-gold">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/30 transition-colors group-hover:border-gold">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="text-sm">شاهد قصة نجاح حقيقية</span>
            </button>
          </div>

          <a href="#form" aria-label="انتقل إلى نموذج التقييم" className="mt-14 hidden items-center gap-3 text-paper/50 sm:flex">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="text-xs">مرر للأسفل لتبدأ تقييمك المجاني</span>
          </a>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex">
          <div className="hero-stamp flex h-72 w-72 -rotate-[14deg] flex-col items-center justify-center rounded-full border-[6px] border-double border-gold/80 text-center shadow-stamp">
            <span className="latin text-xs tracking-[0.3em] text-gold">VISA APPROVED</span>
            <span className="font-display mt-2 text-3xl font-bold text-paper">VITA</span>
            <span className="latin mt-2 text-[10px] tracking-[0.35em] text-gold/80">DEUTSCHLAND</span>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-6" onClick={() => setVideoOpen(false)}>
          <div className="relative w-full max-w-3xl overflow-hidden rounded-card bg-black shadow-2xl">
            <video src="/videos/success-story-1.mp4" controls autoPlay className="aspect-video w-full" />
          </div>
        </div>
      )}
    </section>
  );
}

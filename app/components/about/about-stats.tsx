"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: "25+", label: "Years on the tools" },
  { value: "12K+", label: "Vehicles serviced" },
  { value: "50+", label: "Marques mastered" },
  { value: "100%", label: "Workmanship guaranteed" },
];

export default function AboutStats() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".about-stat").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <section className="border-y border-white/5 bg-black/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="about-stat bg-background/60 px-6 py-10 md:px-10 md:py-14"
            >
              <div className="font-display text-5xl text-brand-red md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-xs tracking-[0.25em] text-muted-foreground uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, PhoneCall, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { gsap } from "gsap";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup clean GSAP context for safe React scoped targeting
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 0.9 },
      });

      // Sequential entry animation flow
      tl.fromTo(".animate-badge", { opacity: 0, y: -25 }, { opacity: 1, y: 0 })
        .fromTo(
          ".animate-title-line",
          { opacity: 0, y: 45 },
          { opacity: 1, y: 0, stagger: 0.12 },
          "-=0.6"
        )
        .fromTo(".animate-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.6")
        .fromTo(
          ".animate-cta",
          { opacity: 0, scale: 0.93 },
          { opacity: 1, scale: 1, stagger: 0.1 },
          "-=0.55"
        )
        .fromTo(
          ".animate-feature",
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, stagger: 0.12 },
          "-=0.5"
        );
    }, containerRef);

    // Cleanup animations on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-4 lg:px-5 xl:px-4" >
      {/* Background Image Setup */}
      <img
        src="/hero-workshop/hero-workshop.jpg"
        alt="MotorMedic Auckland workshop interior with mechanic servicing a sports car"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      {/* Main Content Area */}
      <div className="container relative z-10 pt-24 pb-12 md:pt-28 md:pb-14">
        <div className="max-w-3xl">
          
          {/* Location Badge */}
          

          {/* Heading - Split by block spans for precise GSAP staggering */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-5 overflow-hidden">
            <span className="block animate-title-line opacity-0">DIAGNOSE</span>
            <span className="block text-gradient-primary animate-title-line opacity-0">REPAIR</span>
            <span className="block text-gradient-silver animate-title-line opacity-0">REVIVE.</span>
          </h1>

          {/* Subtext Description */}
          <p className="animate-desc opacity-0 text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Auckland's premium auto workshop. From routine servicing to performance tuning —
            we treat every vehicle like our own. Certified technicians, honest pricing, modern diagnostics.
          </p>

          {/* Call To Actions */}
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="animate-cta opacity-0">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Book a Service <ArrowRight className="ml-1" />
                </a>
              </Button>
            </div>
            <div className="animate-cta opacity-0">
              <Button variant="outlineGlow" size="xl" asChild>
                <a href="tel:+6499000000">
                  <PhoneCall className="mr-1" /> Call Workshop
                </a>
              </Button>
            </div>
          </div>

          {/* Core Feature Value Propositions (Replacing old review/history stats) */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl lg:max-w-3xl ">
            {[
              { title: "EURO & JDM", subtitle: "Specialist Care" },
              { title: "NEXT-GEN", subtitle: "Digital Diagnostics" },
              { title: "MASTER TECHS", subtitle: "Fully Certified" },
            ].map((f) => (
              <div key={f.subtitle} className="animate-feature opacity-0 border-l-2 border-primary pl-4">
                <div className="font-display text-xl md:text-2xl text-foreground tracking-wide">{f.title}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                  {f.subtitle}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
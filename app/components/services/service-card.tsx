"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { Check, Clock, Tag, ArrowRight } from "lucide-react";
import { SERVICES } from "./data/services";

interface ServiceCardProps {
  activeId: string;
  direction: number;
  setActiveId: (id: string) => void;
  setDirection: (direction: number) => void;
  onBookNow?: () => void;
  onInteraction?: () => void;
}

export const ServiceCard = ({
  activeId,
  direction,
  setActiveId,
  setDirection,
  onBookNow,
  onInteraction,
}: ServiceCardProps) => {
  const activeIndex = SERVICES.findIndex((s) => s.id === activeId);
  const active = SERVICES[activeIndex];

  const goTo = (index: number) => {
    const next = (index + SERVICES.length) % SERVICES.length;
    setDirection(next > activeIndex ? 1 : -1);
    setActiveId(SERVICES[next].id);
    onInteraction?.();
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 60;
    if (info.offset.x < -threshold) goTo(activeIndex + 1);
    else if (info.offset.x > threshold) goTo(activeIndex - 1);
  };

  return (
  <div className="mt-4 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.article
          key={active.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={onDragEnd}
          onDragStart={onInteraction}
          className="group relative rounded-2xl border border-border/40 bg-secondary/15 p-4 sm:p-8 lg:p-16 backdrop-blur-md overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-[60px] pointer-events-none" />

          <div className="grid gap-4 sm:gap-10 lg:grid-cols-[1.2fr_1fr] relative z-10">
            {/* Left Content */}
            <div className="flex flex-col">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="flex h-10 w-10 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-secondary/60 shadow-[0_0_15px_rgba(210,40,40,0.1)]">
                  <active.icon className="h-4 w-4 sm:h-7 sm:w-7 text-primary" />
                </div>

                <div>
                  <h3 className="font-display text-lg sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase italic leading-none">
                    {active.title}
                  </h3>
                  <p className="mt-1 text-[8px] sm:text-xs font-bold uppercase tracking-widest text-primary/80">
                    {active.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-2 sm:mt-8 max-w-prose text-[11px] sm:text-base leading-relaxed text-silver/70 italic line-clamp-3 sm:line-clamp-none">
                {active.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-4 sm:max-w-md">
                <div className="rounded-xl border border-border/40 bg-secondary/40 p-3 sm:p-5 group/item hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    <Clock className="h-3 w-3 text-primary" />
                    Duration
                  </div>
                  <div className="mt-1 text-base sm:text-lg font-display text-white italic">
                    {active.duration}
                  </div>
                </div>

                <div className="rounded-xl border border-border/40 bg-secondary/40 p-3 sm:p-5 group/item hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    <Tag className="h-3 w-3 text-primary" />
                    Price
                  </div>
                  <div className="mt-1 text-base sm:text-lg font-display text-white italic">
                    {active.startingPrice}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Features & CTA */}
            <div className="lg:border-l lg:border-border/30 lg:pl-12 flex flex-col justify-between mt-8 lg:mt-0">
              <div>
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-silver/60 mb-4 sm:mb-8 border-b border-border/30 pb-2 sm:pb-4 inline-block">
                  Specs
                </p>
                <ul className="space-y-2 sm:space-y-4">
                  {active.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-silver/80 group/feat hover:text-white transition-colors"
                    >
                      <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-primary/60 group-hover/feat:bg-primary group-hover/feat:scale-125 transition-all" />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                  {active.features.length > 3 && (
                    <li className="text-xs text-silver/50">+ more...</li>
                  )}
                </ul>
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  onClick={onBookNow}
                  className="relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105 active:scale-95"
                >
                  <span>Book {active.title}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>
        </motion.article>
      </AnimatePresence>

      {/* Mobile Pager */}
      <div className="mt-10 flex items-center justify-center gap-3 lg:hidden">
        {SERVICES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.title}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-10 bg-primary shadow-[0_0_10px_rgba(210,40,40,0.4)]"
                : "w-4 bg-secondary-foreground/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { Check, Clock, Tag } from "lucide-react";
import { SERVICES } from "./data/services";

interface ServiceCardProps {
  activeId: string;
  direction: number;
  setActiveId: (id: string) => void;
  setDirection: (direction: number) => void;
}

export const ServiceCard = ({
  activeId,
  direction,
  setActiveId,
  setDirection,
}: ServiceCardProps) => {
  const activeIndex = SERVICES.findIndex((s) => s.id === activeId);
  const active = SERVICES[activeIndex];

  const goTo = (index: number) => {
    const next = (index + SERVICES.length) % SERVICES.length;

    setDirection(next > activeIndex ? 1 : -1);
    setActiveId(SERVICES[next].id);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 60;

    if (info.offset.x < -threshold) goTo(activeIndex + 1);
    else if (info.offset.x > threshold) goTo(activeIndex - 1);
  };

  return (
    <div className="mt-10 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.article
          key={active.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -32 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={onDragEnd}
          className="group rounded-2xl border border-border/60 bg-card p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset] transition-colors hover:border-border sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-secondary/40">
                  <active.icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {active.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {active.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-7 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                {active.description}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:max-w-md">
                <div className="bg-card p-4">
                  <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    Duration
                  </dt>

                  <dd className="mt-2 text-base font-medium text-foreground">
                    {active.duration}
                  </dd>
                </div>

                <div className="bg-card p-4">
                  <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <Tag className="h-3.5 w-3.5" />
                    Starting at
                  </dt>

                  <dd className="mt-2 text-base font-medium text-foreground">
                    {active.startingPrice}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right */}
            <div className="lg:border-l lg:border-border/60 lg:pl-10">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                What's included
              </p>

              <ul className="mt-5 space-y-3">
                {active.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[15px] text-foreground/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Book {active.title}
              </button>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>

      {/* Mobile pager */}
      <div className="mt-6 flex items-center justify-center gap-1.5 lg:hidden">
        {SERVICES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.title}`}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex
                ? "w-6 bg-primary"
                : "w-1.5 bg-border hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-muted-foreground lg:hidden">
        Swipe to explore services
      </p>
    </div>
  );
};
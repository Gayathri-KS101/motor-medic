"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { SERVICES } from "./data/services";

interface ServiceMenuProps {
  activeId: string;
  setActiveId: (id: string) => void;
  setDirection: (direction: number) => void;
  onInteraction?: () => void;
}

export const ServiceMenu = ({
  activeId,
  setActiveId,
  setDirection,
  onInteraction,
}: ServiceMenuProps) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeIndex = SERVICES.findIndex((s) => s.id === activeId);

  const goTo = (index: number) => {
    const next = (index + SERVICES.length) % SERVICES.length;
    setDirection(next > activeIndex ? 1 : -1);
    setActiveId(SERVICES[next].id);
    onInteraction?.();
  };

  useEffect(() => {
    const el = tabsRef.current?.querySelector<HTMLElement>(
      `[data-tab-id="${activeId}"]`,
    );

    el?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId]);

  return (
    <div className="mt-8 mb-12">
      <div
        ref={tabsRef}
        className="scrollbar-none -mx-5 flex flex-nowrap gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0 py-4"
        role="tablist"
        aria-label="Services"
        onMouseEnter={onInteraction}
        onTouchStart={onInteraction}
      >
        {SERVICES.map((s) => {
          const Icon = s.icon;
          const isActive = s.id === activeId;

          return (
            <button
              key={s.id}
              data-tab-id={s.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => goTo(SERVICES.findIndex((x) => x.id === s.id))}
              className={`
                group relative flex shrink-0 items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
                ${isActive 
                  ? "text-white bg-secondary/80 border-primary/40" 
                  : "text-muted-foreground bg-secondary/30 border-transparent hover:text-silver hover:bg-secondary/50"
                }
                border
              `}
            >
              <Icon
                className={`h-3.5 w-3.5 transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-silver"
                }`}
              />

              <span>{s.title}</span>

              {isActive && (
                <motion.div
                  layoutId="active-pill-glow"
                  className="absolute inset-0 rounded-full border border-primary/50 shadow-[0_0_15px_rgba(210,40,40,0.2)] pointer-events-none"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
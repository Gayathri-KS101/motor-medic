"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { SERVICES } from "./data/services";

interface ServiceMenuProps {
  activeId: string;
  setActiveId: (id: string) => void;
  setDirection: (direction: number) => void;
}

export const ServiceMenu = ({
  activeId,
  setActiveId,
  setDirection,
}: ServiceMenuProps) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeIndex = SERVICES.findIndex((s) => s.id === activeId);

  const goTo = (index: number) => {
    const next = (index + SERVICES.length) % SERVICES.length;

    setDirection(next > activeIndex ? 1 : -1);
    setActiveId(SERVICES[next].id);
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
    <div className="mt-12">
      <div
        ref={tabsRef}
        className="scrollbar-none -mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0"
        role="tablist"
        aria-label="Services"
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
              onClick={() =>
                goTo(SERVICES.findIndex((x) => x.id === s.id))
              }
              className="group relative flex shrink-0 items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon
                className={`h-4 w-4 transition-colors ${
                  isActive ? "text-primary" : ""
                }`}
              />

              <span className={isActive ? "text-foreground" : ""}>
                {s.title}
              </span>

              {isActive && (
                <motion.span
                  layoutId="service-tab-indicator"
                  className="absolute inset-x-3 -bottom-px h-px bg-primary"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 32,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="h-px w-full bg-border/60" />
    </div>
  );
};
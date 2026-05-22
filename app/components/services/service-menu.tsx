"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
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

  const activeIndex = useMemo(
    () => SERVICES.findIndex((s) => s.id === activeId),
    [activeId],
  );

  const goTo = (index: number) => {
    const next = (index + SERVICES.length) % SERVICES.length;

    setDirection(next > activeIndex ? 1 : -1);
    setActiveId(SERVICES[next].id);

    onInteraction?.();
  };

  // Mobile: Scroll to service card section on click
  // Only scroll to section on mobile when user manually clicks
  const [shouldScroll, setShouldScroll] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = tabsRef.current?.querySelector<HTMLElement>(
      `[data-tab-id="${activeId}"]`,
    );
    if (window.innerWidth < 768) {
      if (shouldScroll) {
        const cardSection = document.getElementById("service-card-section");
        if (cardSection) {
          const cardSection = document.getElementById(
  "service-card-section",
);

if (cardSection) {
  const y =
    cardSection.getBoundingClientRect().top +
    window.pageYOffset -
    90;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}
        }
        setShouldScroll(false);
      }
    } else {
      el?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId, shouldScroll]);

  return (
    <section className="relative mt-10 mb-14">

      {/* ───────────── MOBILE LAYOUT ───────────── */}
  

<div className="md:hidden relative overflow-hidden rounded-[24px] border border-white/[0.05] bg-[#06070b]">

  {/* BG */}
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 72% 35%, rgba(30,70,255,0.14) 0%, rgba(10,20,60,0.08) 32%, transparent 62%)",
      }}
    />

    <div
      className="absolute bottom-0 left-0 w-[50%] h-[40%]"
      style={{
        background:
          "radial-gradient(circle at 0% 100%, rgba(180,20,20,0.10) 0%, transparent 70%)",
        filter: "blur(34px)",
      }}
    />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 px-3.5 py-4">

    {/* HEADING */}
    <div className="mb-4">
      <p className="text-[9px] uppercase tracking-[0.32em] text-white/32 font-semibold">
        Service Selection
      </p>

      <h3
        className="mt-1.5 text-[0.98rem] leading-snug text-white/90"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
        }}
      >
        Choose the service your vehicle needs.
      </h3>
    </div>

    {/* COMPACT GRID */}
    <div
      ref={tabsRef}
      className="grid grid-cols-3 gap-2"
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
            onClick={() => {
              goTo(SERVICES.findIndex((x) => x.id === s.id));
              if (window.innerWidth < 768) setShouldScroll(true);
            }}
            onTouchStart={onInteraction}
            className={`
              group relative overflow-hidden rounded-[18px] border transition-all duration-300
              ${
                isActive
                  ? "border-primary/40 bg-white/[0.07]"
                  : "border-white/[0.05] bg-white/[0.025]"
              }
            `}
            style={{
              minHeight: "92px",
              padding: "12px 10px",
            }}
          >

            {/* ACTIVE GLOW */}
            {isActive && (
              <>
                <motion.div
                  layoutId="mobile-service-active"
                  className="absolute inset-0 rounded-[18px]"
                  transition={{
                    type: "spring",
                    stiffness: 360,
                    damping: 28,
                  }}
                />

                <div
                  className="absolute inset-0 rounded-[18px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(35,75,255,0.10) 0%, transparent 70%)",
                  }}
                />
              </>
            )}

            <div className="relative z-10 flex h-full flex-col justify-between">

              {/* ICON */}
              <div
                className={`
                  flex h-8 w-8 items-center justify-center rounded-xl border
                  ${
                    isActive
                      ? "border-primary/30 bg-primary/10"
                      : "border-white/[0.06] bg-white/[0.03]"
                  }
                `}
              >
                <Icon
                  className={`
                    h-3.5 w-3.5 transition-colors duration-300
                    ${
                      isActive
                        ? "text-primary"
                        : "text-white/50"
                    }
                  `}
                />
              </div>

              {/* TITLE */}
              <p
                className={`
                  mt-3 text-[9px] uppercase leading-[1.35] tracking-[0.14em]
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/58"
                  }
                `}
                style={{
                  fontFamily:
                    "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                }}
              >
                {s.title}
              </p>
            </div>

            {/* ACTIVE BORDER */}
            {isActive && (
              <motion.div
                layoutId="mobile-selector-border"
                className="absolute inset-0 rounded-[18px] border border-primary/40 pointer-events-none"
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 28,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  </div>
</div>

      {/* ───────────── DESKTOP LAYOUT ───────────── */}
      <div className="hidden md:block">
        <div
          ref={tabsRef}
          className="grid grid-cols-3 xl:grid-cols-6 gap-4 py-4"
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
                onClick={() =>
                  goTo(SERVICES.findIndex((x) => x.id === s.id))
                }
                className={`
                  group relative flex flex-col items-center gap-2 rounded-2xl border px-4 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300
                  ${
                    isActive
                      ? "border-primary/40 bg-white/[0.07] text-white"
                      : "border-white/[0.05] bg-white/[0.025] text-muted-foreground hover:bg-secondary/50 hover:text-silver"
                  }
                `}
                style={{ minHeight: "110px" }}
              >
                <Icon
                  className={`h-6 w-6 mb-2 transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-silver"
                  }`}
                />
                <span>{s.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="desktop-active-pill"
                    className="absolute inset-0 rounded-2xl border border-primary/50 shadow-[0_0_15px_rgba(210,40,40,0.18)] pointer-events-none"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../components/Navbar";
import { SERVICES } from "../components/services/data/services";
import { SectionHeader } from "../components/services/section-header";
import { ServiceMenu } from "../components/services/service-menu";
import { ServiceCard } from "../components/services/service-card";
import Footer from "../components/footer/Footer";

const AUTOSCROLL_INTERVAL = 5000;
const TOUCH_PAUSE_DURATION = 120000;

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    const currentIndex = SERVICES.findIndex((s) => s.id === activeId);
    const nextIndex = (currentIndex + 1) % SERVICES.length;
    setDirection(1);
    setActiveId(SERVICES[nextIndex].id);
  }, [activeId]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, AUTOSCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  const handleUserInteraction = useCallback(() => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    setIsPaused(true);
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), TOUCH_PAUSE_DURATION);
  }, []);

  const handleMouseEnter = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    setIsPaused(true);
  };
  const handleMouseLeave = () => setIsPaused(false);
  const handleBookNow = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    setIsPaused(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-background overflow-x-hidden">

        {/*
          SectionHeader wrapper:
          - pt-20/pt-28 pushes below fixed navbar
          - w-screen + negative margins = true full bleed on ALL screen sizes
          - overflow-hidden clips any residual scroll bars
        */}
        <div
          style={{
            width: "100vw",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            overflow: "hidden",
          }}
        >
          <SectionHeader />
        </div>

        {/* Constrained content below */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12">
          <ServiceMenu
            activeId={activeId}
            setActiveId={setActiveId}
            setDirection={setDirection}
            onInteraction={handleUserInteraction}
          />
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleUserInteraction}
          >
            <ServiceCard
              activeId={activeId}
              direction={direction}
              setActiveId={setActiveId}
              setDirection={setDirection}
              onBookNow={handleBookNow}
              onInteraction={handleUserInteraction}
            />
          </div>
        </div>
      </main>

      <Footer showBrands={false} />
    </div>
  );
}
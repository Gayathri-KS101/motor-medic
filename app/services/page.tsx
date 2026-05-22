"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { SERVICES } from "../components/services/data/services";
import { SectionHeader } from "../components/services/section-header";
import { ServiceMenu } from "../components/services/service-menu";
import { ServiceCard } from "../components/services/service-card";

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const [direction, setDirection] = useState(0);

  return (
    <section className="bg-background py-20 sm:py-28">
      <Navbar />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader />

        <ServiceMenu
          activeId={activeId}
          setActiveId={setActiveId}
          setDirection={setDirection}
        />

        <ServiceCard
          activeId={activeId}
          direction={direction}
          setActiveId={setActiveId}
          setDirection={setDirection}
        />
      </div>
    </section>
  );
}
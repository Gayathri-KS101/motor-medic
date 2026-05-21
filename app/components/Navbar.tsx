"use client";

import { useEffect, useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
      : "bg-transparent"
  }`}
>
  <nav className="container flex items-center justify-between h-20 lg:h-24">

  <a
    href="#home"
    className="flex items-center gap-1 md:gap-2 shrink-0 leading-none"
  >
    {/* LOGO */}
    <img
      src="/navbar/LOGO PNG.png"
      alt="MotorMedic Logo"
      className="
        block
        w-14 sm:w-16 md:w-20 lg:w-24
        h-auto
        object-contain
      "
    />

    {/* TEXT */}
    {/* TEXT */}
<img
  src="/navbar/FONT PNG.png"
  alt="MotorMedic"
  className="
    block
    w-32 sm:w-40 md:w-52 lg:w-60 xl:w-68
    h-auto
    object-contain
  "
/>
  </a>



        <ul className="hidden md:flex items-center gap-8">
  {links.map((l) => (
    <li key={l.href}>
      <a
        href={l.href}
        className="
          relative
          px-1 py-2
          text-sm
          font-medium
          text-foreground/75
          hover:text-white
          transition-colors
          duration-300

          after:absolute
          after:left-0
          after:-bottom-0.5
          after:h-[2px]
          after:w-full
          after:origin-left
          after:scale-x-0
          after:bg-white
          after:shadow-[0_0_10px_rgba(255,255,255,0.9)]
          after:transition-transform
          after:duration-300

          hover:after:scale-x-100
        "
      >
        {l.label}
      </a>
    </li>
  ))}
</ul>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Book Now</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden container mt-4 pb-4 animate-fade-up">
          <ul className="flex flex-col gap-2 bg-card border border-border rounded-2xl p-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-primary/20 text-foreground/90"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" asChild className="mt-2">
              <a href="#contact">Book Now</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
import {
  Wrench,
  Gauge,
  Cog,
  Battery,
  Disc3,
  ShieldCheck,
  Sparkles,
  Car,
} from "lucide-react";

const services = [
  { icon: Wrench, title: "Full Servicing", desc: "Comprehensive logbook servicing for all makes and models." },
  { icon: Gauge, title: "Diagnostics", desc: "Advanced computer diagnostics to identify issues fast." },
  { icon: ShieldCheck, title: "WOF Inspections", desc: "Quick, reliable Warrant of Fitness checks while you wait." },
  { icon: Disc3, title: "Brakes & Suspension", desc: "Expert brake repairs and suspension tuning for safety." },
  { icon: Cog, title: "Performance Tuning", desc: "ECU remaps and performance upgrades for enthusiasts." },
  { icon: Battery, title: "EV & Hybrid Care", desc: "Specialist servicing for electric and hybrid vehicles." },
  { icon: Car, title: "Tyres & Alignment", desc: "Premium tyres, fitting and precision wheel alignment." },
  { icon: Sparkles, title: "Detailing", desc: "Showroom finish detailing, ceramic coating and polishing." },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-gradient-dark">
      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-3xl mb-20 text-center">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            What we do
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">
            OFFERED <span className="text-gradient-primary">SERVICES</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every job is backed by certified technicians, genuine parts and a 12-month workmanship guarantee.
          </p>
        </div>

        <div
  className="
    grid
    grid-cols-2
    sm:grid-cols-2
    lg:grid-cols-4

    gap-3 sm:gap-5 md:gap-6

    w-full
    max-w-[1400px]

    px-4 sm:px-6 md:px-8

    justify-items-center
    mx-auto
  "
>
  {services.map((s, i) => (
    <div
      key={s.title}
      className="
      
        group relative
        w-full 
        max-w-[170px]
sm:max-w-[240px]
lg:max-w-[320px]

min-h-[180px]
sm:min-h-[220px]
lg:min-h-[250px]

p-4 sm:p-6 md:p-7

        p-6 sm:p-7 md:p-8

        rounded-2xl
        bg-card
        border border-border

        hover:border-primary/60
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[var(--shadow-glow)]

        overflow-hidden
      "
      style={{ animationDelay: `${i * 60}ms` }}
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          translate-y-1/2

          w-40 h-40
          rounded-full
          blur-3xl

          bg-primary/0
          group-hover:bg-primary/20

          transition-all duration-700
        "
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-xl
            bg-secondary
            border border-border

            flex items-center justify-center

            mb-5

            group-hover:bg-gradient-primary
            group-hover:border-transparent

            transition-all
          "
        >
          <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-silver group-hover:text-primary-foreground transition-colors" />
        </div>

        <h3 className="text-sm sm:text-lg md:text-xl mb-3 tracking-wide">
          {s.title}
        </h3>

        <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {s.desc}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Services;
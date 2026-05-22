export const SectionHeader = () => {
  return (
    <header className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          What we do
        </p>
      </div>

      <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Workshop services, engineered around your vehicle.
      </h2>

      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        From routine servicing to performance tuning, every job is carried out
        by certified technicians using OE-grade parts and proper diagnostic
        equipment.
      </p>
    </header>
  );
};
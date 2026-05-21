export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-red-500 mb-4">
          MotorMedic Automotive
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Services
        </h1>

        <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
          Premium workshop services experience is currently under construction.
          Something cinematic is coming soon.
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="
              inline-flex
              items-center
              justify-center

              px-6 py-3
              rounded-xl

              bg-red-600
              hover:bg-red-500

              transition-all duration-300
            "
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
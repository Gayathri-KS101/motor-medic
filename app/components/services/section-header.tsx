import { Shield, Zap } from "lucide-react";

export const SectionHeader = () => {
  return (
    <header className="svc-header">

      {/* ── BACKGROUND ── */}
      <div className="svc-header-bg">

        {/* Engine image + blends */}
        <div className="svc-header-img-wrap">
          <img
            src="/service/rotary-car-engine-details-combustion.png"
            alt=""
            aria-hidden="true"
            className="svc-header-img"
          />
          <div className="svc-header-blend-left" />
          <div className="svc-header-blend-tb" />
          <div className="svc-header-blend-right" />
        </div>

        {/* Atmospheric effects */}
        <div className="svc-header-blue-glow" />
        <div className="svc-header-blue-streak" />
        <div className="svc-header-vignette" />
        <div className="svc-header-red-ambient" />
      </div>

      {/* ── CONTENT ── */}
      <div className="svc-header-content">
        <div className="svc-header-inner">

          {/* Eyebrow */}
          <div className="svc-header-eyebrow">
            <div className="svc-header-eyebrow-line" />
            <p className="svc-header-eyebrow-text">Service Menu</p>
          </div>

          {/* Headline */}
          <h1 className="svc-header-h1">
            <span className="svc-header-h1-our">OUR</span>
            <span className="svc-header-h1-services">SERVICES</span>
          </h1>

          {/* Description */}
          <p className="svc-header-desc">
            Advanced automotive engineering and clinical diagnostics
            for the modern performance vehicle.
          </p>

          {/* Chips */}
          <div className="svc-header-chips">
            <div className="svc-header-chip svc-header-chip-1">
              <Shield className="svc-header-chip-icon-red" />
              <span className="svc-header-chip-label-1">Master Techs</span>
            </div>
            <div className="svc-header-chip svc-header-chip-2">
              <Zap className="svc-header-chip-icon-blue" />
              <span className="svc-header-chip-label-2">Engineered to Win</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="svc-header-bottom-blend" />
    </header>
  );
};
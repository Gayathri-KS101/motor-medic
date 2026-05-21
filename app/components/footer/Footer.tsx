import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import type { ReactNode, ComponentType, SVGProps } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const BRANDS = [
  { name: "TOYOTA",   logo: "/brand/toyota.png"   },
  { name: "BMW",      logo: "/brand/bmw.svg"       },
  { name: "AUDI",     logo: "/brand/audi.png"      },
  { name: "FORD",     logo: "/brand/ford.png"      },
  { name: "MAZDA",    logo: "/brand/mazda.png"     },
  { name: "TESLA",    logo: "/brand/tesla.png"     },
  { name: "MERCEDES", logo: "/brand/marcedes.png"  },
  { name: "NISSAN",   logo: "/brand/nissan.png"    },
  { name: "HYUNDAI",  logo: "/brand/hyundai.png"   },
];

const HOURS = [
  { day: "Mon – Fri", time: "8:00 – 17:30" },
  { day: "Saturday",  time: "9:00 – 14:00" },
  { day: "Sunday",    time: "Closed"        },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Column section heading — styled via .footer-col-heading in globals.css */
const ColHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="footer-col-heading">{children}</h3>
);

/**
 * Lucide icon with red accent colour.
 * Size + flexShrink kept inline — they are layout values, not theme values.
 */
const AccentIcon = ({
  icon: Icon,
  faded = false,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  faded?: boolean;
}) => (
  <Icon
    style={{
      width: "0.9rem",
      height: "0.9rem",
      flexShrink: 0,
      color: faded ? "rgba(130,125,140,0.4)" : "rgba(210,40,40,0.85)",
    }}
  />
);

// ─── Component ────────────────────────────────────────────────────────────────

export const Footer = () => (
  <footer id="contact" className="footer-root footer-grain">

    {/* Ambient crimson bloom — decorative, aria-hidden */}
    <div aria-hidden="true" className="footer-bloom" />

    {/* ── Silver reflective top divider ── */}
    <div className="footer-content" style={{ paddingTop: "2px" }}>
      <div className="silver-divider" />
    </div>

    {/* ══════════════════════════════════════
        BRANDS MARQUEE
    ══════════════════════════════════════ */}
    <div className="footer-content footer-brands-section">

      <p className="footer-brands-label">Trusted by drivers of</p>

      {/* Duplicate array for seamless infinite loop */}
      <div className="marquee-fade">
        <div className="marquee-track">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="brand-item">
              <img src={brand.logo} alt={brand.name} />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* ── Thin crimson mid-separator ── */}
    <div className="footer-content">
      <div className="crimson-divider" />
    </div>

    {/* ══════════════════════════════════════
        MAIN FOOTER GRID
    ══════════════════════════════════════ */}
    <div className="footer-content footer-grid">

      {/* Col 1 — Brand identity */}
      <div>
        <a href="#home" className="footer-brand">
          <img src="/navbar/LOGO PNG.png" alt="MotorMedic Logo"  className="footer-brand-logo"     />
          <img src="/navbar/FONT PNG.png" alt="MotorMedic"       className="footer-brand-wordmark" />
        </a>

        <p className="footer-brand-desc">
          Auckland's premium independent car workshop. Precision care, honest service.
        </p>

        <div className="footer-social-row">
          <a href="#" aria-label="Instagram" className="social-btn">
            <FaInstagram style={{ width: "0.95rem", height: "0.95rem" }} />
          </a>
          <a href="#" aria-label="Facebook" className="social-btn">
            <FaFacebook style={{ width: "0.95rem", height: "0.95rem" }} />
          </a>
        </div>
      </div>

      {/* Col 2 — Visit Us */}
      <div>
        <ColHeading>Visit Us</ColHeading>
        <a
          href="https://maps.app.goo.gl/fepEQtV3DB9q9QXb9"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-info-link"
        >
          <MapPin style={{ width: "0.95rem", height: "0.95rem", marginTop: "0.15rem", flexShrink: 0, color: "rgba(210,40,40,0.85)" }} />
          <span>
            5 Wingate Street,<br />
            Avondale, Auckland 0600<br />
            New Zealand
          </span>
        </a>
      </div>

      {/* Col 3 — Contact */}
      <div>
        <ColHeading>Contact</ColHeading>
        <ul className="footer-info-list gap-contact">
          <li>
            <a href="tel:+6427916555" className="footer-info-link" style={{ alignItems: "center" }}>
              <AccentIcon icon={Phone} />
              027 916 5555
            </a>
          </li>
          <li>
            <a href="mailto:hello@motormedic.co.nz" className="footer-info-link" style={{ alignItems: "center" }}>
              <AccentIcon icon={Mail} />
              hello@motormedic.co.nz
            </a>
          </li>
        </ul>
      </div>

      {/* Col 4 — Hours */}
      <div>
        <ColHeading>Hours</ColHeading>
        <ul className="footer-info-list gap-hours">
          {HOURS.map(({ day, time }) => {
            const isClosed = time === "Closed";
            return (
              <li key={day} className={`footer-hours-item${isClosed ? " closed" : ""}`}>
                <AccentIcon icon={Clock} faded={isClosed} />
                <span>
                  <span className="footer-hours-day">{day}:</span>
                  {time}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

    </div>

    {/* ── Bottom bar ── */}
    <div className="footer-bottom">
      <div className="footer-bottom-inner">
        <p>© {new Date().getFullYear()} MotorMedic Auckland. All rights reserved.</p>
        <p>Built with precision in Tāmaki Makaurau.</p>
      </div>
    </div>

  </footer>
);

export default Footer;
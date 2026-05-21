import { MapPin, Phone, Mail, Clock, Wrench } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const brands = ["TOYOTA", "BMW", "AUDI", "FORD", "MAZDA", "HOLDEN", "TESLA", "MERCEDES", "SUBARU", "HYUNDAI"];

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-background border-t border-border">
      {/* Brands strip */}
      <div className="border-b border-border py-10 overflow-hidden">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Trusted by drivers of
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {brands.map((b) => (
              <span
                key={b}
                className="font-display text-2xl text-silver-dark hover:text-silver transition-colors tracking-widest"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="font-display text-2xl tracking-wider">
              MOTOR<span className="text-gradient-primary">MEDIC</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Auckland's premium independent car workshop. Precision care, honest service.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="FaInstagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="FaFacebook" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
              <FaFacebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-silver mb-4">Visit Us</h3>
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            142 Great South Road,<br /> Penrose, Auckland 1061<br /> New Zealand
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-silver mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+6499000000" className="hover:text-foreground">+64 9 900 0000</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:hello@motormedic.co.nz" className="hover:text-foreground">hello@motormedic.co.nz</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-silver mb-4">Hours</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon – Fri: 7:30 – 18:00</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Sat: 8:00 – 14:00</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MotorMedic Auckland. All rights reserved.</p>
          <p>Built with precision in Tāmaki Makaurau.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
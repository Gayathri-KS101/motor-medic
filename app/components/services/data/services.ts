import {
  Activity,
  CircleDot,
  Eye,
  Gauge,
  Shield,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

export type Service = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  startingPrice: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: "full-service",
    icon: Wrench,
    title: "Full Servicing",
    tagline: "Comprehensive care for complete peace of mind.",
    description:
      "Our full service is a thorough mechanical inspection covering every critical system in your vehicle. Engine oil and filter, all fluid levels, belts, hoses, brakes, steering, suspension, lights, and tyres are all checked and serviced to manufacturer specification. We leave no bolt unturned.",
    duration: "3 – 4 hours",
    startingPrice: "$249",
    features: [
      "Engine oil & filter replacement",
      "All fluids checked & topped up",
      "Brake system inspection",
      "Belts & hoses assessment",
      "Battery health check",
      "30-point safety inspection report",
    ],
  },

  {
    id: "diagnostics",
    icon: Activity,
    title: "Diagnostics",
    tagline: "Precision fault finding with professional-grade tools.",
    description:
      "Warning lights and strange noises are your car's way of asking for help. Our technicians use the latest OBD-II diagnostic equipment alongside manual inspection to trace faults accurately — saving you money by fixing the right thing, first time.",
    duration: "1 – 2 hours",
    startingPrice: "$89",
    features: [
      "Full OBD-II fault code scan",
      "Live data analysis",
      "Engine, ABS & airbag systems",
      "Transmission diagnostics",
      "Written fault report provided",
      "Repair quote included",
    ],
  },

  {
    id: "brakes-suspension",
    icon: Shield,
    title: "Brake & Suspension",
    tagline: "Confidence in every corner, every stop.",
    description:
      "Brakes and suspension are the backbone of vehicle safety. We inspect pads, rotors, calipers, wheel bearings, shock absorbers, ball joints, and tie rods — replacing only what is required. Every job is road-tested before handover.",
    duration: "2 – 5 hours",
    startingPrice: "$149",
    features: [
      "Pad & rotor inspection / replacement",
      "Caliper service",
      "Shock absorber assessment",
      "Ball joint & control arm check",
      "Wheel bearing inspection",
      "Road test & sign-off",
    ],
  },

  {
    id: "ev-hybrid",
    icon: Zap,
    title: "EV & Hybrid Care",
    tagline: "Specialist care for the next generation of vehicles.",
    description:
      "Electric and hybrid vehicles require a different level of expertise. Our certified EV technicians handle high-voltage battery health assessments, regenerative brake servicing, thermal management systems, and charging system checks — keeping your vehicle at peak efficiency.",
    duration: "2 – 3 hours",
    startingPrice: "$199",
    features: [
      "HV battery health & capacity report",
      "Regenerative braking service",
      "Thermal management check",
      "Charging port & cable inspection",
      "Software diagnostics",
      "Range optimisation advice",
    ],
  },

  {
    id: "performance-tuning",
    icon: Gauge,
    title: "Performance Tuning",
    tagline: "Unlock the potential your car was built with.",
    description:
      "From ECU remapping to suspension geometry and exhaust upgrades, our performance specialists optimise your vehicle for the driving experience you want — whether that's sharper daily driving dynamics or maximum track performance.",
    duration: "Half day – full day",
    startingPrice: "$399",
    features: [
      "ECU remap & calibration",
      "Dyno tuning available",
      "Intake & exhaust upgrades",
      "Suspension geometry setup",
      "Brake upgrade consultation",
      "Before / after power figures",
    ],
  },

  {
    id: "wof",
    icon: Eye,
    title: "WOF Inspection",
    tagline: "Fast, thorough, and honest.",
    description:
      "We are a certified NZTA Warrant of Fitness inspection station. Our inspectors follow the full government checklist — lights, brakes, tyres, steering, seatbelts, glazing, and more — and will advise you on any advisories alongside failures.",
    duration: "45 – 60 minutes",
    startingPrice: "$69",
    features: [
      "Full NZTA WOF checklist",
      "Lights & electrical checks",
      "Tyre tread & condition",
      "Brake performance test",
      "Seatbelt & restraints",
      "Same-day repairs available",
    ],
  },

  {
    id: "tyres-alignment",
    icon: CircleDot,
    title: "Tyres & Alignment",
    tagline: "Straight tracking, even wear, maximum grip.",
    description:
      "Correct wheel alignment extends tyre life, improves fuel economy, and makes your car handle predictably. We supply and fit a full range of tyres from budget to premium performance brands, with computerised 4-wheel alignment on every fitment.",
    duration: "1 – 2 hours",
    startingPrice: "$35 per tyre",
    features: [
      "4-wheel computerised alignment",
      "Tyre supply & fitment",
      "Balancing included",
      "Tyre rotation service",
      "TPMS sensor service",
      "Alignment report printout",
    ],
  },

  {
    id: "detailing",
    icon: Sparkles,
    title: "Detailing",
    tagline: "Showroom finish, every single time.",
    description:
      "Our detailing packages go far beyond a basic wash. From hand polish and ceramic coating to full interior deep clean and leather conditioning, we restore your vehicle's finish to its absolute best — and protect it for longer.",
    duration: "3 – 8 hours",
    startingPrice: "$199",
    features: [
      "Full exterior hand wash & dry",
      "Clay bar decontamination",
      "Machine polish available",
      "Ceramic coating packages",
      "Interior vacuum & deep clean",
      "Leather conditioning",
    ],
  },
];
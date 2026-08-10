import { ServiceDetail, ExecutedProject, MarineEquipment } from '../types';

export const COMPANY_INFO = {
  name: "MH Jesse Nigeria Limited",
  tagline: "Consulting · Technology · Engineering · Procurement · Construction",
  shortProfile: "MH Jesse is a 100% Nigerian company in the oil and gas industry. Our primary focus is to deploy professional teams and technical expertise that contribute positively to the oil and gas sector in Nigeria and West Africa across upstream engineering, procurement, fabrication, marine logistics, and facility maintenance.",
  fullProfile: "We provide unique, safe, professional services led by seasoned oil-industry professionals with combined hands-on and top-management experience across all phases of the upstream industry — engineering, fabrication and maintenance, coating services, marine logistics and material procurement — reinforced by the experience and technology of our affiliates and technical partners.",
  address: "Fortress Yard, 26 Boskel Road, Off Port Harcourt–Aba Road, Elelewon, Port Harcourt, Rivers State, Nigeria",
  fabricationYard: "Igwuruta, Port Harcourt, Rivers State, Nigeria",
  email: "info@mh-jesse.com",
  phone: "+234 803 604 6851",
  vision: "To be a top global provider of oil and gas services, achieved by consistently delivering successful, safe, and innovative projects.",
  mission: "To offer satisfaction to our clients with a highly integrated, quality package of products and services, with strict adherence to environmental protection, health and safety, constantly utilising technology and local resources to improve service delivery.",
  serviceSpectrum: [
    "Engineering Services",
    "Project Management",
    "Procurement",
    "Marine Logistics",
    "Manpower Solutions"
  ]
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "engineering-services",
    title: "Engineering Services",
    category: "engineering",
    shortDesc: "Front-end engineering design (FEED), detailed engineering, 3D modeling, flow assurance, and onshore/offshore pipeline design.",
    fullDesc: "Complete process & facility engineering consulting and design solutions from concept to detailed IFC drawings. Our technical experts execute front-end engineering design (FEED), debottlenecking, PDMS 3D modeling, flow assurance, and pipeline integrity studies for onshore and offshore assets.",
    iconName: "Compass",
    capabilities: [
      "Front-end engineering design (FEED) and detailed engineering (IFC)",
      "Debottlenecking and capacity review for operating upstream assets",
      "Asset data management systems & PDMS 3D model development",
      "Plan of Development (PoD) assistance and cost estimation",
      "Process, electrical, instrumentation, piping & mechanical design",
      "Flow assurance, thermal hydraulic design, and corrosion engineering",
      "Onshore pipeline route selection, stability calculations & river crossing design",
      "Offshore pipeline riser, crossing & mooring design"
    ]
  },
  {
    id: "project-management",
    title: "Project Management",
    category: "project-management",
    shortDesc: "Disciplined management of engineering scope, quality, schedule, and interfaces from concept to project closure.",
    fullDesc: "Comprehensive oversight of engineering deliverables, document control, and multi-disciplinary interface management to guarantee safety, quality, budget adherence, and strict regulatory compliance.",
    iconName: "Briefcase",
    capabilities: [
      "Management of Concept, FEED & Detailed Engineering programmes",
      "Interface management across engineering disciplines, vendors & operators",
      "Document control & engineering deliverables tracking",
      "Technical query resolution & Management of Change (MoC)",
      "Constructability, value engineering & risk mitigation reviews",
      "QA/QC oversight & regulatory compliance management",
      "Disciplined 5-Stage Delivery Framework: Initiation → Planning → Execution → Control → Closure"
    ],
    keyHighlights: [
      "Disciplined 5-Stage Framework: Initiation → Planning → Launch & Execution → Monitoring & Control → Project Closure"
    ]
  },
  {
    id: "technical-industrial-procurement",
    title: "Procurement & Strategic Sourcing",
    category: "procurement",
    shortDesc: "Global supply chain solutions sourcing high-spec pipes, fittings, OCTG tubulars, valves, and safety wear.",
    fullDesc: "Competitive worldwide sourcing backing clients through dedicated procurement services. We supplement internal procurement departments across strategic planning, supplier rationalization, material inspection, and international logistics.",
    iconName: "ShoppingCart",
    capabilities: [
      "High-pressure carbon steel, stainless steel & alloy pipes and fittings",
      "Oil Country Tubular Goods (OCTG casing and tubing)",
      "Valves — Ball, Gate, Globe, Check, Needle & automated control valves",
      "Valve servicing, recalibration & technical remanufacturing",
      "Personal Protective Equipment (PPE), safety gear & industrial instrumentation",
      "Supplier rationalization, strategic sourcing & international logistics"
    ]
  },
  {
    id: "marine-logistics-offshore-support",
    title: "Marine Logistics & Offshore Support",
    category: "marine",
    shortDesc: "Comprehensive offshore marine logistics, fuel bunkering, tugboat towing, and accommodation support across Nigerian waters.",
    fullDesc: "Prompt and reliable marine support backing oilfield operations with specialized fuel barges, ramp barges, high-horsepower tugboats, and offshore accommodation houseboats.",
    iconName: "Ship",
    capabilities: [
      "Heavy deck cargo and ramp barge logistics operations",
      "Offshore fuel supply, bunkering & fluid transportation",
      "Tugboat towing, anchor handling & rig maneuvering support",
      "Offshore accommodation houseboats for project crews",
      "Offshore equipment transfer & swamp channel logistics support",
      "Seasoned marine personnel & certified offshore safety crew"
    ]
  },
  {
    id: "manpower-solutions",
    title: "Manpower Solutions & Technical Resourcing",
    category: "manpower",
    shortDesc: "Supply of qualified national and expatriate oilfield engineers, technical specialists, and project personnel.",
    fullDesc: "End-to-end technical manpower solutions providing highly experienced engineering consultants, wellsite supervisors, subsea specialists, HSE officers, and project personnel for short-term and long-term oil & gas assignments.",
    iconName: "Users",
    capabilities: [
      "Technical staffing & expatriate/national engineering placement",
      "Drilling, subsea, pipeline & process engineering consultants",
      "Onshore & offshore construction supervisors & QA/QC inspectors",
      "HSE managers, safety officers & environmental compliance specialists",
      "Payroll management, logistics support & crew mobilization",
      "Competency assessment, recruitment & contract workforce management"
    ]
  }
];

export const EXECUTED_PROJECTS: ExecutedProject[] = [
  {
    id: "p1",
    title: "Drilling Project Management Services — OML 65",
    client: "COPDC Petroleum Development Company Limited",
    status: "COMPLETED",
    category: "Drilling & Operations",
    description: "Full drilling project management services across well delivery planning and execution."
  },
  {
    id: "p2",
    title: "Field Optimisation Studies — OML 65",
    client: "COPDC Petroleum Development Company Limited",
    status: "COMPLETED",
    category: "Field Engineering",
    description: "Subsurface and facility engineering studies for optimal field production."
  },
  {
    id: "p3",
    title: "30,000 & 75,000 BPD 3-Phase Production Separators Delivery",
    client: "Odidi Field & Jones Creek (OML 42)",
    status: "COMPLETED",
    category: "Pressure Vessels & EPF",
    description: "Design, fabrication, installation, and commissioning of high-capacity separators and skids."
  },
  {
    id: "p4",
    title: "Project Management for Umuchem Flare Gas Monetization",
    client: "TWEMS Energies Limited",
    status: "COMPLETED",
    category: "Project Management",
    description: "Disciplined project management for flare gas monetization initiative."
  },
  {
    id: "p5",
    title: "QA/QC for Installation of Screw Compressor for LP Gas",
    client: "Midwestern Oil and Gas Limited",
    status: "COMPLETED",
    category: "QA/QC & Engineering",
    description: "Quality assurance and inspection for low-pressure gas screw compressor at Umusadege Field."
  },
  {
    id: "p6",
    title: "MycelX Produced Water Treatment Package Commissioning & O&M",
    client: "Energia Limited",
    status: "COMPLETED",
    category: "Water Treatment & O&M",
    description: "Project management, commissioning, and operations support for produced water treatment."
  },
  {
    id: "p7",
    title: "Engineering Support Services for Alternative Crude Oil Evacuation",
    client: "IMSE Energy Resources Limited",
    status: "COMPLETED",
    category: "Engineering Support",
    description: "Engineering design and support for crude oil evacuation pipeline and logistics."
  },
  {
    id: "p8",
    title: "Feasibility Studies & Concept Selection — 40 kbpd Crude Oil Refinery",
    client: "EPT – Donna Spectre Limited",
    status: "COMPLETED",
    category: "Consulting & FEED",
    description: "Technical feasibility, concept selection, and economic evaluation for a 40,000 bpd refinery."
  },
  {
    id: "p9",
    title: "QA/QC Annual Inspection & Maintenance of Field Earthing System",
    client: "EPT – Midwestern Oil and Gas Limited",
    status: "COMPLETED",
    category: "Maintenance & QA/QC",
    description: "Annual electrical safety inspection, testing, and maintenance of earthing systems."
  }
];

export const MARINE_FLEET: MarineEquipment[] = [
  {
    name: "1,000 T Ramp Barge",
    type: "Ramp Barge",
    capacityHP: "1,000 Tonnes Capacity",
    description: "Heavy equipment and deck cargo transportation across swamp and offshore channels.",
    icon: "Ship"
  },
  {
    name: "800 T Ramp Barge",
    type: "Ramp Barge",
    capacityHP: "800 Tonnes Capacity",
    description: "Versatile ramp barge for vehicle loading, heavy piping, and structural skid delivery.",
    icon: "Ship"
  },
  {
    name: "1,200 T Fuel Barge",
    type: "Fuel Barge",
    capacityHP: "1,200 Tonnes Fuel Capacity",
    description: "High-capacity offshore fuel bunkering and field supply support vessel.",
    icon: "Droplets"
  },
  {
    name: "1,000 HP Tug Boat",
    type: "Tug Boat",
    capacityHP: "1,000 Horsepower",
    description: "High-power towing, barge positioning, and marine maneuverability support.",
    icon: "Anchor"
  },
  {
    name: "800 HP Tug Boat",
    type: "Tug Boat",
    capacityHP: "800 Horsepower",
    description: "Reliable marine towing and rig site assistance for shallow and offshore waters.",
    icon: "Anchor"
  },
  {
    name: "60-Man Houseboat",
    type: "Accommodation Houseboat",
    capacityHP: "60 Personnel Capacity",
    description: "Fully equipped offshore accommodation facility for personnel and project crews.",
    icon: "Users"
  }
];

export const PROJECT_FRAMEWORK = [
  {
    step: "1",
    title: "Initiation & Conception",
    points: ["Define project goals & deliverables", "Create comprehensive project brief"]
  },
  {
    step: "2",
    title: "Planning & Design Basis",
    points: ["Scope, schedule & budget definition", "Deadlines, milestones & team role matrix", "Communication & Risk Management Plan"]
  },
  {
    step: "3",
    title: "Launch & Execution",
    points: ["Active budget management", "Resource planning & mobilization", "Regular status & safety reports"]
  },
  {
    step: "4",
    title: "Monitoring & Control",
    points: ["Quality of engineering deliverables", "Team performance tracking", "Management of Change (MoC)"]
  },
  {
    step: "5",
    title: "Project Closure & Handover",
    points: ["Retrospective meeting & lessons learned", "Operations readiness & project closure report"]
  }
];

export const WHY_MH_JESSE = [
  {
    title: "Engineering Services",
    desc: "Front-end engineering (FEED), detailed design, flow assurance, and pipeline engineering excellence."
  },
  {
    title: "Disciplined Project Management",
    desc: "Single-point accountability and structured project management frameworks ensuring schedule and budget control."
  },
  {
    title: "Global Technical Procurement",
    desc: "Worldwide supply chain solutions delivering high-grade OCTG tubulars, piping, valves, and safety wear."
  },
  {
    title: "Offshore Marine Support",
    desc: "Prompt offshore marine logistics, cargo transport, bunkering support, and swamp operations across West African waters."
  },
  {
    title: "Qualified Manpower Solutions",
    desc: "Fast mobilization of experienced national and expatriate oilfield engineers, supervisors, and project personnel."
  }
];

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
    "Engineering", "Procurement", "Construction", 
    "Installation", "Commissioning", "Operation", "Maintenance"
  ]
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "process-facility-engineering",
    title: "Engineering Consulting & Design",
    category: "engineering",
    shortDesc: "Front-end (FEED) & detailed engineering, 3D modeling, flow assurance, and onshore/offshore pipeline design.",
    fullDesc: "Complete process & facility engineering solutions from concept to detailed IFC drawings. Our technical experts execute front-end engineering design (FEED), debottlenecking, PDMS modeling, flow assurance, and pipeline integrity studies for onshore and offshore assets.",
    iconName: "Compass",
    capabilities: [
      "Front-end engineering design (FEED) and detailed engineering",
      "Debottlenecking and capacity review for operating assets",
      "Development & maintenance of asset data management systems (facilities databases, PDMS 3D model)",
      "Plan of Development assistance and cost estimation for lifecycle development",
      "Value engineering & coordination with subsurface, drilling and operations teams",
      "Process design, electrical, instrumentation, piping and 3D modeling",
      "Flow assurance, mechanical design, and corrosion design",
      "Onshore pipeline route selection, stability calculations, upheaval buckling & river crossing design",
      "Offshore pipeline riser & crossing design, DLB suitability, mooring studies & stinger design"
    ]
  },
  {
    id: "drilling-engineering",
    title: "Drilling Engineering & Operations",
    category: "drilling",
    shortDesc: "End-to-end support across the well delivery lifecycle — from well planning to rig-site execution.",
    fullDesc: "Disciplined support for oil and gas operators across the well delivery lifecycle. We ensure high safety standards, cost performance control, and seamless service company coordination during drilling and wellsite operations.",
    iconName: "Drill",
    activeEngagements: "Drilling Project Management Services — OML 65 (COPDC Petroleum Development)",
    capabilities: [
      "Well delivery planning & drilling programme development",
      "Well design support — casing, tubular & drilling-fluid programmes",
      "Rig selection, contracting & rig-readiness assurance",
      "Drilling operations supervision, monitoring & daily reporting",
      "Cost, schedule & drilling performance control",
      "Service-company coordination & drilling logistics management"
    ]
  },
  {
    id: "engineering-project-management",
    title: "Engineering Project Management",
    category: "engineering",
    shortDesc: "Disciplined management of engineering scope, quality, and interfaces from concept to issued-for-construction (IFC).",
    fullDesc: "Comprehensive oversight of engineering deliverables, document control, and multi-disciplinary interface management to guarantee safety, quality, and strict regulatory compliance.",
    iconName: "Briefcase",
    capabilities: [
      "Management of Concept, FEED & Detailed Design programmes",
      "Interface management across engineering disciplines, vendors & contractors",
      "Document control & engineering deliverables management",
      "Technical query resolution & Management of Change (MoC)",
      "Constructability & value-engineering reviews",
      "QA/QC oversight & regulatory compliance"
    ],
    keyHighlights: [
      "Disciplined 5-Stage Framework: Initiation → Planning → Launch & Execution → Monitoring & Control → Project Closure"
    ]
  },
  {
    id: "facilities-engineering-epc",
    title: "Facilities Engineering & EPF Delivery",
    category: "construction",
    shortDesc: "Single-point accountability for new process facilities (EPF) and brownfield modifications.",
    fullDesc: "Turnkey EPC delivery of Early Production Facilities (EPF), brownfield upgrades, construction supervision, pre-commissioning, commissioning, and operations readiness assurance.",
    iconName: "Factory",
    deliveredProjects: "Delivered 30,000 & 75,000 BPD 3-Phase Separators at Odidi Field & Jones Creek, OML 42",
    capabilities: [
      "EPC delivery of new & Early Production Facilities (EPF)",
      "Brownfield upgrades & modification of existing process facilities",
      "Construction supervision, progress measurement & control",
      "Pre-commissioning, commissioning & start-up management",
      "Interface management with operations & third parties",
      "Handover, close-out & operations-readiness assurance"
    ]
  },
  {
    id: "pressure-vessels-fabrication",
    title: "Pressure Vessels Design & Fabrication",
    category: "construction",
    shortDesc: "In-house design and fabrication of production separators (3-phase) and custom vessel internals.",
    fullDesc: "Expert design, fabrication, and commissioning of high-capacity production separators and pressure vessels. Includes in-house engineering of high-efficiency vessel internals for separation and water treatment.",
    iconName: "Cylinder",
    deliveredProjects: "30,000 BPD & 75,000 BPD 3-Phase Separators designed, installed and commissioned for Odidi Field & Jones Creek (OML 42)",
    internalsDesigned: [
      "Coalescing Plates",
      "Weir Plates",
      "Inlet Diverters",
      "Gas Straightening Devices",
      "Vortex Breakers",
      "Wave Breakers / Inlet Distribution Plates",
      "Mist Eliminators",
      "Defoaming Plates",
      "Sand Jetting Systems"
    ],
    capabilities: [
      "Custom 2-phase and 3-phase production separator design & fabrication",
      "ASME code compliant vessel engineering & structural skid fabrication",
      "Specialized vessel internals design for enhanced separation efficiency",
      "Pre-commissioning, factory acceptance testing & site installation"
    ]
  },
  {
    id: "technical-industrial-procurement",
    title: "Technical & Industrial Procurement",
    category: "procurement",
    shortDesc: "Global supply chain solutions sourcing high-spec pipes, fittings, OCTG, valves, and safety wear.",
    fullDesc: "Competitive worldwide sourcing backing clients through dedicated procurement services. We supplement internal procurement departments across strategic planning, supplier rationalization, and negotiation.",
    iconName: "ShoppingCart",
    capabilities: [
      "Pipes and fittings (High-pressure carbon steel, stainless & alloy)",
      "Oil Country Tubular Goods (OCTG casing and tubing)",
      "Valves — Ball, Globe, Check, Needle, Gate & control valves",
      "Valves repairs, servicing & remanufacturing",
      "Personal Protective Equipment (PPE), safety wear & industrial gadgets",
      "Supplier rationalization, strategic sourcing & international logistics"
    ]
  },
  {
    id: "marine-logistics-offshore-support",
    title: "Marine Logistics & Offshore Support",
    category: "marine",
    shortDesc: "Owned fleet of barges, tugboats, and houseboats supplying prompt oilfield support across Nigerian waters.",
    fullDesc: "Prompt and reliable marine support backing oilfield operations with our owned fleet of fuel barges, ramp barges, high-horsepower tugboats, and offshore accommodation houseboats.",
    iconName: "Ship",
    capabilities: [
      "1,000 T Ramp Barge operations",
      "800 T Ramp Barge transportation",
      "1,200 T Fuel Barge supply",
      "800 HP & 1,000 HP Tug Boat towing & maneuvering",
      "60-Man Offshore Houseboat accommodation",
      "Offshore materials, equipment transfer & swamp logistics support"
    ]
  },
  {
    id: "fabrication-construction-coating",
    title: "Fabrication, Construction & Specialized Coating",
    category: "construction",
    shortDesc: "Civil, mechanical, electrical construction with specialized protective coating & fully equipped yards.",
    fullDesc: "Comprehensive construction and fabrication services executed from our fully equipped yards at Igwuruta and Fortress Yard Port Harcourt. Includes specialized protective and inhibitive pipeline coatings.",
    iconName: "HardHat",
    yardFacilities: [
      "Vessel Handlers & Heavy Skidding Systems",
      "Cool-Cut Pipe Cutting Equipment",
      "CNC Plate Cutting Machines",
      "Plate Rolling to Pipe & Vessel Shapes",
      "Heavy Turning Machines & Large-Plate Cutters",
      "Fully Equipped Civil Construction Yard at Igwuruta"
    ],
    capabilities: [
      "Civil construction: Site preparations, soil tests, concrete foundations, wire mesh, fencing & access roads",
      "Mechanical & electrical installation works",
      "Offshore and onshore installation and maintenance",
      "Dredging, product storage & supplies and marine support services",
      "Specialized protective, barrier, and inhibitive coatings",
      "Offshore & onshore pipeline coating services"
    ]
  },
  {
    id: "facility-maintenance-cmms",
    title: "Facility Maintenance (CMMS) & Training",
    category: "maintenance",
    shortDesc: "Computerised Maintenance Management Systems (CMMS) & specialized Oil & Gas technology training.",
    fullDesc: "Deploying state-of-the-art Computerised Maintenance Management Systems (CMMS) for asset optimization and delivery of expert-led oil & gas technology training programs.",
    iconName: "Wrench",
    capabilities: [
      "Asset tracking, plant scheduling & maintenance management",
      "Facility management, job management & electronic forms (inspections/risk assessments)",
      "Advanced contractor management, job requests, budgeting & costing",
      "Basic operations skills & Process Certified Operator training",
      "Advanced 3-Phase Separator technical training by national & expatriate experts",
      "Introduction to Oil & Gas Industry & executive soft skills training"
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
    title: "Design & Fabrication",
    desc: "Proven in-house experience in pressure-vessel, separator internals, and facility design and fabrication."
  },
  {
    title: "Installation to Start-Up",
    desc: "Complete hands-on installation support, pre-commissioning, commissioning, and plant start-up experience."
  },
  {
    title: "Operations & Maintenance",
    desc: "Hands-on O&M and CMMS maintenance management experience across major Nigerian oil & gas assets."
  },
  {
    title: "Turn-Key EPC Delivery",
    desc: "Single accountable partner for end-to-end turn-key project execution with strict QHSE compliance."
  },
  {
    title: "Local Market Insight",
    desc: "100% Nigerian content compliance with profound understanding of the West African oil & gas landscape."
  }
];

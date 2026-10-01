import sumpWaterproofImg from '../assets/images/sump_waterproof_painting.jpg';
import tankCleaningImg from '../assets/images/tank_cleaning_services.jpg';
import terraceWaterproofImg from '../assets/images/terrace_waterproof_services.jpg';
import undergroundRainWaterImg from '../assets/images/underground_rain_water.jpg';
import apartmentTankCleaningImg from '../assets/images/apartment_tank_cleaning.jpg';
import schoolWaterTankCleaningImg from '../assets/images/school_water_tank_cleaning.jpg';
import leakageSumpWaterproofImg from '../assets/images/leakage_sump_waterproof.jpg';

export const servicesData = [
  {
    id: "sump-waterproof-painting",
    title: "Sump Waterproof Painting",
    slug: "/services/sump-waterproof-painting",
    shortDescription: "Professional sump waterproofing solutions designed to prevent leakage, seepage, and protect your water storage structure.",
    heroDescription: "Protect your underground concrete water sump from active seepage, structural degradation, and contamination with our high-performance food-grade waterproof painting.",
    image: sumpWaterproofImg,
    badge: "Underground Protection",
    iconName: "LuPaintbrush",
    
    // SEO
    metaTitle: "Sump Waterproof Painting Services Bengaluru | RK Water Proofing",
    metaDescription: "Professional underground sump waterproof painting services in Bengaluru by RK Water Proofing. Prevents leakage, dampness, and concrete decay with non-toxic food-grade coatings.",

    // About Section
    about: {
      title: "About Sump Waterproof Painting",
      whatIsIt: "Sump Waterproof Painting is a specialized liquid waterproofing coating system applied to the inner walls and base of underground concrete sumps. It creates a seamless, impermeable barrier that prevents water from leaking out and groundwater/seepage from entering.",
      whyRequired: "Underground sumps are constantly subjected to hydrostatic water pressure from outside soil and inner storage water. Over time, concrete absorbs moisture, develops micro-cracks, and degrades. Unprotected sumps waste precious water and risk groundwater contamination.",
      commonProblems: [
        "Continuous water level dropping due to invisible wall seepage",
        "Dampness on surrounding soil and nearby building foundations",
        "Fungal growth, algae build-up, and chemical leeching into drinking water",
        "Reinforcement steel rusting inside concrete sump walls"
      ],
      howWeHandle: "At RK Water Proofing, we thoroughly dewater and pressure-wash the sump, treat every structural crack with high-strength polymer mortar, apply anti-fungal primer, and coat the entire interior with two coats of food-grade elastomeric waterproofing paint."
    },

    // Process (6 Steps)
    process: [
      { step: "01", title: "Complete Dewatering & Inspection", description: "Emptying the sump, inspecting walls for micro-cracks, honeycombing, and structural weakness." },
      { step: "02", title: "High-Pressure Jet Washing", description: "Cleaning all algae, dirt, scale, and loose concrete particles with high-pressure water jets." },
      { step: "03", title: "Crack & Joint Polymer Treatment", description: "Grooving and filling wall joints and cracks with fiber-reinforced polymer waterproofing mortar." },
      { step: "04", title: "Anti-Fungal Primer Application", description: "Applying a deep-penetrating primer to seal concrete pores and enhance coating adhesion." },
      { step: "05", title: "Food-Grade Waterproof Coating", description: "Applying double layers of non-toxic, eco-friendly elastomeric waterproof painting." },
      { step: "06", title: "Curing & Final Quality Check", description: "Allowing proper curing time, water retention test, and issuing safety certification." }
    ],

    // Benefits
    benefits: [
      { title: "100% Leak Prevention", desc: "Seals all concrete capillary pores and joints against hydrostatic pressure." },
      { title: "Non-Toxic & Food Grade", desc: "Completely safe for drinking and household water storage." },
      { title: "Prevents Structure Decay", desc: "Protects embedded steel rebar from rust and concrete spalling." },
      { title: "Algae & Bacteria Free", desc: "Smooth coating finish prevents algae adhesion and bacterial colonization." },
      { title: "Long-Term Durability", desc: "Resilient membrane withstands continuous water immersion for years." },
      { title: "Cost-Effective Protection", desc: "Avoids expensive structural rebuilding and heavy water bill losses." }
    ],

    // Details Grid
    details: {
      serviceType: "Underground Sump Waterproofing & Coating",
      suitableFor: "Residential Homes, Villas, Apartment Complexes, Commercial Buildings",
      commonProblems: "Wall Seepage, Structural Cracks, Water Discoloration, Ground Contamination",
      recommendedMaintenance: "Inspection every 12-18 months with routine cleaning",
      serviceCoverage: "All areas across Bengaluru & neighboring regions"
    },

    // FAQs
    faqs: [
      {
        question: "Is the waterproof paint safe for drinking water sumps?",
        answer: "Yes, absolutely! We exclusively use certified non-toxic, VOC-free, food-grade epoxy/elastomeric waterproof coatings specifically engineered for potable water storage."
      },
      {
        question: "How long does the sump waterproof painting process take?",
        answer: "Typically 1 to 2 days depending on the size of the sump, cleaning requirements, and weather drying conditions between coats."
      },
      {
        question: "How do I know if my underground sump has a leakage problem?",
        answer: "Key signs include rapid unexplained water level drops, damp soil around the sump hatch, foul odor, or discolored water from soil seepage."
      },
      {
        question: "Can existing wall cracks be fixed before painting?",
        answer: "Yes. We groove all visible cracks, treat them with heavy-duty polymer bonding agents, and fill them with non-shrink waterproof mortar before applying the coating."
      },
      {
        question: "How often should sump waterproofing be renewed?",
        answer: "With our professional application, your sump coating typically lasts 5 to 7 years with regular annual cleaning and maintenance."
      }
    ]
  },

  {
    id: "tank-cleaning-services",
    title: "Tank Cleaning Services",
    slug: "/services/tank-cleaning-services",
    shortDescription: "Complete multi-stage water tank cleaning and UV antibacterial disinfection service for sparkling clean, safe water.",
    heroDescription: "Eliminate accumulated sludge, algae, mud, and harmful bacteria from your water storage tanks with our advanced mechanized 6-stage cleaning process.",
    image: tankCleaningImg,
    badge: "Hygienic Sanitation",
    iconName: "LuDroplet",

    // SEO
    metaTitle: "Water Tank Cleaning Services Bengaluru | RK Water Proofing",
    metaDescription: "Professional overhead & underground water tank cleaning in Bengaluru. Mechanized 6-step cleaning, high-pressure jet washing, UV disinfection, and sludge removal.",

    // About Section
    about: {
      title: "About Tank Cleaning Services",
      whatIsIt: "Our Tank Cleaning Service is a comprehensive, hygienic sanitation procedure designed for both overhead plastic/concrete tanks and underground sumps. Using mechanized equipment and safe antibacterial agents, we restore water purity.",
      whyRequired: "Municipal and borewell water carries dissolved solids, silt, rust particles, and organic microbes. Over months, these settle at the tank bottom, creating a thick toxic sludge layer that breeds E. coli, cholera, skin irritants, and foul odors.",
      commonProblems: [
        "Thick mud and black silt buildup at the bottom of the storage tank",
        "Yellowish or dirty tap water causing skin rashes and health risks",
        "Algae growth inside plastic and RCC overhead tanks",
        "Bad odor and metallic taste in domestic drinking water"
      ],
      howWeHandle: "We follow a systematic 6-stage cleaning approach: Dewatering, Sludge Dewatering, High-Pressure Washing, Vacuum Cleaning, Antibacterial Spraying, and UV Radiation Disinfection to render the tank 100% hygienic."
    },

    // Process
    process: [
      { step: "01", title: "Dewatering Tank", description: "Pumping out remaining stagnant water leaving only bottom sludge sediment." },
      { step: "02", title: "Sludge Removal", description: "Extracting thick mud, silt, and heavy dirt using specialized sludge suction pumps." },
      { step: "03", title: "High-Pressure Jet Spray", description: "Scrubbing internal walls, ceilings, and corners with 150-bar pressure jet washers." },
      { step: "04", title: "Vacuum Extraction", description: "Sucking out dirty water residue and micro-particles to leave surfaces bone dry." },
      { step: "05", title: "Eco-Friendly Disinfection", description: "Spraying non-toxic, safe antibacterial solution to destroy invisible bacterial colonies." },
      { step: "06", title: "UV Radiator Sterilization", description: "Final exposure with German UV radiators to kill suspended viruses and bacteria." }
    ],

    // Benefits
    benefits: [
      { title: "100% Pure & Safe Water", desc: "Removes disease-causing bacteria, virus spores, and toxic sludge." },
      { title: "Prevents Waterborne Illness", desc: "Protects family & residents from stomach infections, skin allergies, and typhoid." },
      { title: "No Chemical Odor", desc: "Safe, food-grade cleaning agents leave no toxic chemical residue behind." },
      { title: "Extends Plumbing Life", desc: "Prevents sediment blockage in house pipes, taps, geysers, and RO purifiers." },
      { title: "Quick & Hassle-Free", desc: "Completed efficiently within 2-3 hours with minimal water wastage." },
      { title: "Certified Hygiene Standards", desc: "Performed by trained, health-inspected professional technicians." }
    ],

    // Details Grid
    details: {
      serviceType: "Mechanized Water Tank & Sump Deep Cleaning",
      suitableFor: "Independent Houses, Duplexes, Apartments, Offices, Commercial Facilities",
      commonProblems: "Mud Silt, Algae Accumulation, Foul Odor, Contaminated Tap Water",
      recommendedMaintenance: "Cleaning once every 6 months (Bi-annual service recommended)",
      serviceCoverage: "All residential & commercial areas in Bengaluru"
    },

    // FAQs
    faqs: [
      {
        question: "How often should I get my water tank cleaned?",
        answer: "Health authorities and water experts recommend professional water tank cleaning at least once every 6 months to maintain water purity."
      },
      {
        question: "Do you dump or waste all the stored water?",
        answer: "We advise customers to use up maximum stored water prior to our appointment. We only drain the minimal bottom water required for sludge extraction."
      },
      {
        question: "Is the disinfectant chemical safe for children and elderly?",
        answer: "Yes. We strictly use food-grade, eco-friendly sanitizing solutions that leave zero toxic chemical traces or pungent smells."
      },
      {
        question: "How long does a standard overhead tank cleaning take?",
        answer: "For a standard 1,000 to 5,000 liter tank, the process takes approximately 1.5 to 2.5 hours."
      },
      {
        question: "What types of tanks do you clean?",
        answer: "We clean Sintex/plastic tanks, stainless steel tanks, RCC concrete tanks, overhead storage, and underground sumps."
      }
    ]
  },

  {
    id: "terrace-waterproof-services",
    title: "Terrace Waterproof Services",
    slug: "/services/terrace-waterproof-services",
    shortDescription: "Advanced weather-resistant terrace waterproofing and thermal reflection coatings to stop roof leaks permanently.",
    heroDescription: "Shield your building ceiling from rainwater seepage, structural cracks, and intense monsoon dampness with our heavy-duty elastomeric terrace waterproofing.",
    image: terraceWaterproofImg,
    badge: "Roof Leak Protection",
    iconName: "LuHome",

    // SEO
    metaTitle: "Terrace Waterproofing Services Bengaluru | RK Water Proofing",
    metaDescription: "Top terrace waterproofing service in Bengaluru by RK Water Proofing. Liquid membrane, crack filling, tile waterproofing, heat reduction coatings & long term protection.",

    // About Section
    about: {
      title: "About Terrace Waterproof Services",
      whatIsIt: "Terrace Waterproofing involves applying specialized multi-layer liquid elastomeric membranes or polyurethane coatings directly onto roof surfaces, expansion joints, and parapet walls. It acts as an impenetrable shield against rainwater entry.",
      whyRequired: "Terraces face thermal expansion during sunny days and contraction during cold nights. This continuous stress causes hairline cracks on roof concrete and tiles. During monsoons, water collects in these cracks, causing ceiling dampness, paint peeling, and structural decay.",
      commonProblems: [
        "Water dampness and wet spots on top-floor ceiling & internal walls",
        "Peeling wall paint, plaster crumbling, and white efflorescence salt marks",
        "Water pooling in uneven terrace corners and slab joints",
        "Corrosion of ceiling RCC slab reinforcement bars causing concrete spalling"
      ],
      howWeHandle: "We inspect the roof slope, clean surface debris, seal all roof expansion joints with poly-sulfide sealant, repair cracks with polymer mortar, and apply a 3-layer UV-resistant elastomeric waterproof membrane with heat-reflective properties."
    },

    // Process
    process: [
      { step: "01", title: "Terrace Inspection & Thermal Mapping", description: "Mapping leakage origin points, roof slope angles, and structural crack lines." },
      { step: "02", title: "Surface Preparation & Scrubbing", description: "Removing old loose paint, fungus, dirt, and repairing hollow screed plaster." },
      { step: "03", title: "Expansion Joint & Parapet Sealing", description: "Sealing vulnerable wall-to-floor junctions and pipe penetrations with sealants." },
      { step: "04", title: "Polymer Crack Infiltration", description: "Injecting elastomeric crack filler into all active structural hairline cracks." },
      { step: "05", title: "Fiberglass Mesh Reinforced Coating", description: "Laying fiberglass mesh reinforcement sandwiched between primary coating coats." },
      { step: "06", title: "UV & Heat Reflective Top Coat", description: "Applying final solar-reflective coat to reduce indoor ceiling temperatures." }
    ],

    // Benefits
    benefits: [
      { title: "Stops Ceiling Dampness", desc: "Prevents rainwater from seeping into top-floor apartments and rooms." },
      { title: "Heat Insulation Effect", desc: "Reflects up to 80% solar radiation, lowering top-floor room temperature by 3-5°C." },
      { title: "High Elasticity", desc: "Elastomeric membrane expands and contracts with thermal temperature shifts." },
      { title: "Seamless Application", desc: "Creates a continuous jointless barrier across pipes, corners, and drains." },
      { title: "Weather & UV Resistant", desc: "Will not crack, peel, or degrade under harsh ultraviolet sun rays." },
      { title: "Protects Building Value", desc: "Preserves building structural integrity and interior aesthetic decor." }
    ],

    // Details Grid
    details: {
      serviceType: "Liquid Membrane & Thermal Terrace Waterproofing",
      suitableFor: "Flat RCC Roofs, Tiled Roof Terraces, Commercial Complexes, Industrial Sheds",
      commonProblems: "Ceiling Seepage, Roof Cracks, Damp Walls, Extreme Top Floor Heat",
      recommendedMaintenance: "Annual drain cleaning and inspection before monsoon season",
      serviceCoverage: "Across all Bengaluru neighborhoods and industrial areas"
    },

    // FAQs
    faqs: [
      {
        question: "Can terrace waterproofing be done without breaking existing tiles?",
        answer: "Yes! We specialize in non-destructive terrace tile waterproofing using high-grade transparent/colored elastomeric coatings directly over tiles."
      },
      {
        question: "Does terrace waterproofing help reduce top floor heat?",
        answer: "Yes. Our UV-reflective top coats reflect sun rays, reducing indoor room temperatures noticeably during hot summer months."
      },
      {
        question: "How long does a professional terrace waterproofing job last?",
        answer: "Our heavy-duty multi-layer terrace waterproofing systems come with durable performance lasting 7 to 10+ years."
      },
      {
        question: "What happens if there are heavy rains right after application?",
        answer: "We schedule projects according to weather forecasts. Our fast-curing coats dry within 4-6 hours per coat, ensuring zero rain damage."
      },
      {
        question: "How do you handle rainwater drain outlet leaks?",
        answer: "Rainwater pipe joints and drain collars are reinforced with specialized sealant collars and double-layer fiberglass membrane strips."
      }
    ]
  },

  {
    id: "underground-rain-water",
    title: "Underground Rain Water",
    slug: "/services/underground-rain-water",
    shortDescription: "Specialized maintenance, cleaning, and waterproof sealing for underground rainwater harvesting storage tanks.",
    heroDescription: "Maximize your rainwater storage efficiency and maintain crystal-clear water with our specialized underground rainwater tank maintenance and waterproofing.",
    image: undergroundRainWaterImg,
    badge: "Eco Water Management",
    iconName: "LuCloudRain",

    // SEO
    metaTitle: "Underground Rainwater Tank Waterproofing & Cleaning | RK Water Proofing",
    metaDescription: "Expert underground rainwater tank cleaning and waterproofing in Bengaluru. Ensure clean rainwater harvesting storage with crack sealing and filtration cleaning.",

    // About Section
    about: {
      title: "About Underground Rain Water Services",
      whatIsIt: "Underground Rain Water Tank Services cover the complete sanitization, structural leak repair, filter bed maintenance, and waterproof coating of rainwater harvesting sumps and storage pits.",
      whyRequired: "Rainwater harvested from rooftops brings organic leaf debris, rooftop dust, and atmospheric pollutants. Without regular tank maintenance and interior sealing, stagnant water rots, leaks out through porous concrete, or becomes contaminated by groundwater seepage.",
      commonProblems: [
        "Accumulation of decomposed organic leaf debris and foul-smelling sediment",
        "Structural cracks in rainwater sumps causing stored rainwater loss",
        "Muddy rainwater due to clogged or damaged filter bed layers",
        "Groundwater entering the rainwater tank during heavy rain spells"
      ],
      howWeHandle: "We pump out old stagnant water, clean and flush rainwater filter units, seal all tank wall joints with food-grade waterproof mortar, and apply anti-microbial waterproofing paint to ensure pure water storage."
    },

    // Process
    process: [
      { step: "01", title: "System & Tank Assessment", description: "Evaluating rainwater inlet pipes, filter beds, structural walls, and overflow outlets." },
      { step: "02", title: "Complete Sludge Dewatering", description: "Pumping out decomposed organic silt and leaf debris accumulated at the bottom." },
      { step: "03", title: "Pressure Scrubbing & Flush", description: "High-pressure jet cleaning of inner sump walls, floor, and inflow chamber." },
      { step: "04", title: "Filter Media Cleaning", description: "Washing, media flushing, and recharging sand/gravel rainwater filter cartridges." },
      { step: "05", title: "Crack Infiltration & Sealing", description: "Sealing all water entry/exit cracks with non-shrink hydraulic waterproofing cement." },
      { step: "06", title: "Sanitization & Recharge", description: "Disinfecting tank interior with non-toxic agents ready for clean monsoon harvesting." }
    ],

    // Benefits
    benefits: [
      { title: "Pure Harvested Water", desc: "Ensures stored rainwater remains odorless, clear, and safe for secondary usage." },
      { title: "Prevents Water Loss", desc: "Waterproof sealing keeps harvested rainwater safely inside without soil leakage." },
      { title: "Extends Tank Lifespan", desc: "Protects concrete structures from acid rain chemical corrosion." },
      { title: "Optimal Filter Flow", desc: "Restores fast inflow rate by clearing clogged filter media beds." },
      { title: "Reduces Borewell Reliance", desc: "Helps you store thousands of liters of clean rainwater effortlessly." },
      { title: "Eco-Friendly System", desc: "Promotes sustainable water conservation for your property." }
    ],

    // Details Grid
    details: {
      serviceType: "Rainwater Tank Cleaning, Maintenance & Waterproofing",
      suitableFor: "Residential Villas, Gated Communities, Educational Institutions, Factories",
      commonProblems: "Organic Silt, Clogged Filters, Wall Cracks, Stagnant Foul Odor",
      recommendedMaintenance: "Pre-monsoon (May) and Post-monsoon (November) inspection",
      serviceCoverage: "Bengaluru city & surrounding urban water districts"
    },

    // FAQs
    faqs: [
      {
        question: "Why does harvested rainwater turn smelly or yellow?",
        answer: "Foul odor occurs when organic leaf litter and rooftop dirt decay in stagnant water without regular tank cleaning or proper filter media flushing."
      },
      {
        question: "How often should rainwater harvesting tanks be cleaned?",
        answer: "It is ideal to clean your rainwater tank twice a year—once right before the monsoon starts and once after the main rain season ends."
      },
      {
        question: "Can an underground rainwater tank be waterproofed after construction?",
        answer: "Yes, our internal food-grade negative side waterproofing can be applied anytime to seal active leaks inside existing rainwater sumps."
      },
      {
        question: "Do you also clean the rooftop rainwater collection pipes and filters?",
        answer: "Yes, our service includes flushing rooftop collection lines and cleaning first-flush diverter filters."
      },
      {
        question: "Is harvested rainwater safe for domestic use after your service?",
        answer: "Yes, after thorough cleaning and eco-disinfection, stored rainwater is perfectly suited for washing, flushing, gardening, and RO filtration."
      }
    ]
  },

  {
    id: "apartment-tank-cleaning",
    title: "Apartment Tank Cleaning",
    slug: "/services/apartment-tank-cleaning",
    shortDescription: "High-capacity commercial tank cleaning solutions tailored for multi-story apartment complexes and residential societies.",
    heroDescription: "Keep hundreds of apartment residents safe with our certified large-scale commercial water tank and sump cleaning services with zero downtime.",
    image: apartmentTankCleaningImg,
    badge: "Commercial & Society",
    iconName: "LuBuilding",

    // SEO
    metaTitle: "Apartment Water Tank Cleaning Services Bengaluru | RK Water Proofing",
    metaDescription: "Professional apartment & gated community water tank cleaning in Bengaluru. High capacity overhead tank & underground sump cleaning with safety gear and UV disinfection.",

    // About Section
    about: {
      title: "About Apartment Tank Cleaning",
      whatIsIt: "Apartment Tank Cleaning is a specialized, high-capacity sanitation service designed specifically for multi-family residential societies, high-rise buildings, and gated communities with large-volume water storage tanks.",
      whyRequired: "Apartments store tens of thousands of liters of water daily. Due to continuous pumping from municipal supply and borewells, heavy sediment sedimentates rapidly. Contaminated water in an apartment complex can affect hundreds of families simultaneously.",
      commonProblems: [
        "Mass resident complaints regarding muddy tap water or skin irritation",
        "Heavy mud accumulation in multi-thousand-liter main underground sumps",
        "Disruption of water supply during unorganized, slow manual cleaning",
        "Lack of certified safety gear for deep confined space tank cleaning"
      ],
      howWeHandle: "We deploy heavy-duty commercial submersible pumps, high-pressure jet engines, industrial sludge extractors, and multi-technician teams to clean multi-stage apartment tanks quickly without disrupting resident daily schedules."
    },

    // Process
    process: [
      { step: "01", title: "Schedule & Water Management", description: "Coordinating with society management to minimize water downtime for residents." },
      { step: "02", title: "Rapid Submersible Dewatering", description: "Deploying high-power commercial pumps to drain minimal remaining water fast." },
      { step: "03", title: "Industrial Sludge Extraction", description: "Using heavy-duty vacuum suction to remove deep sediment layers." },
      { step: "04", title: "Multi-Jet Wall Scrubbing", description: "Simultaneous high-pressure cleaning of walls, pillars, and ceiling slabs." },
      { step: "05", title: "Certified Food-Grade Sanitization", description: "Spraying WHO-approved anti-bacterial solution across the large internal perimeter." },
      { step: "06", title: "UV Sterilization & Compliance Report", description: "Final UV irradiation treatment and issuing a formal hygiene completion certificate." }
    ],

    // Benefits
    benefits: [
      { title: "Zero Resident Hassle", desc: "Fast execution planned during low-water-usage off-peak hours." },
      { title: "High-Capacity Equipment", desc: "Industrial-grade equipment easily handles 50,000+ liter storage capacity." },
      { title: "Safety & Insurance Compliant", desc: "Trained crew equipped with safety harnesses, gas detectors, and oxygen units." },
      { title: "Formal Hygiene Certification", desc: "Official completion report provided for Apartment Owners Association (AOA) records." },
      { title: "Annual Contract Options", desc: "Discounted hassle-free Annual Maintenance Contracts (AMC) available." },
      { title: "Ensures Health Compliance", desc: "Meets municipal residential water purity standards." }
    ],

    // Details Grid
    details: {
      serviceType: "Large Scale Commercial & Society Tank Cleaning",
      suitableFor: "Apartment Buildings, High-Rise Towers, Gated Communities, Layouts",
      commonProblems: "Large Scale Sedimentation, Water Outage Delay, Algae Contamination",
      recommendedMaintenance: "Bi-annual scheduled cleaning under AMC contract",
      serviceCoverage: "All major apartment hubs across Bengaluru"
    },

    // FAQs
    faqs: [
      {
        question: "How do you ensure water supply is not cut off for long in apartments?",
        answer: "We work on one tank chamber at a time while maintaining supply from secondary tanks, or perform the job during non-peak morning hours within 3 to 4 hours."
      },
      {
        question: "Do you provide Annual Maintenance Contracts (AMC) for apartments?",
        answer: "Yes! We offer customized 1-year and 3-year AMC plans for apartment associations with scheduled periodic automated cleaning reminders."
      },
      {
        question: "Are your technicians equipped for confined space safety inside deep sumps?",
        answer: "Yes, our teams wear safety harnesses, helmets, protective suits, LED task lighting, and follow strict confined-space safety protocols."
      },
      {
        question: "Can you provide a water quality test or completion certificate?",
        answer: "Yes, we provide a formal service completion certificate suitable for society management records and resident notice boards."
      },
      {
        question: "What size apartment tanks can your team handle?",
        answer: "We handle tanks of all sizes, ranging from 10,000 liters up to multi-lakh liter capacity underground sumps."
      }
    ]
  },

  {
    id: "school-water-tank-cleaning",
    title: "School Water Tank Cleaning Service",
    slug: "/services/school-water-tank-cleaning",
    shortDescription: "Certified, ultra-safe water tank cleaning and sanitization for schools, colleges, and educational campuses.",
    heroDescription: "Protect student health and drinking water hygiene with our certified anti-bacterial water tank cleaning service for schools and colleges.",
    image: schoolWaterTankCleaningImg,
    badge: "Institutional Safety",
    iconName: "LuGraduationCap",

    // SEO
    metaTitle: "School Water Tank Cleaning Services Bengaluru | RK Water Proofing",
    metaDescription: "Certified water tank cleaning for schools, colleges & institutions in Bengaluru. 100% eco-friendly, non-toxic UV sanitization ensuring safe student drinking water.",

    // About Section
    about: {
      title: "About School Water Tank Cleaning Service",
      whatIsIt: "School Water Tank Cleaning Service is a specialized institutional sanitation program designed to deliver strict water hygiene standards for educational institutions, hostels, daycare centers, and university campuses.",
      whyRequired: "Children are especially vulnerable to waterborne illnesses like gastroenteritis, typhoid, and viral infections. School water tanks supply drinking fountains, canteen kitchens, and restrooms; dirty tanks pose a major health hazard.",
      commonProblems: [
        "Unsanitary water in school drinking fountains leading to student illness",
        "Bacterial colonies breeding in unserviced institution water tanks",
        "Rust and mud in water lines serving school canteens and kitchens",
        "Failing health inspection standards due to dirty storage units"
      ],
      howWeHandle: "We use strictly 100% non-toxic, eco-friendly food-grade sanitizers, zero harsh chemicals, and German UV radiation treatment to guarantee safe, pure drinking water for students and staff."
    },

    // Process
    process: [
      { step: "01", title: "Institutional Site Survey", description: "Inspecting drinking water tanks, kitchen supply lines, and hostel sumps." },
      { step: "02", title: "Weekend / Off-Hours Scheduling", description: "Executing the work on weekends or holidays to ensure zero student disturbance." },
      { step: "03", title: "Heavy Pressure Washing", description: "Removing all inner wall scale, sediment, and bio-film using high-pressure jets." },
      { step: "04", title: "Non-Toxic Antibacterial Wash", description: "Washing internal surfaces with safe, certified organic sanitizing agents." },
      { step: "05", title: "UV Light Disinfection", description: "Sterilizing interior surfaces with ultra-violet light to kill 99.9% of pathogens." },
      { step: "06", title: "Safety Certificate & Seal", description: "Issuing formal Hygiene Safety Certificate for school administration and board." }
    ],

    // Benefits
    benefits: [
      { title: "Protects Student Health", desc: "Eliminates risk of waterborne disease outbreaks among students and staff." },
      { title: "100% Non-Toxic & Safe", desc: "No harsh chemicals or toxic fumes—completely safe for drinking water." },
      { title: "Weekend & Holiday Service", desc: "Flexible work hours so school operations are never disrupted." },
      { title: "Health Inspector Compliant", desc: "Provides necessary documentation for school accreditation and safety audits." },
      { title: "Improves Water Clarity", desc: "Ensures clear, taste-free, odor-free water at all drinking taps." },
      { title: "Trusted Local Service", desc: "Proven track record servicing top educational institutions in Bengaluru." }
    ],

    // Details Grid
    details: {
      serviceType: "Institutional & Educational Water Sanitation",
      suitableFor: "Schools, Colleges, Universities, Daycares, Hostels, Educational Trusts",
      commonProblems: "Bacterial Contamination, Muddy Drinking Water, Unsanitary Tanks",
      recommendedMaintenance: "Quarterly or Bi-annual mandatory service schedule",
      serviceCoverage: "All institutional campuses in Bengaluru Metro region"
    },

    // FAQs
    faqs: [
      {
        question: "Can the tank cleaning be done on weekends or during school holidays?",
        answer: "Yes! We specifically offer weekend, evening, and vacation scheduling for schools so classes and student activities are never disturbed."
      },
      {
        question: "Are the cleaning chemicals safe for school children?",
        answer: "We do not use toxic chemicals. We use certified food-grade eco-disinfectants and UV light radiation that leave zero chemical residue."
      },
      {
        question: "Do you issue a water safety certificate for school compliance?",
        answer: "Yes, we issue an official Water Tank Hygiene & Safety Certificate with timestamped before/after records for school administrative audits."
      },
      {
        question: "How often should school water tanks be cleaned by law?",
        answer: "Educational guidelines recommend professional water tank cleaning every 3 to 6 months to maintain maximum water purity standards."
      },
      {
        question: "Do you clean both drinking water tanks and canteen sumps?",
        answer: "Yes, we service all overhead drinking tanks, kitchen sumps, hostel water units, and restroom supply storage tanks across the campus."
      }
    ]
  },

  {
    id: "leakage-sump-waterproof-services",
    title: "Leakage Sump Waterproof Services",
    slug: "/services/leakage-sump-waterproof-services",
    shortDescription: "Specialized emergency leak repair and polyurethane crack injection waterproofing for underground sumps.",
    heroDescription: "Stop active water leakage, wall seepage, and structural cracks in underground sumps with our specialized high-pressure injection waterproofing.",
    image: leakageSumpWaterproofImg,
    badge: "Emergency Leak Fix",
    iconName: "LuWrench",

    // SEO
    metaTitle: "Leakage Sump Waterproofing Services Bengaluru | RK Water Proofing",
    metaDescription: "Emergency underground sump leakage repair in Bengaluru by RK Water Proofing. Polyurethane injection, crack sealing, structural waterproofing & leakage stoppage.",

    // About Section
    about: {
      title: "About Leakage Sump Waterproof Services",
      whatIsIt: "Leakage Sump Waterproof Services is an advanced engineering repair solution targeted at active water leakage, structural cracks, joint failures, and high-pressure groundwater intrusion in underground concrete sumps.",
      whyRequired: "When an underground sump develops severe structural cracks, water leaks out continuously, leading to exorbitant water bills and foundation damage. Conversely, surrounding soil water can seep in, contaminating clean municipal storage water.",
      commonProblems: [
        "Uncontrollable water loss from underground sump overnight",
        "Active water spouting or weeping through concrete cold joints",
        "Groundwater entering the sump, making stored water dirty and muddy",
        "Settlement cracks on sump base slab and wall junctions"
      ],
      howWeHandle: "We utilize advanced PU (Polyurethane) high-pressure grouting injection machines to seal active leaks inside the concrete core, followed by crystalline waterproofing and food-grade elastomeric barrier coating."
    },

    // Process
    process: [
      { step: "01", title: "Active Leakage Detection", description: "Identifying precise water pressure leakage points and structural shear cracks." },
      { step: "02", title: "Drilling Injection Ports", description: "Drilling mechanical packer holes at 45-degree angles intersecting crack paths." },
      { step: "03", title: "High-Pressure PU Grouting", description: "Injecting expanding hydrophobic polyurethane resin to seal deep concrete voids." },
      { step: "04", title: "Crystalline Cementitious Seal", description: "Applying deep-penetrating crystalline waterproofing to form insoluble crystals." },
      { step: "05", title: "Fiber Mortar Patching", description: "Plastering port areas with polymer-modified non-shrink repair mortar." },
      { step: "06", title: "Hydrostatic Pressure Test", description: "Filling sump to test 100% leak stoppage under full water load." }
    ],

    // Benefits
    benefits: [
      { title: "Stops Active Gushing Leaks", desc: "PU resin expands instantly upon contact with water, sealing leaks within seconds." },
      { title: "No Wall Demolition Needed", desc: "Advanced injection technique repairs leaks internally without breaking concrete." },
      { title: "Resists High Water Pressure", desc: "Withstands intense positive and negative hydrostatic pressure." },
      { title: "Prevents Soil Contamination", desc: "Keeps dirty groundwater, sewage seepage, and insects out of drinking water." },
      { title: "Saves Massive Water Bills", desc: "Eliminates daily water losses caused by underground seepage." },
      { title: "Long-Term Structural Fix", desc: "Permanently reinforces weak concrete joints and honeycombed areas." }
    ],

    // Details Grid
    details: {
      serviceType: "High-Pressure Grouting & Emergency Sump Leak Repair",
      suitableFor: "Underground Concrete Sumps, Lift Pits, Basements, Water Retention Pits",
      commonProblems: "Active Gushing Leaks, Groundwater Intrusion, Major Wall Shear Cracks",
      recommendedMaintenance: "Immediate repair upon detecting unexplained water level drop",
      serviceCoverage: "Emergency response across all Bengaluru localities"
    },

    // FAQs
    faqs: [
      {
        question: "Can you stop an active water leak inside a full or damp sump?",
        answer: "Yes! Our hydrophobic polyurethane injection resin reacts with water immediately to expand into a dense foam seal that stops active gushing leaks."
      },
      {
        question: "How do I know if groundwater is entering my sump from outside?",
        answer: "If your sump water turns muddy after rain even without municipal filling, or if water levels rise on their own, external groundwater is seeping in."
      },
      {
        question: "Do you need to break down the sump concrete walls to fix leaks?",
        answer: "No demolition is required! We use precise micro-drilling and high-pressure injection grouting to seal cracks deep within the wall structure."
      },
      {
        question: "Is polyurethane injection safe for drinking water sumps?",
        answer: "Yes, once cured, our injection resins are inert, non-toxic, and safe for potable water containment."
      },
      {
        question: "What warranty or assurance do you offer on leakage repairs?",
        answer: "We perform full water testing after repair and provide a comprehensive warranty on our leakage stoppage service."
      }
    ]
  }
];

// Helper functions for easy lookup across components
export const getServiceBySlug = (slug) => {
  const normalizedSlug = slug.startsWith('/services/') ? slug : `/services/${slug}`;
  return servicesData.find(service => service.slug === normalizedSlug) || null;
};

export const getRelatedServices = (currentSlug, count = 4) => {
  const normalizedSlug = currentSlug.startsWith('/services/') ? currentSlug : `/services/${currentSlug}`;
  return servicesData.filter(service => service.slug !== normalizedSlug).slice(0, count);
};

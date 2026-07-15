export const COMPANY = {
  name: "Gomadhi Construction Pvt. Ltd.",
  shortName: "Gomadhi Construction",
  tagline: "Foundation to finishing.",
  address: {
    line1: "4th Floor, Flat No.402, Jagannath Enclave",
    line2: "Manish Nagar Beltarodi Road, Pantheon Society",
    city: "Nagpur, Maharashtra",
  },
  phones: ["9405220588", "9960948162", "9307574250"],
  gstn: "27AAHCG0325J2ZP",
  whatsappNumber: "919405220588",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "residential",
    title: "Residential buildings",
    description:
      "Bungalows, duplex houses and apartment complexes built to last.",
  },
  {
    id: "commercial",
    title: "Commercial buildings",
    description: "Offices, retail shops and mixed-use complexes.",
  },
  {
    id: "industrial",
    title: "Industrial sheds & warehouses",
    description: "Structural spans built for load, access and long-term use.",
  },
  {
    id: "renovation",
    title: "Renovation & repair",
    description: "Remodeling, structural repair and finishing upgrades.",
  },
  {
    id: "civil-works",
    title: "Compound wall, drainage & RCC road",
    description: "Site-wide civil work that ties a property together.",
  },
  {
    id: "turnkey",
    title: "Turnkey projects with material supply",
    description: "One contract, one team, material sourcing included.",
  },
] as const;

export const MATERIAL_BRANDS = [
  { category: "Cement", brands: "UltraTech / ACC / Ambuja" },
  { category: "Steel", brands: "TATA / Jindal / SAIL" },
  { category: "Bricks / blocks", brands: "Red bricks / Fly ash blocks" },
  { category: "Tiles", brands: "Kajaria / Somany / Nitco" },
  { category: "Plumbing fittings", brands: "Jaguar / Hindware" },
  { category: "Electrical", brands: "Havells / Polycab / Anchor" },
  { category: "Paint & finishing", brands: "Asian Paints / Nerolac" },
] as const;

export const WHY_CHOOSE_US = [
  "Quality construction with premium material",
  "Experienced and professional supervision",
  "Timely project completion",
  "Transparent costing",
  "100% customer satisfaction",
] as const;

export const DIRECTORS = [
  {
    name: "Harsh Bhuva",
    title: "Director Business Development",
    description:
      "Leads business development, builds client relationships, and identifies new project opportunities to drive the company's growth.",
    phone: "9307574250",
    photo: "/team/harsh-bhuva.jpeg",
  },
  {
    name: "Ajay Sojitara",
    title: "Director Project Execution",
    description:
      "Heads on-site project execution, supervises construction activities, and ensures timely delivery while maintaining quality standards.",
    phone: "9960948162",
    photo: "/team/ajay-sojitara.jpg",
  },
  {
    name: "Aditya Rai",
    title: "Director Projects & Procurement",
    description:
      "Oversees project planning, procurement of construction materials, and ensures smooth execution of ongoing projects.",
    phone: "9405220588",
    photo: "/team/aditya-rai.jpeg",
  },
] as const;

export const MISSION =
  "To deliver durable, innovative, and high-quality construction projects using the best materials and technology, ensuring trust and satisfaction for every client.";

export const VISION =
  "To become one of the most reliable and respected names in the civil construction industry through quality work and long-term relationships.";

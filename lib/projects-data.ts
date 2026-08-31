import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "sr-lake-view",
    name: "SR Lake View",
    location: "Sonegaon, Nagpur",
    type: "Residential",
    status: "ongoing",
    description:
      "RCC framed premium residential apartment building located in Sonegaon, Nagpur featuring multi-story contemporary residential units, spacious floor layouts, and engineered structural finishes.",
    photos: [
      { url: "/projects/sr-lake-view/sr-lake.jpeg", caption: "Floor Plan Diagram" },
      { url: "/projects/sr-lake-view/lake1.jpeg", caption: "Elevation Render" },
      { url: "/projects/sr-lake-view/lake2.jpeg", caption: "Floor Plan & Unit Layout" },
      { url: "/projects/sr-lake-view/lake3.jpeg", caption: "Architectural Exterior View" },
    ],
    videos: [
      { url: "/projects/sr-lake-view/sr-view.mp4", caption: "Project Overview Video" },
      { url: "/projects/sr-lake-view/sr-view2.mp4", caption: "Construction & Site Walkthrough" },
    ],
    floors: 7,
  },
  {
    slug: "raghav-keystone",
    name: "Raghav Keystone",
    location: "Raj Nagar, Nagpur",
    type: "Commercial",
    status: "ongoing",
    description:
      "RCC framed commercial building at Raj Nagar, Nagpur commercial spaces project by Synergic Landcraft.",
    photos: [
      { url: "/projects/raghav-keystone/primary.jpeg" },
      { url: "/projects/raghav-keystone/site-01.jpg" },
    ],
    brochureUrl: "/brochures/raghav-keystone.pdf",
  },
  {
    slug: "nirman-central-heights",
    name: "Nirman Central Heights",
    location: "Besa-Pipla Road, near K. John School",
    type: "Residential scheme",
    status: "ongoing",
    description:
      "A 5-tower residential scheme ongoing on Besa-Pipla road, near K. John School.",
    photos: [{ url: "/projects/nirman-central-heights/site-01.jpg" }],
    towers: 5,
  },
  {
    slug: "gokuldham",
    name: "Gokuldham",
    location: "Bes-Pipla, Nagpur",
    type: "Residential",
    status: "ongoing",
    description: "RCC framed residential building in Bes-Pipla, Nagpur.",
    photos: [{ url: "/projects/gokuldham/site-01.jpg" }],
  },
  {
    slug: "gmc-trauma-care-extension",
    name: "GMC Trauma Care Extension",
    location: "Nagpur",
    type: "Institutional Healthcare",
    status: "ongoing",
    description:
      "Extension of the Government Medical College trauma care facility RCC framed structure currently at slab and shuttering stage.",
    photos: [
      { url: "/projects/gmc-trauma-care-extension/site-01.jpg" },
      { url: "/projects/gmc-trauma-care-extension/site-02.jpg" },
      { url: "/projects/gmc-trauma-care-extension/site-03.jpg" },
      { url: "/projects/gmc-trauma-care-extension/site-04.jpg" },
    ],
  },
  {
    slug: "ycce-campus-multi-sports-complex",
    name: "YCCE Campus Multi Sports Complex",
    location: "Nagpur",
    type: "Institutional Sports facility",
    status: "ongoing",
    description:
      "Multi sports complex and campus development under construction on the YCCE campus, Nagpur.",
    photos: [
      { url: "/projects/ycce-sports/ycce-multisport.jpeg" },
      { url: "/projects/ycce-sports/ycce-landscape.jpeg" },
    ],
  },
  {
    slug: "ayurvedic-college-extension",
    name: "Ayurvedic College Extension",
    location: "Nagpur",
    type: "Institutional Educational",
    status: "ongoing",
    description:
      "Extension block under construction for an ayurvedic college in Nagpur.",
    photos: [],
  },
  {
    slug: "wani-hotel",
    name: "Wani Hotel",
    location: "Nagpur",
    type: "Hospitality",
    status: "ongoing",
    description:
      "Hotel construction project ivory textured exterior with grey granite cladding at plinth level, maroon fascia band, and blue-tinted glazing throughout.",
    photos: [
      { url: "/projects/wani-hotel/front.png" },
      { url: "/projects/wani-hotel/side.png" },
    ],
  },
];

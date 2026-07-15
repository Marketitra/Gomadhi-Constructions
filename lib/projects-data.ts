import type { Project } from "@/types";

// Photo paths point to /public/projects/<slug>/. Drop your own photos into
// these folders using these exact filenames, or update the paths below.
export const PROJECTS: Project[] = [
  {
    slug: "sr-lake-view",
    name: "SR Lake View",
    location: "Sonegaon, Nagpur",
    type: "Residential",
    status: "ongoing",
    description:
      "RCC framed residential building at Sonegaon, Nagpur — apartment-style residential tower under construction.",
    photos: [
      { url: "/projects/sr-lake-view/site-01.jpg" },
      { url: "/projects/sr-lake-view/site-02.jpg" },
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
      { url: "/projects/raghav-keystone/site-01.jpg" },
      { url: "/projects/raghav-keystone/site-02.jpg" },
      { url: "/projects/raghav-keystone/site-03.jpeg" },
      { url: "/projects/raghav-keystone/site-04.jpg" },
      { url: "/projects/raghav-keystone/site-05.jpg" },
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
      "Multi sports complex under construction on the YCCE campus, Nagpur.",
    photos: [],
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
];

import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "sr-lake-view",
    name: "SR Lake View",
    location: "Sonegaon, Nagpur",
    type: "Residential",
    status: "ongoing",
    description:
      "RCC framed residential building at Sonegaon, Nagpur apartment-style residential tower under construction.",
    photos: [{ url: "/projects/sr-lake-view/site-01.jpg" }],
    floors: 9,
  },
  {
    slug: "raghav-keystone",
    name: "Raghav Keystone",
    location: "Raj Nagar, Nagpur",
    type: "Commercial",
    status: "ongoing",
    description:
      "RCC framed commercial building at Raj Nagar, Nagpur commercial spaces project by Synergic Landcraft.",
    photos: [{ url: "/projects/raghav-keystone/site-01.jpg" }],
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
];

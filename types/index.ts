export type ProjectStatus = "ongoing" | "completed";

export interface ProjectPhoto {
  url: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  type: string;
  status: ProjectStatus;
  description: string;
  photos: ProjectPhoto[];
  floors?: number;
  towers?: number;
  brochureUrl?: string;
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  projectInterest?: string;
}

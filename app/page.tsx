import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import MaterialBrands from "@/components/home/MaterialBrands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <MaterialBrands />
      <WhyChooseUs />
      <ProjectsPreview />
      <CTASection />
    </>
  );
}

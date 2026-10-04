import { Container } from "@/components/layout/container";
import { ComponentShowcase } from "@/components/sections/component-showcase";
import { ContactForm } from "@/components/sections/contact-form";
import { FeatureCards } from "@/components/sections/feature-cards";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";

export default async function Home() {
  return (
    <Container>
      <Hero />
      <TechStack />
      <FeatureCards />
      <ComponentShowcase />
      <ContactForm />
    </Container>
  );
}

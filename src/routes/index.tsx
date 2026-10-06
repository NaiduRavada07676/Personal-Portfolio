import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Certifications, Contact, Footer, Portfolio, Profiles, Resume } from "@/components/portfolio/Sections";

const title = "Ravada Sanyasi Naidu | Java Backend Developer | AI/ML";
const description =
  "Portfolio of Ravada Sanyasi Naidu — Java Backend & Spring Boot Developer and AI/ML & Generative AI enthusiast. Projects, experience, skills and resume.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <div aria-hidden className="tech-grid pointer-events-none absolute inset-x-0 top-0 h-[900px]" />
      <div aria-hidden className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] max-w-full -translate-x-1/2" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Certifications />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

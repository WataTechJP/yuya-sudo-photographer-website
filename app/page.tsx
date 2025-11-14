import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PortfolioGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

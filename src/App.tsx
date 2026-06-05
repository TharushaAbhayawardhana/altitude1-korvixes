import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ProductOverview } from "@/components/sections/ProductOverview"
import { Features } from "@/components/sections/Features"
import { SimulationPreview } from "@/components/sections/SimulationPreview"
import { UseCases } from "@/components/sections/UseCases"
import { TechStack } from "@/components/sections/TechStack"
import { CTASection } from "@/components/sections/CTASection"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductOverview />
        <Features />
        <SimulationPreview />
        <UseCases />
        <TechStack />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App

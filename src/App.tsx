import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ChatwootWidget } from "@/components/layout/ChatwootWidget"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ProductOverview } from "@/components/sections/ProductOverview"
import { Features } from "@/components/sections/Features"
import { SimulationPreview } from "@/components/sections/SimulationPreview"
import { UseCases } from "@/components/sections/UseCases"
import { Testimonials } from "@/components/sections/Testimonials"
import { TechStack } from "@/components/sections/TechStack"
import { FAQSection } from "@/components/sections/FAQSection"
import { Pricing } from "@/components/sections/Pricing"
import { CTASection } from "@/components/sections/CTASection"

// Legal Pages
import { PrivacyPolicyPage } from "@/pages/legal/PrivacyPolicyPage"
import { TermsOfServicePage } from "@/pages/legal/TermsOfServicePage"
import { SecurityPage } from "@/pages/legal/SecurityPage"
import { CompliancePage } from "@/pages/legal/CompliancePage"

// Company Pages
import { AboutUsPage } from "@/pages/company/AboutUsPage"
import { CareersPage } from "@/pages/company/CareersPage"
import { PartnersPage } from "@/pages/company/PartnersPage"
import { PressKitPage } from "@/pages/company/PressKitPage"

// Content Pages
import { BlogPage } from "@/pages/content/BlogPage"
import { ManufacturingPage } from "@/pages/content/ManufacturingPage"

// Contact Page
import { ContactPage } from "@/pages/contact/ContactPage"

// Product Pages
import { ProductPage } from "@/pages/product/ProductPage"
import { PaymentSuccessPage } from "@/pages/product/PaymentSuccessPage"


function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductOverview />
        <Features />
        <SimulationPreview />
        <UseCases />
        <Testimonials />
        <TechStack />
        <FAQSection />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatwootWidget />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
            background: "#0B0E16",
            border: "1px solid #1a2235",
            color: "#dce8f5",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<HomePage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        {/* Legal */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        {/* Company */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/press" element={<PressKitPage />} />
        {/* Content */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        {/* Product */}
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

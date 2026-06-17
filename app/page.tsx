import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { Story } from "@/components/story"
import { Problem } from "@/components/problem"
import { WhatIs } from "@/components/what-is"
import { Inside } from "@/components/inside"
import { Networking } from "@/components/networking"
import { Portfolio } from "@/components/portfolio"
import { FinalCta, Footer } from "@/components/final-cta"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <LogoMarquee />
      <Story />
      <Problem />
      <WhatIs />
      <Inside />
      <Networking />
      <Portfolio />
      <FinalCta />
      <Footer />
    </main>
  )
}

"use client"
import HeroSection from "./Components/herosection"
import Features from "./Components/features"
import Testimonials from "./Components/testimonial"
import NewsLetter from "./Components/newsletter"
import Statistics from "./Components/statistics"
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Features></Features>
      <Testimonials></Testimonials>
      <Statistics></Statistics>
      <NewsLetter></NewsLetter>
    </div>
  
  
  )
}

import HeroSection from '../components/home/HeroSection'
import FeaturedProjects from '../components/home/FeaturedProjects'
import ServicesSection from '../components/home/ServicesSection'
import AboutSection from '../components/home/AboutSection'
import ProcessSection from '../components/home/ProcessSection'
import SectorsSection from '../components/home/SectorsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'

const Home = () => {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturedProjects />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <SectorsSection />
        <TestimonialsSection />
      </main>
      <CTASection />
    </>
  )
}

export default Home

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../layout/Container'

const heroHighlights = [
  { title: 'Architecture', label: 'People-Centric Design' },
  { title: 'Engineering', label: 'Technical Excellence' },
  { title: 'Planning', label: 'Sustainable Growth' },
  { title: 'Infrastructure', label: 'Stronger Communities' },
]

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] pt-4 pb-20 md:pb-24 lg:pb-28">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_top_left,_rgba(168,214,232,0.35),_transparent_35%)]" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-6 md:pt-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0B78B8]">
              Architecture | Engineering | Planning | Infrastructure
            </p>

            <h1 className="mt-7 max-w-[600px] text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.94] tracking-[-0.08em] text-[#20272D]">
              Designing Spaces.
              <span className="block text-[#0B78B8]">Engineering Possibilities.</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-lg leading-8 text-[#58656f]">
              Integrated architecture, engineering, planning and infrastructure solutions for a better,
              more sustainable tomorrow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#0B78B8] px-5 py-3.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(11,120,184,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Our Projects
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-[8px] border border-[#dfeaf0] bg-white px-5 py-3.5 text-sm font-medium text-[#20272D] transition-colors duration-300 hover:border-[#0B78B8] hover:text-[#0B78B8]"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-12 top-10 hidden h-[380px] w-[380px] rounded-full border border-[#9ccce5] lg:block" />
            <div className="pointer-events-none absolute -right-8 top-16 hidden h-[260px] w-[260px] rounded-full border border-[#9ccce5] lg:block" />
            <svg
              viewBox="0 0 700 420"
              className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[92%] -translate-x-1/2 -translate-y-1/2 lg:block"
              aria-hidden="true"
            >
              <path
                d="M40 270C120 200,180 190,260 210C340 230,430 350,530 330C590 320,630 290,670 240"
                stroke="#0B78B8"
                strokeWidth="2.5"
                fill="none"
                opacity="0.9"
              />
              <path
                d="M80 310C120 250,170 210,245 215C310 220,360 270,430 290C480 305,545 300,615 250"
                stroke="#A8D6E8"
                strokeWidth="1.5"
                fill="none"
                opacity="0.8"
              />
            </svg>

            <div className="relative overflow-hidden rounded-[18px] border border-[#dfeaf0] bg-white p-2 shadow-[0_25px_50px_rgba(8,28,44,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
                alt="Modern architectural building"
                className="h-[420px] w-full rounded-[14px] object-cover md:h-[540px] lg:h-[580px]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="mt-10 border-t border-[#dfeaf0] bg-white/75 backdrop-blur-sm">
        <Container>
          <div className="grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-4">
            {heroHighlights.map(({ title, label }) => (
              <div key={title} className="flex items-center gap-3 border-[#e6edf2] py-2 md:border-r md:pr-4 xl:last:border-r-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfeaf0] bg-[#eef5fa] text-[#0B78B8]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#0B78B8]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#20272D]">{title}</div>
                  <div className="text-xs text-[#8B949C]">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}

export default HeroSection

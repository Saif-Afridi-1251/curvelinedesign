import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import StatCard from '../common/StatCard'
import Container from '../layout/Container'

const stats = [
  { amount: '10+', label: 'Years of Experience' },
  { amount: '150+', label: 'Projects Delivered' },
  { amount: '50+', label: 'Expert Professionals' },
  { amount: '100%', label: 'Commitment to Quality' },
]

const AboutSection = () => {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[16px] border border-[#dfeaf0] p-3 shadow-[0_20px_40px_rgba(13,31,44,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
                alt="Modern architecture project"
                className="h-[500px] w-full rounded-[12px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -left-4 top-10 h-32 w-24 rounded-r-[18px] bg-[#0B78B8]/25 blur-sm" />
            <div className="absolute left-6 top-8 bg-[#0B78B8]/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#0B78B8] backdrop-blur-sm">
              People
            </div>
            <div className="absolute bottom-8 left-8 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#0B78B8]">
              Places
            </div>
            <div className="absolute bottom-4 right-5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#0B78B8]">
              Progress
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B78B8]">About Curveline</p>
            <h2 className="mt-5 max-w-[500px] text-[clamp(2.2rem,3vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.06em] text-[#20272D]">
              One multidisciplinary team.
              <span className="block text-[#0B78B8]">One coordinated vision.</span>
            </h2>

            <p className="mt-6 max-w-[560px] text-base leading-8 text-[#58656f]">
              CURVELINE DESIGN CONSULTANTS (PVT) LTD is a multidisciplinary consultancy delivering
              architecture, engineering, planning and infrastructure solutions that create lasting value
              for people, businesses and communities.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-[8px] border border-[#dfeaf0] bg-white px-5 py-3 text-sm font-medium text-[#20272D] transition-colors duration-300 hover:border-[#0B78B8] hover:text-[#0B78B8]"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection

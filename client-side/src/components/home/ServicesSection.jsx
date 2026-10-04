import { motion } from 'framer-motion'
import services from '../../data/services'
import ServiceCard from '../common/ServiceCard'
import Container from '../layout/Container'

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(168,214,232,0.08),_transparent_45%)]" />
      <Container className="relative">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B78B8]">
              Integrated Design Expertise
            </p>
            <h2 className="mt-5 max-w-[500px] text-[clamp(2.2rem,3vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.06em] text-[#20272D]">
              From concept to communities.
            </h2>
          </div>

          <p className="max-w-[390px] text-base leading-7 text-[#58656f]">
            We bring together architecture, engineering, planning and infrastructure expertise to deliver
            resilient, functional and future-ready solutions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection

import { motion } from 'framer-motion'
import processSteps from '../../data/process'
import Container from '../layout/Container'

const ProcessSection = () => {
  return (
    <section className="bg-[#f7fafc] py-20 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B78B8]">Our Process</p>
            <h2 className="mt-5 max-w-[540px] text-[clamp(2.2rem,3vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.06em] text-[#20272D]">
              A clear path from idea to impact.
            </h2>
          </div>

          <p className="max-w-[420px] text-base leading-7 text-[#58656f]">
            A collaborative and transparent process designed to turn ideas into real, measurable outcomes.
          </p>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 1200 150"
            className="pointer-events-none absolute left-0 right-0 top-[58px] hidden w-full lg:block"
            aria-hidden="true"
          >
            <path
              d="M80 100C180 40, 300 40, 380 98C460 155, 520 150, 610 78C700 15, 780 16, 890 80C960 115, 1045 120, 1135 98"
              stroke="#0B78B8"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#0B78B8] bg-white text-[#0B78B8] shadow-[0_10px_25px_rgba(11,120,184,0.08)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B78B8]">
                    {step.id}
                  </div>
                  <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-medium tracking-[-0.05em] text-[#20272D]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[240px] text-base leading-7 text-[#58656f]">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection

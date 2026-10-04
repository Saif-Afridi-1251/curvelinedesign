import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const TestimonialCard = ({ quote, name, role, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.01 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative overflow-hidden rounded-[18px] border border-[#dfeaf0] bg-white p-6 shadow-[0_10px_30px_rgba(13,31,44,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_42px_rgba(13,31,44,0.12)]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#0B78B8]">
          <Quote className="h-6 w-6" />
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0B78B8]">
            Client Success
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfeaf0] bg-white text-[#20272D] transition-colors hover:border-[#0B78B8] hover:text-[#0B78B8]"
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B78B8] text-white transition-opacity hover:opacity-95"
            type="button"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="text-[clamp(1.1rem,1.8vw,1.7rem)] leading-[1.5] tracking-[-0.04em] text-[#20272D]">
        “{quote}”
      </p>

      <div className="mt-6 flex items-center gap-4 border-t border-[#e6edf2] pt-5">
        <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
        <div>
          <div className="font-medium text-[#20272D]">{name}</div>
          <div className="text-sm text-[#58656f]">{role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="group rounded-[12px] border border-[#dfeaf0] bg-white p-6 shadow-[0_10px_25px_rgba(15,34,56,0.02)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#dfeaf0] bg-[#eef5fa] text-[#0B78B8]">
          <Icon className="h-5 w-5" />
        </div>
        <Link
          to="/services"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#dfeaf0] bg-white text-[#0B78B8] transition-colors duration-300 group-hover:border-[#0B78B8]"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-6 border-t border-[#e6edf2] pt-5">
        <h3 className="text-[clamp(1.3rem,1.6vw,1.7rem)] font-medium tracking-[-0.05em] text-[#20272D]">
          {title}
        </h3>
        <p className="mt-3 max-w-[30ch] text-base leading-7 text-[#58656f]">{description}</p>
      </div>
    </motion.div>
  )
}

export default ServiceCard

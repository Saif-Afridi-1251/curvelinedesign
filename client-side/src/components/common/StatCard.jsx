import { motion } from 'framer-motion'

const StatCard = ({ amount, label }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="rounded-[10px] border border-[#dfeaf0] bg-white p-4 shadow-[0_10px_25px_rgba(15,34,56,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(13,31,44,0.11)]"
    >
      <div className="text-[clamp(1.7rem,2vw,2.5rem)] font-medium tracking-[-0.06em] text-[#0B78B8]">
        {amount}
      </div>
      <div className="mt-2 text-sm leading-5 text-[#58656f]">{label}</div>
    </motion.div>
  )
}

export default StatCard

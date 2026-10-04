import { motion } from 'framer-motion'

const StatCard = ({ amount, label }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className="rounded-[10px] border border-[#dfeaf0] bg-white p-4 shadow-[0_10px_25px_rgba(15,34,56,0.04)]"
    >
      <div className="text-[clamp(1.7rem,2vw,2.5rem)] font-medium tracking-[-0.06em] text-[#0B78B8]">
        {amount}
      </div>
      <div className="mt-2 text-sm leading-5 text-[#58656f]">{label}</div>
    </motion.div>
  )
}

export default StatCard

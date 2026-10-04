import { motion } from 'framer-motion'

const SectorCard = ({ title, image, icon: Icon }) => {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group relative overflow-hidden rounded-[10px] border border-[#dfeaf0] bg-white shadow-[0_8px_22px_rgba(13,31,44,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(13,31,44,0.13)]"
    >
      <div className="relative h-[180px] overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2c]/55 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-2.5 py-1.5 backdrop-blur-sm">
          <Icon className="h-4 w-4 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium tracking-[-0.04em] text-[#20272D]">{title}</h3>
      </div>
    </motion.article>
  )
}

export default SectorCard

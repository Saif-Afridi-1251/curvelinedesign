import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project, featured = false }) => {
  const isLarge = featured

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className={`group relative overflow-hidden rounded-[12px] border border-[#dfeaf0] bg-white ${isLarge ? 'min-h-[420px]' : 'min-h-[260px]'}`}
    >
      <Link to={`/projects/${project.slug}`} className="block h-full w-full">
        <div className="relative h-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091922]/85 via-[#091922]/18 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
                  <span>0{project.number}</span>
                </div>
                <h3 className="max-w-[240px] text-2xl font-medium tracking-[-0.05em] text-white">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                  {project.categories.join(' | ')}
                </p>
              </div>

              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#0B78B8] group-hover:border-[#0B78B8]">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default ProjectCard

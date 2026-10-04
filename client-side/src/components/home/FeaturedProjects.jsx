import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import ProjectCard from '../common/ProjectCard'
import Container from '../layout/Container'

const FeaturedProjects = () => {
  const [feature, secondaryA, secondaryB] = projects

  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B78B8]">
              Featured Projects
            </p>
            <h2 className="mt-5 max-w-[500px] text-[clamp(2.3rem,3vw,3.3rem)] font-medium leading-[1.05] tracking-[-0.06em] text-[#20272D]">
              Spaces that shape stronger communities.
            </h2>
          </div>

          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-[#20272D] transition-colors hover:text-[#0B78B8]">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.9fr]">
          <ProjectCard project={feature} featured />

          <div className="grid gap-5">
            <ProjectCard project={secondaryA} />
            <ProjectCard project={secondaryB} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProjects

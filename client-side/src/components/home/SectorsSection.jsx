import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import sectors from '../../data/sectors'
import SectorCard from '../common/SectorCard'
import Container from '../layout/Container'

const SectorsSection = () => {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B78B8]">Sectors We Serve</p>
            <h2 className="mt-5 max-w-[500px] text-[clamp(2.3rem,3vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.06em] text-[#20272D]">
              Expertise across diverse sectors.
            </h2>
          </div>

          <Link to="/expertise" className="inline-flex items-center gap-2 text-sm font-medium text-[#20272D] transition-colors hover:text-[#0B78B8]">
            Our Expertise
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
          {sectors.map((sector) => (
            <SectorCard key={sector.id} {...sector} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SectorsSection

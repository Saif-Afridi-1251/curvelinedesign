import { ArrowRight, Building2, Compass, Landmark, Route } from 'lucide-react'
import { Link } from 'react-router-dom'

const expertise = [
  { title: 'Architecture', label: 'People-Centric Design', icon: Building2 },
  { title: 'Engineering', label: 'Technical Excellence', icon: Compass },
  { title: 'Planning', label: 'Sustainable Growth', icon: Landmark },
  { title: 'Infrastructure', label: 'Stronger Communities', icon: Route },
]

const ExpertiseStrip = () => {
  return (
    <section className="border-y border-[#e6edf2] bg-white">
      <div className="mx-auto grid max-w-[1360px] gap-0 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {expertise.map(({ title, label, icon: Icon }) => (
          <div
            key={title}
            className="flex items-center gap-3 border-b border-[#e6edf2] px-4 py-5 md:border-b-0 md:border-r md:px-6 lg:last:border-r-0"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfeaf0] bg-[#eef5fa] text-[#0B78B8]">
              <Icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-[#20272D]">{title}</div>
              <div className="text-xs text-[#8B949C]">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExpertiseStrip

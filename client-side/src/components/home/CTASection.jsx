import { Link } from 'react-router-dom'
import Container from '../layout/Container'

const CTASection = () => {
  return (
    <section className="bg-[#0B78B8] py-14 text-white">
      <Container>
        <div className="flex flex-col gap-6 rounded-[18px] border border-white/15 bg-[linear-gradient(90deg,rgba(11,120,184,0.9),rgba(11,120,184,0.88)),url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center px-5 py-8 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d6ebf9]">Let&apos;s build together</p>
            <h2 className="mt-4 max-w-[700px] text-[clamp(2rem,3vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.06em] text-white">
              Have a site, concept or project in mind?
              <span className="block text-[#d6ebf9]">Let&apos;s shape what comes next.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2 lg:items-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-[8px] bg-white px-5 py-3 text-sm font-medium text-[#0B78B8] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
            <p className="text-sm text-[#d6ebf9]">Get in touch with our team today.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CTASection

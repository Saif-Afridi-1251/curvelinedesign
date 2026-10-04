import { ArrowLeft, ArrowRight } from 'lucide-react'
import testimonials from '../../data/testimonials'
import TestimonialCard from '../common/TestimonialCard'
import Container from '../layout/Container'

const TestimonialsSection = () => {
  const testimonial = testimonials[0]

  return (
    <section className="bg-[#eef5fa] py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B78B8]">Client Success</p>
            <h2 className="mt-5 text-[clamp(2.3rem,3vw,3.3rem)] font-medium leading-[1.05] tracking-[-0.06em] text-[#20272D]">
              Trusted by forward-thinking clients.
            </h2>
            <p className="mt-5 max-w-[340px] text-base leading-7 text-[#58656f]">
              Our clients trust us to deliver thoughtful, technically strong and commercially practical solutions.
            </p>
          </div>

          <div className="relative">
            <div className="hidden h-full w-full lg:block">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"
                alt="Modern architectural building"
                className="h-[430px] w-full rounded-[18px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:absolute lg:inset-y-8 lg:right-10 lg:w-[54%]">
              <TestimonialCard {...testimonial} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection

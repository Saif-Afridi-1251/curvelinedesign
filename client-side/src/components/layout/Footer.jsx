import { Camera, Globe, Mail, MapPin, MessageCircle, Phone, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import LogoMark from '../common/LogoMark'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Expertise', to: '/expertise' },
  ]

  const companyLinks = [
    { label: 'Our Process', to: '/process' },
    { label: 'Team', to: '/team' },
    { label: 'Insights', to: '/insights' },
    { label: 'Contact', to: '/contact' },
  ]

  const serviceLinks = [
    { label: 'Architecture', to: '/services' },
    { label: 'Engineering', to: '/services' },
    { label: 'Planning', to: '/services' },
    { label: 'Infrastructure', to: '/services' },
  ]

  const socialLinks = [
    { label: 'LinkedIn', icon: Globe, href: '#' },
    { label: 'Facebook', icon: MessageCircle, href: '#' },
    { label: 'Instagram', icon: Camera, href: '#' },
    { label: 'YouTube', icon: Play, href: '#' },
  ]

  return (
    <footer className="bg-[#20272D] text-white">
      <Container className="pt-16 pb-8">
        <div className="rounded-[20px] bg-[#0d1e2a] px-5 py-8 md:px-8 lg:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9bc9e6]">
                Let&apos;s build together
              </div>
              <h3 className="max-w-[620px] text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.06em] text-white">
                Have a site, concept or project in mind?
                <span className="block text-[#bfe1f4]">Let&apos;s shape what comes next.</span>
              </h3>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-white px-5 py-3 text-sm font-medium text-[#0B78B8] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_1.2fr]">
          <div>
            <LogoMark white />
            <p className="mt-6 max-w-[260px] text-sm leading-6 text-[#b4bec8]">
              Shaping purposeful spaces through architecture, engineering, planning and infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8eb9d8]">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-[#dfe5ea]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8eb9d8]">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-[#dfe5ea]">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8eb9d8]">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-[#dfe5ea]">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8eb9d8]">Contact Us</h4>
            <ul className="mt-5 space-y-4 text-sm text-[#dfe5ea]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#9bc9e6]" />
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#9bc9e6]" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#9bc9e6]" />
                <span>info@curveline.com</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3d5364] bg-[#273742] text-[#dfe5ea] transition-colors hover:border-[#0B78B8] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#384a58] pt-6 text-sm text-[#aeb9c3]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Curveline Design Consultants (PVT) LTD. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/sitemap" className="hover:text-white">Site Map</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

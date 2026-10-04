import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container'
import LogoMark from '../common/LogoMark'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Expertise', to: '/expertise' },
  { label: 'Our Process', to: '/process' },
  { label: 'Team', to: '/team' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-[#f7fafc]/95 backdrop-blur-sm">
      <div className={`border-b border-[#e6edf2] transition-shadow duration-300 ${scrolled ? 'shadow-[0_8px_25px_rgba(8,29,45,0.04)]' : ''}`}>
        <Container>
          <nav className="flex items-center justify-between gap-6 py-3" aria-label="Main navigation">
            <div className="flex min-w-0 flex-1 items-center justify-start">
              <NavLink to="/" className="flex items-center" aria-label="Curveline home">
              
                <LogoMark />
              </NavLink>
            </div>

            <div className="hidden items-center gap-7 xl:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative text-xl font-lg transition-colors duration-200 ${
                      isActive ? 'text-[#0B78B8]' : 'text-[#20272D] hover:text-[#0B78B8]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative pb-2">
                      {item.label}
                      {isActive && <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#0B78B8]" />}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden xl:block">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 ml-10 rounded-[8px] bg-[#0B78B8] px-4 py-2.5 text-md font-medium text-white transition-colors duration-300 hover:bg-[#07558E]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dfeaf0] bg-white text-[#20272D] xl:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-[#e6edf2] bg-white xl:hidden"
            >
              <Container>
                <div className="flex flex-col gap-3 py-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-base font-medium ${
                          isActive ? 'bg-[#eaf5fd] text-[#0B78B8]' : 'text-[#20272D] hover:bg-[#f3f7fa]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}

                  <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#0B78B8] px-4 py-3 text-sm font-medium text-white"
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </NavLink>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar

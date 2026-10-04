import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrimaryButton = ({ children, to = '/projects', className = '', icon: Icon = ArrowRight }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#0B78B8] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(11,120,184,0.22)] transition-all duration-300 hover:bg-[#07558E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B78B8] focus-visible:ring-offset-2 ${className}`}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}

export default PrimaryButton

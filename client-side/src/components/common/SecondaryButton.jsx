import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const SecondaryButton = ({ children, to = '/contact', className = '', icon: Icon = ArrowRight }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#d6e3ec] bg-white px-5 py-3 text-sm font-medium text-[#20272D] transition-all duration-300 hover:border-[#0B78B8] hover:text-[#0B78B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B78B8] focus-visible:ring-offset-2 ${className}`}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4" />
    </Link>
  )
}

export default SecondaryButton

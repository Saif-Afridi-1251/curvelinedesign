import logoImage from '../../assets/logo.jpeg'

const LogoMark = ({ white = false }) => {
  return (
    <img
      src={logoImage}
      alt="Curveline Design Consultants (Pvt) Ltd."
      className={`h-[78px] w-[88px] shrink-0 object-contain sm:h-[88px] sm:w-[100px] lg:h-[104px] lg:w-[118px] ${white ? 'lg:h-[112px] lg:w-[128px]' : ''}`}
    />
  )
}

export default LogoMark


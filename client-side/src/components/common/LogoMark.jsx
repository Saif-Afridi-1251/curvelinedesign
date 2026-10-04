const LogoMark = ({ white = false }) => {
  return (
    <svg
      viewBox="0 0 440 92"
      role="img"
      aria-label="Curveline Design Consultants (Pvt) Ltd. Architecture, Engineering, Planning, Infrastructure"
      className="h-10 w-[190px] max-w-full sm:h-11 sm:w-[210px]"
      xmlns="http://www.w3.org/2000/svg"
    >

      {/* <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 57 22 42V27l10-7v-9h8v42" stroke="#0B78B8" strokeWidth="5" />
        <path d="M43 54V18L55 7v47" stroke="#9AA3AA" strokeWidth="6" />
        <path d="M57 54V25l9 8v21" stroke="#B8BEC3" strokeWidth="5" />
        <path d="M5 58c19-29 39-31 57-9 16 19 31 20 48-4" stroke="#A8B0B6" strokeWidth="7" />
        <path d="M4 54c19-23 38-24 57-5 17 17 32 19 49-4" stroke="#0B78B8" strokeWidth="8" />
        <path d="M12 61c14 11 29 8 42-5" stroke="#07558E" strokeWidth="3" />
      </g> */}
      
      <text
        x="125"
        y="39"
        fill={white ? '#FFFFFF' : '#0B78B8'}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="31"
        fontWeight="700"
        letterSpacing="0.2"
      >
        CURVELINE
      </text>
      <text
        x="127"
        y="59"
        fill={white ? '#FFFFFF' : '#252B30'}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="0.65"
      >
        DESIGN CONSULTANTS (PVT) LTD
      </text>
      <path d="M127 66H419" stroke={white ? '#AAB7C0' : '#252B30'} strokeWidth="1" />
      <text
        x="127"
        y="79"
        fill={white ? '#CFD8DE' : '#444C52'}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="8.5"
        fontWeight="500"
        letterSpacing="0.75"
      >
        ARCHITECTURE  |  ENGINEERING  |  PLANNING  |  INFRASTRUCTURE
      </text>
    </svg>
  )
}

export default LogoMark

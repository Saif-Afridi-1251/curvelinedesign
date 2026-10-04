const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  titleClassName = '',
  descriptionClassName = '',
  className = '',
}) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B78B8]">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2
          className={`max-w-[700px] text-[clamp(2rem,3vw,3.3rem)] font-medium leading-[1.04] tracking-[-0.06em] text-[#20272D] ${titleClassName}`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`max-w-[640px] text-base leading-7 text-[#58656f] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading

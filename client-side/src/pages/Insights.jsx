import Container from '../components/layout/Container'

const Insights = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[18px] border border-[#dfeaf0] bg-white p-10 shadow-[0_10px_25px_rgba(15,34,56,0.03)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B78B8]">Insights</p>
          <h1 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-medium tracking-[-0.07em] text-[#20272D]">
            Perspectives on design, cities and resilient growth.
          </h1>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-[#58656f]">
            Placeholder page for articles, thought leadership and industry commentary.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Insights

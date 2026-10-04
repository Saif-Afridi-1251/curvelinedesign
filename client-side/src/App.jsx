import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Expertise from './pages/Expertise'
import Process from './pages/Process'
import Team from './pages/Team'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-[#f7fafc] text-[#20272D]">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/process" element={<Process />} />
          <Route path="/team" element={<Team />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

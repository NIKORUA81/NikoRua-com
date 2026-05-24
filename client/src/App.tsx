import { Background3D } from '@components/3d/Background3D'
import { ScrollProgress } from '@components/layout/ScrollProgress'
import { Navbar } from '@components/layout/Navbar'
import { Footer } from '@components/layout/Footer'
import { Hero } from '@components/sections/Hero'
import { About } from '@components/sections/About'
import { Projects } from '@components/sections/Projects'
import { Experience } from '@components/sections/Experience'
import { Skills } from '@components/sections/Skills'
import { Contact } from '@components/sections/Contact'
function App() {
  return (
    <>
      <Background3D />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
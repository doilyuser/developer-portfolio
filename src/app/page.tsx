import {
  Navigation,
  Landing,
  About,
  Education,
  Skills,
  Experience,
  Projects,
  Achievements,
  Services,
  Testimonials,
  Blog,
  Contact,
  ScrollToTop,
} from '../components'
import { homeSections } from '@/data/home.data'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="grid min-h-screen items-center justify-items-center overflow-x-hidden font-sans">
        <main className="row-start-2 flex flex-col items-center sm:items-start">
          {homeSections.landing && <Landing />}
          {homeSections.about && <About />}
          {homeSections.education && <Education />}
          {homeSections.skills && <Skills />}
          {homeSections.experience && <Experience />}
          {homeSections.projects && <Projects />}
          {homeSections.achievements && <Achievements />}
          {homeSections.services && <Services />}
          {homeSections.testimonials && <Testimonials />}
          {homeSections.blog && <Blog />}
          {homeSections.contact && <Contact />}
        </main>
      </div>
      <ScrollToTop />
    </>
  )
}

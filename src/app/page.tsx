import {
  Navigation,
  Landing,
  About,
  Experience,
  Projects,
  Blog,
  Contact,
  ScrollToTop,
} from '../components'
import { navigationData } from '../data/navigation.data'

export default function Home() {
  // Create a set of active navigation item names for quick lookup
  const activePages = new Set(navigationData.navigationItems.map((item) => item.name))

  // Component mapping
  const componentMap = {
    Home: <Landing />,
    About: <About />,
    Experience: <Experience />,
    Projects: <Projects />,
    Blog: <Blog />,
    Contact: <Contact />,
  }

  return (
    <>
      <Navigation />
      <div className="grid min-h-screen items-center justify-items-center overflow-x-hidden font-sans">
        <main className="row-start-2 flex flex-col items-center sm:items-start">
          {/* Conditionally render components based on active navigation items */}
          {Object.entries(componentMap).map(([name, component]) =>
            activePages.has(name) ? <div key={name}>{component}</div> : null
          )}
        </main>
      </div>
      <ScrollToTop />
    </>
  )
}

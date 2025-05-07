import { projectsData } from '@/data/projects.data'

const data = projectsData

export default function Projects() {
  return (
    <section
      id={data.id}
      className="mx-auto min-h-screen w-screen max-w-screen-xl px-4 lg:px-6 flex flex-col"
    >
      {/* Header */}
      <div className="mt-20">
        <h2 className="text-left font-mono text-xs">{data.title}</h2>
        <p className="text-accent mb-12 text-right text-9xl underline">{data.subtitle}</p>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:mt-20">{data.body}</div>
    </section>
  )
}

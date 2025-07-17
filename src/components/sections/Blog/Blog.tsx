import { blogData } from '@/data/blog.data'

const data = blogData

export default function Blog() {
  return (
    <section id={data.id} className="mx-auto flex min-h-screen w-screen max-w-screen-xl flex-col px-4 lg:px-6">
      {/* Header */}
      <div className="mt-20">
        <h2 className="text-left font-mono text-xs">{data.title}</h2>
        <p className="mb-12 text-right text-9xl text-accent underline">{data.subtitle}</p>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2">{data.body}</div>
    </section>
  )
}

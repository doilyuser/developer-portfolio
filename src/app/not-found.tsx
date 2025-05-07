import { IoMdArrowBack } from 'react-icons/io'

import { ButtonOrLink } from '@/ui'
import { notFoundData } from '@/data/not-found.data'

const data = notFoundData

export default function NotFound() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <main
        className="row-start-2 flex flex-col items-center gap-8 sm:items-start"
        aria-labelledby="errorHeading"
        role="alert"
      >
        <div className="text-center font-mono text-sm/6 sm:text-left">
          <h1 className="mb-4 text-6xl font-bold">{data.title}</h1>
          <h2 className="mb-6 text-2xl">{data.subtitle}</h2>
          <p className="mb-8 max-w-md">{data.message}</p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <ButtonOrLink
            as="link"
            href={data.links.home.href}
            variant="secondary"
            icon={<IoMdArrowBack size={20} aria-hidden="true" />}
          >
            {data.links.home.text}
          </ButtonOrLink>
          <ButtonOrLink as="a" href={data.links.email.href} variant="tertiary">
            {data.links.email.text}
          </ButtonOrLink>
        </div>
      </main>
    </div>
  )
}

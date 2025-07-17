import Image from 'next/image'

import { ButtonOrLink, ScreenReaderSpan } from '@/ui'
import { landingData } from '@/data/landing.data'

const data = landingData

export default function Landing() {
  return (
    <section id="home" className="mx-auto flex min-h-screen w-screen max-w-screen-xl items-center px-4 lg:px-6">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div className="order-2 flex flex-col items-center justify-center gap-4 p-6 text-center sm:items-start sm:gap-6 sm:text-left lg:order-1 lg:p-8">
          {/* Text */}
          <div className="text-sm font-medium sm:text-base">
            {data.greeting} <span className="font-semibold text-accent">{data.name}</span>
          </div>
          <h1 className="text-2xl font-bold sm:text-5xl">{data.title}</h1>
          <p className="font-mono">{data.description}</p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <ButtonOrLink as="a" href={data.resumePdf} download icon={<data.icons.down />}>
              {data.linkText.downloadResume}
            </ButtonOrLink>
            <ButtonOrLink as="a" href="#contact" variant="tertiary">
              {data.linkText.contactUs}
            </ButtonOrLink>
          </div>
        </div>
        <div className="order-1 mt-16 flex flex-col items-center gap-6 px-6 lg:order-2 lg:p-8">
          {/* Profile Picture */}
          <div className="flex flex-grow items-center">
            <Image
              className="h-auto max-w-60 rounded-full border-4 border-surface-primary sm:max-w-full"
              src={data.image.source}
              alt={data.image.alt}
              width={400}
              height={400}
            />
          </div>

          {/* Social Icons */}
          <div className="mb-2 hidden flex-row gap-4 lg:flex">
            {data.socials.map(
              (social, index) =>
                social.href && (
                  <a
                    className="text-text-primary transition-all duration-150 ease-in-out hover:scale-110 hover:text-text-secondary"
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <social.icon className="h-8 w-auto sm:h-12" aria-hidden="true" />
                    <ScreenReaderSpan text={data.name} />
                  </a>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

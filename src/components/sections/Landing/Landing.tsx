import Image from 'next/image'

import { ButtonOrLink, ScreenReaderSpan } from '@/ui'
import { landingData } from '@/data/landing.data'

const data = landingData

export default function Landing() {
  return (
    <section
      id="home"
      className="mx-auto min-h-screen w-screen max-w-screen-xl px-4 lg:px-6 flex items-center"
    >
      <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-2 w-full">
        <div className="order-2 lg:order-1 p-6 lg:p-8 gap-4 sm:gap-6 flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
          {/* Text */}
          <div className="text-sm font-medium sm:text-base">
            {data.greeting} <span className="text-accent font-semibold">{data.name}</span>
          </div>
          <h1 className="text-2xl font-bold sm:text-5xl">{data.title}</h1>
          <p className="font-mono">{data.description}</p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <ButtonOrLink
              as="a"
              href={data.resumePdf}
              download
              icon={<data.icons.down className="text-xl sm:text-2xl" />}
            >
              {data.linkText.downloadResume}
            </ButtonOrLink>
            <ButtonOrLink as="a" href="#contact" variant="tertiary">
              {data.linkText.contactUs}
            </ButtonOrLink>
          </div>
        </div>
        <div className="order-1 lg:order-2 px-6 mt-16 lg:p-8 gap-6 flex flex-col items-center">
          {/* Profile Picture */}
          <div className="flex flex-grow items-center">
            <Image
              className="border-surface-primary rounded-full border-4 max-w-60 sm:max-w-full h-auto"
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
                  <ButtonOrLink
                    as="a"
                    aria-label={`Visit my ${social.name} profile`}
                    className="text-text-primary hover:text-text-secondary text-3xl transition-colors duration-150 ease-in-out sm:text-5xl"
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon aria-hidden="true" />
                    <ScreenReaderSpan text={data.name} />
                  </ButtonOrLink>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

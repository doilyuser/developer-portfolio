import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'

import { Footer } from '@/components'
import { url, websiteSchema, personSchema, skillsSchema } from '@/data/schema.data'
import { contactData } from '@/data/contact.data'
import { footerData } from '@/data/footer.data'

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : url

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'John | Developer Portfolio',
  description:
    'John is a software developer specializing in web development, creating responsive and user-friendly applications with modern technologies.',
  keywords: [
    /* Add more as required: */
    'software developer',
    'web developer',
    'fullstack developer',
    'react developer',
    'next.js',
    'portfolio',
    'john doe',
  ],
  authors: [{ name: contactData.name }],
  creator: contactData.name,
  publisher: contactData.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'John | Developer Portfolio',
    description:
      'John is a software developer specializing in web development, creating responsive and user-friendly applications with modern technologies.',
    siteName: "John's Portfolio",
    images: [
      {
        /* You will need to create this image: */
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `John Doe | Software Developer | Phone: 123-456-7890 | Github: /john | LinkedIn: /in/john | Facebook: /john.`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John | Developer Portfolio',
    description:
      'John is a software developer specializing in web development, creating responsive and user-friendly applications with modern technologies.',
    /* Same image as OpenGraph: */
    images: ['/og-image.png'],
    /* Replace with your Twitter handle if applicable: */
    creator: '@john',
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    /* Add verification codes if you have them: */
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add JSON-LD structured data */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-skills"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {footerData.footerEnabled && <Footer />}
      </body>
    </html>
  )
}

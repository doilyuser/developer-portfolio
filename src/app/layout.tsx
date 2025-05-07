import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'

import { Footer } from '@/components'
import { url, websiteSchema, personSchema } from '@/data/schema.data'
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
    'software developer',
    'web developer',
    'fullstack developer',
    'react developer',
    'next.js',
    'portfolio',
    'john doe',
    // Add more as required
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
        url: '/og-image.png', // You'll need to create this image
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
    images: ['/og-image.png'], // Same image as OpenGraph
    creator: '@john', // Replace with your Twitter handle if applicable
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add verification codes if you have them
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {footerData.footerEnabled && <Footer />}
      </body>
    </html>
  )
}

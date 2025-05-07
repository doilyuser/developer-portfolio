import { landingData } from './landing.data'
import { skillsData } from './skills.data'

export const url = 'https://developer-portfolio-xi-three.vercel.app'

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'John',
  url: url,
  jobTitle: 'Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Alphabet Inc.',
  },
  description:
    'Software developer specializing in web development, creating responsive and user-friendly applications with modern technologies.',
  sameAs: landingData.socials.map((link) => link.href),
  skills: Object.values(skillsData).flat(),
  knowsAbout: [
    'Web Development',
    'Frontend Development',
    'UI/UX Design',
    'Software Engineering',
    // Add more as required
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Southwestern University',
      url: 'https://www.southwestern.edu/',
    },
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "John's Portfolio",
  url: url,
  description: 'Personal portfolio website showcasing software development projects and skills',
  author: {
    '@type': 'Person',
    name: 'John',
  },
}

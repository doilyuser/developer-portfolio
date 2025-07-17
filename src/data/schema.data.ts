import { landingData } from './landing.data'
import { skillsSection } from './skills.data'

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
  skills: skillsSection.skills.filter((skill) => skill.display).map((skill) => skill.text),
  knowsAbout: [
    // Add more areas of expertise as needed:
    'Web Development',
    'Frontend Development',
    'UI/UX Design',
    'Software Engineering',
    ...skillsSection.skills.filter((skill) => skill.display).map((skill) => skill.text),
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

export const skillsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Technical Skills',
  description: 'Professional technical skills and expertise in software development',
  numberOfItems: skillsSection.skills.filter((skill) => skill.display).length,
  itemListElement: skillsSection.skills
    .filter((skill) => skill.display)
    .map((skill, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: skill.text,
        url: skill.href,
      },
    })),
}

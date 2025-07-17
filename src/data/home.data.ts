type HomeSections = Record<string, boolean>

export const homeSections = {
  landing: true,
  about: true,
  education: false,
  skills: true,
  experience: false,
  projects: true,
  achievements: false,
  services: false,
  testimonials: false,
  blog: false,
  contact: true,
} as const satisfies HomeSections

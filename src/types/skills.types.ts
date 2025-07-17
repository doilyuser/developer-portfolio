import { IconType } from '@/types/icon'

export interface SkillItem {
  display: boolean
  text: string
  href: URL
  icon: IconType
}

export interface SkillsSection {
  id: string
  title: string
  subtitle: string
  skills: SkillItem[]
}

import { ACCESSIBILITY_CONFIG } from '@/data/skills.data'
import type { SkillItem } from '@/types/skills.types'

interface SkillItemProps {
  skill: SkillItem
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <a
      href={skill.href.toString()}
      className="focus__item mx-8 shrink-0 sm:mx-16"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ACCESSIBILITY_CONFIG.LABELS.EXTERNAL_LINK(skill.text)}
    >
      <div className="flex flex-col items-center justify-center transition-transform duration-150 ease-in-out hover:scale-110">
        <skill.icon
          className="h-16 w-auto sm:h-24"
          role="img"
          aria-label={ACCESSIBILITY_CONFIG.LABELS.SKILL_ICON(skill.text)}
        />
        <p className="mt-2 font-mono text-xl font-semibold">{skill.text}</p>
      </div>
    </a>
  )
}

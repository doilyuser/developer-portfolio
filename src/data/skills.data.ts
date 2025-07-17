import {
  Angular,
  Aws,
  Azure,
  Blender,
  Bootstrap,
  Bulma,
  C,
  Canva,
  CPlusPlus,
  CSharp,
  Css3,
  Dart,
  Deno,
  Docker,
  Express,
  Fastify,
  Figma,
  Firebase,
  Flutter,
  Gcp,
  Git,
  GitHub,
  Go,
  Graphql,
  Haxe,
  Html5,
  Illustrator,
  Ionic,
  Iss,
  Java,
  JavaScript,
  Kotlin,
  Markdown,
  MaterialUi,
  Mongodb,
  MySql,
  NextDotJs,
  Nginx,
  NodeDotJs,
  Nuxt,
  Photoshop,
  Php,
  PostgresSql,
  Python,
  Pytorch,
  LogoReact,
  ReactQuery,
  Redux,
  Ruby,
  Svelte,
  Swift,
  Tailwind,
  TypeScript,
  Ubuntu,
  Unity,
  Vite,
  VueDotJs,
  Wordpress,
  Zustand,
} from '@/components/icons'
import { SkillsSection } from '@/types/skills.types'

/**
 * Choose your skills by enabling display below.
 *
 * Couldn't find the required skills?
 * Raise an issue on github at:
 * https://github.com/doilyuser/private-portfolio/issues/new
 */

export const skillsSection: SkillsSection = {
  id: 'skills',
  title: '➜ SKILLS',
  subtitle: 'What I do.',
  skills: [
    { display: false, text: 'Angular', href: new URL('https://angular.dev/'), icon: Angular },
    { display: false, text: 'AWS', href: new URL('https://aws.amazon.com/'), icon: Aws },
    { display: false, text: 'Azure', href: new URL('https://azure.microsoft.com/'), icon: Azure },
    { display: false, text: 'Blender', href: new URL('https://www.blender.org/'), icon: Blender },
    { display: false, text: 'Bootstrap', href: new URL('https://getbootstrap.com/'), icon: Bootstrap },
    { display: false, text: 'Bulma', href: new URL('https://bulma.io/'), icon: Bulma },
    { display: false, text: 'C', href: new URL('https://en.cppreference.com/w/c/language.html'), icon: C },
    { display: false, text: 'C#', href: new URL('https://dotnet.microsoft.com/languages/csharp'), icon: CSharp },
    { display: false, text: 'C++', href: new URL('https://cplusplus.com/'), icon: CPlusPlus },
    { display: false, text: 'Canva', href: new URL('https://www.canva.com/'), icon: Canva },
    { display: true, text: 'CSS3', href: new URL('https://developer.mozilla.org/CSS'), icon: Css3 },
    { display: false, text: 'Dart', href: new URL('https://dart.dev/'), icon: Dart },
    { display: false, text: 'Deno', href: new URL('https://deno.com/'), icon: Deno },
    { display: true, text: 'Docker ', href: new URL('https://docs.docker.com/'), icon: Docker },
    { display: true, text: 'Express ', href: new URL('https://expressjs.com/'), icon: Express },
    { display: false, text: 'Fastify', href: new URL('https://fastify.dev/'), icon: Fastify },
    { display: false, text: 'Figma', href: new URL('https://www.figma.com/'), icon: Figma },
    { display: false, text: 'Firebase', href: new URL('https://firebase.google.com/'), icon: Firebase },
    { display: false, text: 'Flutter', href: new URL('https://flutter.dev/'), icon: Flutter },
    { display: false, text: 'GCP', href: new URL('https://cloud.google.com/'), icon: Gcp },
    { display: false, text: 'Git', href: new URL('https://git-scm.com/'), icon: Git },
    { display: true, text: 'GitHub', href: new URL('https://github.com/'), icon: GitHub },
    { display: false, text: 'Go', href: new URL('https://go.dev/'), icon: Go },
    { display: false, text: 'GraphQL', href: new URL('https://graphql.org/'), icon: Graphql },
    { display: false, text: 'Haxe', href: new URL('https://haxe.org/'), icon: Haxe },
    { display: true, text: 'HTML5', href: new URL('https://developer.mozilla.org/HTML'), icon: Html5 },
    { display: false, text: 'Illustrator', href: new URL('https://www.adobe.com/illustrator.html'), icon: Illustrator },
    { display: false, text: 'Ionic', href: new URL('https://ionicframework.com/'), icon: Ionic },
    { display: false, text: 'ISS', href: new URL('https://www.iis.net/'), icon: Iss },
    { display: false, text: 'Java', href: new URL('https://www.java.com/'), icon: Java },
    { display: true, text: 'JavaScript', href: new URL('https://developer.mozilla.org/JavaScript'), icon: JavaScript },
    { display: false, text: 'Kotlin', href: new URL('https://kotlinlang.org/'), icon: Kotlin },
    { display: false, text: 'Markdown', href: new URL('https://www.markdownguide.org/'), icon: Markdown },
    { display: false, text: 'MaterialUI', href: new URL('https://mui.com/'), icon: MaterialUi },
    { display: false, text: 'MongoDB', href: new URL('https://www.mongodb.com/'), icon: Mongodb },
    { display: false, text: 'MySQL', href: new URL('https://dev.mysql.com/'), icon: MySql },
    { display: true, text: 'Next.js', href: new URL('https://nextjs.org/'), icon: NextDotJs },
    { display: false, text: 'Nginx', href: new URL('https://nginx.org/'), icon: Nginx },
    { display: true, text: 'Node.js', href: new URL('https://nodejs.org/'), icon: NodeDotJs },
    { display: false, text: 'Nuxt', href: new URL('https://nuxt.com/'), icon: Nuxt },
    { display: false, text: 'Photoshop', href: new URL('https://www.adobe.com/photoshop'), icon: Photoshop },
    { display: false, text: 'PHP', href: new URL('https://www.php.net/'), icon: Php },
    { display: true, text: 'PostgreSQL', href: new URL('https://www.postgresql.org/'), icon: PostgresSql },
    { display: false, text: 'Python', href: new URL('https://www.python.org/'), icon: Python },
    { display: false, text: 'Pytorch', href: new URL('https://pytorch.org/'), icon: Pytorch },
    { display: true, text: 'React', href: new URL('https://react.dev/'), icon: LogoReact },
    { display: false, text: 'React Query', href: new URL('https://tanstack.com/query/'), icon: ReactQuery },
    { display: false, text: 'Redux', href: new URL('https://redux.js.org/'), icon: Redux },
    { display: false, text: 'Ruby', href: new URL('https://www.ruby-lang.org/'), icon: Ruby },
    { display: false, text: 'Svelte', href: new URL('https://svelte.dev/'), icon: Svelte },
    { display: false, text: 'Swift', href: new URL('https://developer.apple.com/swift/'), icon: Swift },
    { display: true, text: 'Tailwind', href: new URL('https://tailwindcss.com/'), icon: Tailwind },
    { display: true, text: 'TypeScript', href: new URL('https://www.typescriptlang.org/'), icon: TypeScript },
    { display: false, text: 'Ubuntu', href: new URL('https://ubuntu.com/'), icon: Ubuntu },
    { display: false, text: 'Unity', href: new URL('https://unity.com/'), icon: Unity },
    { display: false, text: 'ViteJS', href: new URL('https://vite.dev/'), icon: Vite },
    { display: false, text: 'Vue.js', href: new URL('https://vuejs.org/'), icon: VueDotJs },
    { display: false, text: 'Wordpress', href: new URL('https://wordpress.org/'), icon: Wordpress },
    { display: false, text: 'Zustand', href: new URL('https://zustand.docs.pmnd.rs/'), icon: Zustand },
  ],
} as const

export const CAROUSEL_CONFIG = {
  OPACITY: {
    /* Percentage of viewport where skills maintain full opacity (1.0) */
    /* 0.15 = 15% of carousel width on each side of center */
    PLATEAU_WIDTH: 0.15,

    /* Percentage of viewport for opacity transition from 1.0 to 0.0 */
    /* 0.04 = 4% of carousel width for smooth fade effect */
    FADE_WIDTH: 0.04,

    /* Exponential curve steepness for opacity fade (1 = linear, >1 = steeper) */
    /* 2 = creates a smooth but noticeable fade-out curve with 12 skills enabled */
    FADE_MULTIPLIER: 2,
  },
  OPTIONS: {
    LOOP: true,
    DRAG_FREE: true,
  },
  WHEEL_GESTURES: {
    FORCE_WHEEL_AXIS: 'y',
  },
  AUTO_SCROLL: {
    SPEED: 1,
    STOP_ON_HOVER: true,
    STOP_ON_FOCUS: true,
  },
  THROTTLE: {
    /* 24 FPS is 41.(6) ms per frame */
    OPACITY_UPDATE_MS: 41,
  },
} as const

export const ACCESSIBILITY_CONFIG = {
  LABELS: {
    ID: 'carousel',
    CAROUSEL_REGION: 'Skills showcase carousel',
    CAROUSEL_INSTRUCTIONS:
      'Use left/right or tab to navigate through list. Use Home/End keys to navigate to the first/last item',
    CAROUSEL_CONTAINER: (listLength: number) => `Skill list. Length: ${listLength}`,
    SKILL_ICON: (skillName: string) => `${skillName} company logo`,
    EXTERNAL_LINK: (skillName: string) => `Learn more about ${skillName} (opens in new tab)`,
  },
} as const

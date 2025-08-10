type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Bentune',
    description:
      'An instruction-tuned large language model that excels in math and logic.',
    link: '/project/bentune',
    video:
      'https://res.cloudinary.com/dnt3ngxyp/video/upload/v1748353514/BenTune_jlffzg.mp4',
    id: 'project1',
  },
  {
    name: 'Crisis Companion',
    description: 'An app that helps users stuck in disasters find resources and shelter.',
    link: '/project/crisis-companion',
    video:
      'https://res.cloudinary.com/dnt3ngxyp/video/upload/v1748337472/HackHarvardLogoScene_mt7aox.mp4',
    id: 'project2',
  },
  {
    name: 'Verbalist.ai',
    description: 'A VS Code extension that helps disabled users make text edits using their voice.',
    link: '/project/verbalist',
    video:
      'https://res.cloudinary.com/dnt3ngxyp/video/upload/v1748338298/CalHacksScene_nuali1.mp4',
    id: 'project3',
  },
  {
    name: 'Open Spot Notifier',
    description: 'A script that notifies ASU students when a class spot opens through discordpy.',
    link: '/project/open-spot-notifier',
    video:
      'https://res.cloudinary.com/dnt3ngxyp/video/upload/v1748355338/ASUScene_rw1uio.mp4',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Arizona State University',
    title: 'Teaching Assistant',
    start: '2023',
    end: 'Present',
    link: '/work/ta',
    id: 'work1',

  },
  // {
  //   company: 'Sport Sitters',
  //   title: 'Software Engineer Intern',
  //   start: 'Jun 2025',
  //   end: 'Aug 2025',
  //   link: 'https://ibelick.com',
  //   id: 'work2',
  //
  // },
  {
    company: 'Infomaze Technologies',
    title: 'Software Engineer Intern',
    start: 'Jun 2024',
    end: 'Aug 2024',
    link: '/work/infomaze',
    id: 'work3',
  },
  {
    company: 'ASU Automation projects',
    title: 'Software Engineer Intern',
    start: 'Jan 2023',
    end: 'Dec 2023',
    link: '/work/pnards',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/deep-goyal',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/deep-goyal',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/thegodoflols',
  },
]

export const EMAIL = 'deepgoyal.work@gmail.com'

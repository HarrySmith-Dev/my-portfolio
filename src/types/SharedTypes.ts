export type NavigationLinksData = {
  url: string
  label: string
  iconSrc?: string
}

export type ProjectLink = {
  label: string
  url: string
}

export type ProjectData = {
  title: string
  url?: string
  description: string
  techStack: string[]
  links: ProjectLink[]
  imageSrc?: string
  imageAlt?: string
}

export type FormInput = {
  name: string
  email: string
  message: string
  website?: string
}

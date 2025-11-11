export interface LinkItem {
  id: string
  title: string
  url: string
  icon?: string | 'linkedin' | 'instagram' | 'facebook' | 'snapchat' | 'website' | 'discord' | 'github'
  thumbnail?: string
}

export interface LinkSection {
  id: string
  title: string
  items: LinkItem[]
}

export const links: LinkSection[] = [
  {
    id: 'social-media',
    title: 'SOCIAL MEDIA',
    items: [
      {
        id: 'linkedin',
        title: 'LinkedIn',
        url: '#',
        icon: 'linkedin',
      },
      {
        id: 'instagram',
        title: 'Instagram',
        url: '#',
        icon: 'instagram',
      },
      {
        id: 'facebook',
        title: 'Facebook',
        url: '#',
        icon: 'facebook',
      },
      {
        id: 'snapchat',
        title: 'Snapchat',
        url: '#',
        icon: 'snapchat',
      },
      {
        id: 'github',
        title: 'GitHub',
        url: '#',
        icon: 'github',
      },
      {
        id: 'discord',
        title: 'Discord',
        url: '#',
        icon: 'discord',
      },
      {
        id: 'website',
        title: 'Website',
        url: '#',
        icon: 'website',
      },
    ],
  },
]


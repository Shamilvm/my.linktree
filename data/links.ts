export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?:
    | string
    | "linkedin"
    | "instagram"
    | "website"
    | "discord"
    | "github";
  thumbnail?: string;
}

export interface LinkSection {
  id: string;
  title: string;
  items: LinkItem[];
}

export const links: LinkSection[] = [
  {
    id: "social-media",
    title: "SOCIAL MEDIA",
    items: [
      {
        id: "website",
        title: "Website",
        url: "https://www.shamilvm.com/",
        icon: "website",
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/shamilvm/",
        icon: "linkedin",
      },
      {
        id: "instagram",
        title: "Instagram",
        url: "https://www.instagram.com/shamil_vm__/",
        icon: "instagram",
      },
      {
        id: "github",
        title: "GitHub",
        url: "https://github.com/Shamilvm",
        icon: "github",
      },
      {
        id: "discord",
        title: "Discord",
        url: "https://discord.com/users/shamilvm",
        icon: "discord",
      },
    ],
  },
];

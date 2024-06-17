export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "有涯",
  description: "学海有涯，规划你的学习生涯",
  navItems: [
    {
      label: "主页",
      href: "/",
    },
    {
      label: "学习情况追踪",
      href: "/trace",
    },
  ],
  navMenuItems: [
    {
      label: "主页",
      href: "/",
    },
    {
      label: "学习情况追踪",
      href: "/trace",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

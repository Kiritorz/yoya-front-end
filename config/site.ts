export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "有涯",
  description: "学海有涯，规划你的学习生涯",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "个人中心",
      href: "/me",
    },
  ],
  navMenuItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "个人中心",
      href: "/me",
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

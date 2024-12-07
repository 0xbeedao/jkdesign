export interface SimpleLink {
  href: string;
  text: string;
}

export const footerLinks: SimpleLink[] = [
  {
    href: "https://www.etsy.com/shop/PioneerMoon",
    text: "Pioneer Moon",
  },
  {
    href: "https://artful.one/",
    text: "Artful One",
  },
];

export const headerLinks: SimpleLink[] = [
  { href: "/bio", text: "Bio" },
  { href: "/fashion", text: "Fashion" },
  { href: "/theater", text: "Theater" },
];

export interface Social {
  href: string;
  icon: string;
  text: string;
}

export const socials: Social[] = [
  {
    href: "https://www.linkedin.com/in/bkroeze/",
    icon: "linkedin",
    text: "Linkedin",
  },
  {
    href: "https://twitter.com/cryptoarchon",
    icon: "twitter",
    text: "Twitter",
  },
  {
    href: "https://github.com/0xbeedao",
    icon: "github",
    text: "Github",
  },
];

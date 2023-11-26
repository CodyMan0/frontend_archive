import { NavLinkProps } from "@/components/nav-link";
import { Badge, Box, HStack, Text } from "@chakra-ui/react";

const hideMobile = {
  // display: ['none', null, 'block'],
};

const headerNav: NavLinkProps[] = [
  { id: "home", label: "Home", display: "none" },

  // {
  //   href: '/figma',
  //   label: 'Figma',
  //   ...hideMobile,
  // },
  {
    href: "/about",
    label: "About",
    ...hideMobile,
  },
  {
    href: "/components",
    label: "Components",
    ...hideMobile,
  },
];

export default headerNav;

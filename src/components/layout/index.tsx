import { Box, SkipNavContent, SkipNavLink } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header, { HeaderProps } from "./header";
// import {
//   AnnouncementBanner,
//   AnnouncementBannerProps,
// } from '../announcement-banner'

interface LayoutProps {
  children: ReactNode;
  // announcement: AnnouncementBannerProps
  header: HeaderProps;
  footer: ReactNode;
}

const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <Box minH="$100vh">
      <SkipNavLink>Skip to content</SkipNavLink>
      {/* banner */}
      {/* <AnnouncementBanner {...announcement} /> */}
      <Header {...header} />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      {footer}
    </Box>
  );
};

export default Layout;

import * as React from "react";
import {
  Box,
  HStack,
  IconButton,
  Kbd,
  Link,
  MenuItem,
  Spacer,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useRouter } from "next/router";

// import { MobileNavButton } from "@/docs/components/mobile-nav";
// import { MobileNavContent } from "@/docs/components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";

import ThemeToggle from "./theme-toggle";
import { ProductLaneLogo } from "../logos/productlane";
import { OverflowMenu, SearchInput, useHotkeys } from "@saas-ui/react";

// import { GlobalSearch } from "../global-search/global-search";
import headerNav from "@/data/header-nav";
import NavLink from "../nav-link";
import useScrollSpy from "@/hooks/useScrollspy";

const Header = () => {
  const mobileNav = useDisclosure();
  const isDesktop = useBreakpointValue({ xl: true });
  const router = useRouter();
  const activeId = useScrollSpy(
    headerNav.filter(({ id }) => id).map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useHotkeys(["/", "CMD+K"], () => {
    onOpen();
  });

  return (
    <HStack flex="1" ps="4">
      <HStack
        spacing="1"
        flexShrink={0}
        flex="1"
        justifyContent="flex-start"
        alignContent="center"
      >
        {headerNav.map(({ href, id, ...props }, i) => {
          return (
            <>
              <NavLink
                // display={{ base: "none", lg: "block" }}
                href={href || `/#${id}`}
                key={i}
                isActive={
                  !!(id && activeId === id) ||
                  !!(href && !!router.asPath.match(new RegExp(href)))
                }
                {...props}
              />
            </>
          );
        })}
      </HStack>
      <HStack>
        <Box>
          {isDesktop && (
            <SearchInput
              placeholder="Search docs..."
              size="sm"
              borderRadius="md"
              onFocus={onOpen}
              rightElement={<Kbd fontSize="md">/</Kbd>}
            />
          )}
          {/* <GlobalSearch/
            isOpen={isOpen}
            onClose={onClose}
            onSelect={(value) => {
              console.log(value);
            }}
          /> */}
        </Box>

        <Tooltip label="Linkedin">
          <IconButton
            variant="ghost"
            aria-label="linkedin"
            icon={<FaLinkedin size="14" />}
            borderRadius="md"
            as={Link}
            href="https://www.linkedin.com/in/brian0/"
          />
        </Tooltip>

        {/* <Tooltip label="Discord community">
          <IconButton
            variant="ghost"
            aria-label="discord"
            icon={<FaDiscord size="14" />}
            borderRadius="md"
            as={Link}
            href="https://discord.gg/4PmJGFcAjX"
          />
        </Tooltip> */}

        {/* <Tooltip label="Twitter">
          <IconButton
            variant="ghost"
            aria-label="twitter"
            icon={<FaXTwitter size="14" />}
            borderRadius="md"
            as={Link}
            href="https://twitter.com/saas_js"
          />
        </Tooltip> */}

        <Tooltip label="Github">
          <IconButton
            variant="ghost"
            aria-label="github"
            icon={<FaGithub size="14" />}
            borderRadius="md"
            as={Link}
            href="https://github.com/CodyMan0/frontend_archive"
          />
        </Tooltip>

        <ThemeToggle />

        {/* <MobileNavButton
          ref={mobileNavBtnRef}
          aria-label="Open Menu"
          onClick={mobileNav.onOpen}
        />

        <MobileNavContent
          isOpen={mobileNav.isOpen}
          onClose={mobileNav.onClose}
        /> */}
      </HStack>
    </HStack>
  );
};

export default Header;

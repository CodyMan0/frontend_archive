import { Flex, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Footer, { Copyright, FooterLink } from "./layout/footer";
import { FaLinkedin } from "react-icons/fa6";

// import NbaseLogo from "./nbaseLogo";

const CustomFooter = () => {
  return (
    <Footer columns={{ base: 1, lg: 2 }} mb={{ lg: 16 }}>
      <Stack spacing="8" mb="4">
        <Stack alignItems="flex-start">
          <Flex width="100px" h="8">
            {/* <NbaseLogo /> */}
          </Flex>
          <Text fontSize="md" color="muted">
            Making application developments easy - with <br />
            exceptional SDK and API
          </Text>
        </Stack>
        <Copyright>
          Built by{" "}
          <FooterLink href="https://twitter.com/Pagebakers">
            Nbase Corp.
          </FooterLink>
        </Copyright>
      </Stack>
      <Stack
        direction={{ base: "row", lg: "column-reverse" }}
        justify={{ base: "flex-start", lg: "flex-end" }}
        alignItems="flex-end"
        spacing="4"
        alignSelf="flex-end"
        mb="4"
      >
        <HStack spacing="4">
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="mailto:hello@saas-ui.dev">Contact</FooterLink>
          <FooterLink href="/license">License</FooterLink>
          <FooterLink href="/terms">Terms</FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
        </HStack>
        <HStack display={{ base: "none", lg: "block" }}>
          <IconButton
            variant="ghost"
            aria-label="linkedin"
            icon={<FaLinkedin size="14" />}
            borderRadius="md"
            as={Link}
            href="https://www.linkedin.com/company/nbase-corp"
          />

          {/* <IconButton
            variant="ghost"
            aria-label="twitter"
            icon={<FaXTwitter size="14" />}
            borderRadius="md"
            as={Link}
            href="https://twitter.com/saas_js"
          />  */}

          <IconButton
            variant="ghost"
            aria-label="github"
            icon={<FaGithub size="14" />}
            borderRadius="md"
            as={Link}
            href="https://github.com/saas-js/saas-ui"
          />
        </HStack>
      </Stack>
    </Footer>
  );
};

export default CustomFooter;

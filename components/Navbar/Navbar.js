import { Button, Box, Spacer, Heading, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { DarkModeSwitch } from "../UI/DarkModeSwitch";

export default function Navbar() {
  return (
    <HStack>
      <Box p="2" pl={0}>
        <Heading size="xl">Cytadel. </Heading>
      </Box>
      <Box p="2">
        <NextLink href="/" passHref>
          <Button
            colorScheme="teal"
            variant="ghost"
            aria-label="User"
            my={5}
            fontSize="xl"
          >
            HOME
          </Button>
        </NextLink>

        <NextLink href="/blog" passHref>
          <Button
            colorScheme="teal"
            variant="ghost"
            aria-label="User"
            my={5}
            fontSize="xl"
          >
            BLOG
          </Button>
        </NextLink>

        <NextLink href="/users" passHref>
          <Button
            colorScheme="teal"
            variant="ghost"
            aria-label="User"
            my={5}
            fontSize="xl"
          >
            USERS
          </Button>
        </NextLink>
      </Box>
      <Spacer />
      <Box p="4">
        <DarkModeSwitch />
      </Box>
    </HStack>
  );
}

import Navbar from "../../components/Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
export default function index({ users }) {
  return (
    <Container maxW="container.xl" px={4} pt={5}>
      <Navbar />
      <Heading as="h1" size="xl" mb={5} textAlign="center">
        Liste des Utilisateurs
      </Heading>
      <SimpleGrid
        columns={{ sm: 2, md: 4 }}
        spacing="8"
        my={4}
        justifyContent="center"
      >
        {users.map((user) => (
          <Box
            shadow="md"
            borderWidth="1px"
            p={5}
            key={uuidv4()}
            flex="nowrap"
            justifyContent="space-between"
          >
            <Heading
              as="h5"
              fontSize={{ sm: "md", md: "lg", xl: "xl" }}
              ml="auto"
            >
              {user.username}
            </Heading>

            <Text as="p" fontSize={{ sm: "md", md: "lg", xl: "xl" }}>
              {user.phone}
            </Text>

            <NextLink href={`/users/${user.id.toString()}`} passHref>
              <Link>Contact</Link>
            </NextLink>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}

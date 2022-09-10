import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container maxW="container.xl" px={4} pt={5}>
      <Heading as="h1" mb={4} fontSize={"3xl"}>
        Bienvenue dans le Cytadel
      </Heading>
      <Text as={"span"} fontSize="xl" mb={4}>
        Le Cytadel est un site de partage de ressources pour les étudiants de
        l&apos;Université de Sherbrooke.
      </Text>

      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="8" pt={8} pb={8}>
        <Box shadow="md" borderWidth="1px" p={5} >
          <Heading as={"h1"} fontSize="2xl">
            Lisez les Articles
          </Heading>
          <Text
            as={"h2"}
            mb={2}
            textMuted={true}
            fontSize="xl"
            color="gray.400"
          >
            {" "}
            Maximisez votre cultures web.
          </Text>
          <Text as={"p"} mb={2} fontSize="md" textAlign={"justify"}>
            {" "}
            Chaque auteur tente de vous apporter un contenu de qualité et plus
            de valeur possible.
          </Text>
          <NextLink href="/blog" passHref>
            <Link>Visitez le blog</Link>
          </NextLink>
        </Box>
        <Box shadow="md" borderWidth="1px" p={5}>
          <Heading as={"h1"} fontSize="2xl">
            Faites un tour vers la liste des membres.
          </Heading>
          <Text
            as={"h2"}
            mb={2}
            textMuted={true}
            fontSize="xl"
            color="gray.400"
          >
            {" "}
            Rencontrez des devs.
          </Text>
          <Text as={"p"} mb={2} fontSize="md" textAlign={"justify"}>
            {" "}
            Ajoutez, invitez et discutez avec les differents membres.
          </Text>
          <NextLink href="/utilisateurs" passHref>
            <Link>Membres</Link>
          </NextLink>
        </Box>{" "}
      </SimpleGrid>
    </Container>
  );
}

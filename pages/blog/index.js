import { Box, Container, Heading, SimpleGrid, Text, Link } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import NextLink from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function index({posts}) {
  return (
    <Container maxW="container.xl" px={4} pt={5} >
      <Navbar/>
      <Heading as="h1" textAlign="center">
        Bienvenue sur le Blog
      </Heading>
      <Text as="p" textAlign="center">
        Ici vous trouverez des articles sur des sujets variés.
      </Text>
      <SimpleGrid
        columns={{ sm: 2, md: 4, xl: 6 }}
        spacing="8"
        mt={4}
        mb={4}
      >
        {posts.map((post) => (
          <Box shadow="md" borderWidth="1px" p={5} key={uuidv4()} >
            <Heading as="h5" fontSize={{sm:"md", md:"lg", xl:"xl"}} >
              {post.title}
            </Heading>
            <Text as="p" fontSize={{sm:"md", md:"lg", xl:"xl"}} >
              {post.body.slice(0,20) + "..."}
            </Text>
            <NextLink href={`/blog/${post.id.toString()}`} passHref>
              <Link>Read more</Link>
            </NextLink>
          </Box>
        ))}

      </SimpleGrid>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}

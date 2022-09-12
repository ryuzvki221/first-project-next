import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";

export default function post({ post }) {
  return (
    <Container maxW="container.xl" px={4} pt={5}>
      <Navbar />
      <Heading
        as="h1"
        fontSize={{ sm: "lg", md: "xl", xl: "3xl" }}
        align="center"
      >
        {post.title.toUpperCase()}
      </Heading>
      <Flex>
        <Box shadow="md" borderWidth="1px" p={5} mt={4} mb={4} w="100%">
          <Text as="p" fontSize={{ sm: "md", md: "lg", xl: "xl" }} justifyContent="center">
            {post.body}
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const id = params.post;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await data.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  const paths = posts.map((post) => ({
    params: { post: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

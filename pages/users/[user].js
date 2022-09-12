import {
  Container,
  Image,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Box,
} from "@chakra-ui/react";

import Navbar from "../../components/Navbar/Navbar";
export default function user({ user }) {
  return (
    <Container maxW="container.xl" px={4} pt={5}>
      <Navbar />
      <Image
        src="https://via.placeholder.com/150"
        alt="user"
        borderRadius="full"
        boxSize="150px"
        mx="auto"
        mt={5}
      />
      <Center>
        <VStack>
          <Heading>{user.name}</Heading>
          <Text color="grey">
            {"@"}
            {user.username} {"|"} {user.website}
          </Text>
          <HStack>
            <Tag>{user.company.name}</Tag>
            <Tag>{user.company.catchPhrase}</Tag>
            <Tag>{user.company.bs}</Tag>
          </HStack>
          <Heading>Contact</Heading>
          <Box shadow="md" borderWidth="1px" p={5} align="left">
            <Text>
              Tel{" : "}
              {user.phone}
            </Text>
            <Text>
              Email{" : "}
              {user.email}
            </Text>
            <Text>
              Adresse{" : "}
              {user.address.street}
              {" | "}
              {user.address.suite}
              {" | "}
              {user.address.city}
              {" | "}
              {user.address.zipcode}
            </Text>
          </Box>
        </VStack>
      </Center>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const id = params.user;

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const paths = users.map((item) => ({
    params: { user: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

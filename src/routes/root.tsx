import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
  theme,
} from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export const Root = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" align="center" p={4}>
        {isAuthenticated ? (
          <Box textAlign="center" mb={6}>
            <LogoutButton />
            <Flex direction="column" align="center" mt={4}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src={user?.picture}
                alt={user?.name}
              />
              <Heading as="h2" size="md" mt={4}>
                {user?.name}
              </Heading>
              <Text>{user?.email}</Text>
            </Flex>
          </Box>
        ) : (
          <Box textAlign="center" mb={6}>
            <Flex align={"center"}>
              <LoginButton />
              <Link href={`/signup`} color="teal.500" fontSize="lg" ml={4}>
                Signup
              </Link>
            </Flex>
            <Text mt={4}>Not Authenticated</Text>
          </Box>
        )}
        <Box w="full" maxW="md" mt={4}>
          <nav>
            <List spacing={3}>
              <ListItem>
                <Link href={`/page1`} color="teal.500" fontSize="lg">
                  Page 1
                </Link>
              </ListItem>
              <ListItem>
                <Link href={`/page2`} color="teal.500" fontSize="lg">
                  Page 2
                </Link>
              </ListItem>
            </List>
          </nav>
        </Box>
        <Box id="detail" mt={4}></Box>
      </Flex>
    </ChakraProvider>
  );
};

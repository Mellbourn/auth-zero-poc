import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  theme,
} from "@chakra-ui/react";
import React, { useState } from "react";
import authConfig from "../auth_config.json";

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { domain, clientId } = authConfig;

    const response = await fetch(`https://${domain}/dbconnections/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        email,
        password,
        connection: "Username-Password-Authentication",
        user_metadata: { name },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(
        "Signup successful! Please check your email to verify your account."
      );
    } else {
      setError(data.message || "An error occurred during signup.");
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        maxW="md"
        mx="auto"
        mt={10}
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <Heading as="h1" size="lg" mb={6} textAlign="center">
          Experience the power of Dmaze
        </Heading>
        <Text textAlign="center" mb={6}>
          You are only one step away from unleashing the power of Dmaze. Sign-up
          with your e-mail and organization name.
        </Text>
        <form onSubmit={handleSignup}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Organization name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Continue
            </Button>
          </VStack>
          {error && (
            <Text color="red.500" mt={4}>
              {error}
            </Text>
          )}
          {success && (
            <Text color="green.500" mt={4}>
              {success}
            </Text>
          )}
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default Signup;

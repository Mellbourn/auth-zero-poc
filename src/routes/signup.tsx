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
import auth0 from "auth0-js";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authConfig from "../auth_config.json";
import { Turnstile } from "./Turnstile";

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const history = useHistory();

  const handleVerify = (token: string) => {
    console.log("Turnstile token:", token);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { domain, clientId } = authConfig;

    var webAuth = new auth0.WebAuth({
      clientID: clientId,
      domain: domain,
      redirectUri: "http://localhost:3000/",
      responseType: "token id_token",
    });

    webAuth.passwordlessStart(
      {
        connection: "email",
        send: "code",
        email,
      },
      function (err, res) {
        if (err) {
          setError(JSON.stringify(err) || "An error occurred during signup.");
          return;
        }

        setSuccess(
          "A code has been sent to your email. Please check your email to continue."
        );
        history.push({
          pathname: "/enter-code",
          state: { email },
        });
      }
    );
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
            <FormControl id="organization" isRequired>
              <FormLabel>Organization name</FormLabel>
              <Input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
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
        <VStack mt={8}>
          <Turnstile siteKey={authConfig.turnstile} onVerify={handleVerify} />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Signup;

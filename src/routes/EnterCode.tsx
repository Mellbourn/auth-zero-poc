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
import { useLocation, useNavigate } from "react-router-dom";
import authConfig from "../auth_config.json";

export const EnterCode: React.FC = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEnterCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { domain, clientId } = authConfig;

    var webAuth = new auth0.WebAuth({
      clientID: clientId,
      domain: domain,
      redirectUri: "http://localhost:3000/",
      responseType: "token id_token",
    });

    webAuth.passwordlessLogin(
      {
        connection: "email",
        email: location.state.email,
        verificationCode: code,
      },
      function (err, res) {
        if (err) {
          setError(
            JSON.stringify(err) || "An error occurred during verification."
          );
          return;
        }

        navigate("/page1");
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
          Enter Verification Code
        </Heading>
        <Text textAlign="center" mb={6}>
          Please enter the verification code sent to your email.
        </Text>
        <form onSubmit={handleEnterCode}>
          <VStack spacing={4}>
            <FormControl id="code" isRequired>
              <FormLabel>Verification Code</FormLabel>
              <Input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Verify
            </Button>
          </VStack>
          {error && (
            <Text color="red.500" mt={4}>
              {error}
            </Text>
          )}
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default EnterCode;

import { Box, ChakraProvider, Heading, Text, theme } from "@chakra-ui/react";
import React from "react";

const PleaseHangTight: React.FC = () => {
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
          Please hang tight
        </Heading>
        <Text textAlign="center" mb={6}>
          We have sent a magic link to your email. Please click on the link in
          your email to continue.
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default PleaseHangTight;

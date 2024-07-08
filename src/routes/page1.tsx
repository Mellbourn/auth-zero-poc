import { Box, ChakraProvider, Heading, Text, theme } from "@chakra-ui/react";

export const Page1 = () => (
  <ChakraProvider theme={theme}>
    <Box
      maxW="xl"
      mx="auto"
      mt={10}
      p={5}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Welcome to Page 1
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="center">
        This is Page1
      </Text>
      {/* <Box textAlign="center">
        <Button colorScheme="teal" size="md">
          Learn More
        </Button>
      </Box> */}
    </Box>
  </ChakraProvider>
);

export default Page1;

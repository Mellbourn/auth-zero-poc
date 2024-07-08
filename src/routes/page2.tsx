import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  Text,
  theme,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Page2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
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
        <Button onClick={handleBackClick} colorScheme="teal" mb={4}>
          Back
        </Button>
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Welcome to Page 2
        </Heading>
        <Text fontSize="lg" mb={4} textAlign="center">
          This is Page2
        </Text>
        {/* <Box textAlign="center">
        <Button colorScheme="teal" size="md">
          Learn More
        </Button>
      </Box> */}
      </Box>
    </ChakraProvider>
  );
};

export default Page2;

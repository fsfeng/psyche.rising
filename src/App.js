import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

// Components
import {
  Skeleton,
  Divider,
  Box,
  Container,
  Center,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
  ChakraProvider,
  Text,
  Flex,
  Image,
  Link
} from "@chakra-ui/react";

// Fonts
import { Fonts } from "./theme/Fonts";

// Theme
import chakraTheme from "./theme/chakraTheme";

export default function App() {
  return (
    <Fragment>
      <ChakraProvider theme={chakraTheme}>
        <Fonts />
        {/* <HeaderBox /> */}
        <Box bgGradient="linear(to-r,#e6cdd7,orange.200,#e6cdd7)">
          <Container maxW="5xl" centerContent w="100%">
            <Box
              w="100%"
              pr={{ base: 6, md: 6 }}
              pl={{ base: 6, md: 12 }}
              pt="10"
              pb="10"
              bg="orange.100"
              opacity="60%"
            >
              <Heading
                textStyle="title"
                textShadow="1px 2px #ff0000"
              >{`psyche rising`}</Heading>
            </Box>

            <Box
              w="100%"
              pr="6"
              pl="6"
              pt="2"
              pb="2"
              bg="gray.100"
              opacity="50%"
              boxShadow="base"
            >
              <Text textStyle="nav" textAlign="center">
                about, page, 'gram, twitter,
              </Text>
            </Box>

            <Box>
              <Text textStyle="subtitle">{`words words and words`}</Text>
            </Box>

            {/* Grid goes here */}
            <SimpleGrid
              w="100%"
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 10, md: "10%" }}
            >
              <Box bg="tomato" width={{ base: "100%" }} height="200px">
                <Text textStyle="text">
                  Uncovering the depths through astrology{" "}
                </Text>
              </Box>
              <Box bg="tomato" width={{ base: "100%" }} height="200px">
                <Text textStyle="text">
                  Uncovering the depths through astrology{" "}
                </Text>
              </Box>
              <Box bg="tomato" width="100%" height="200px">
                <Text textStyle="text">
                  Uncovering the depths through astrology{" "}
                </Text>
              </Box>
              <Box bg="tomato" width="100%" height="200px">
                <Text textStyle="text">
                  Uncovering the depths through astrology{" "}
                </Text>
              </Box>
              <Box bg="tomato" width="100%" height="200px">
                <Text textStyle="text">
                  Uncovering the depths through astrology{" "}
                </Text>
              </Box>
            </SimpleGrid>

            <Box display={{ sm: "flex" }} bg="gray.100">
              <Box
                pt={{ base: 4, md: 0 }}
                pr={{ base: 6, md: 6 }}
                pl={{ base: 6, md: 12 }}
                pb={{ base: 6, md: 6 }}
                bg="blue.100"
              >
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="sm"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  ABOUT
                </Text>

                <Text mt={2} color="gray.500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </Text>
              </Box>

              {/* <Box flexShrink={0}>
            <Image
              borderRadius="lg"
              width={{ md: "80" }}
              src="https://bit.ly/2jYM25F"
              alt="Woman paying for a purchase"
            />
          </Box> */}

              <Box flexShrink={0} width={{ sm: "60" }} bg="red.100">
                <Box
                  pt={{ base: 4, md: 0 }}
                  pl="6"
                  pr={{ base: 6, md: 12 }}
                  pb={{ base: 6, md: 6 }}
                  bg="yellow.100"
                >
                  <Text>ARCHIVE</Text>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </ChakraProvider>
    </Fragment>
  );
}

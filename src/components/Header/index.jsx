import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <>
      <Box bg="#E3E5E4">
        <Navbar />
        <Flex
          w="100%"
          h="82vh"
          direction="column"
          justify="center"
          p="12"
          sx={{
            "@media only screen and (max-width: 600px)": {
              height: "60vh",
            },
          }}
        >
          <Text fontSize="2xl">Olá, eu sou</Text>
          <Text fontSize="5xl" fontWeight="bold">
            Kevin Pedroso
          </Text>
          <Text fontSize="xl" fontWeight="bolder">
            Desenvolvedor Front-End
          </Text>
          <Text
            fontSize="md"
            w="40%"
            sx={{
              "@media only screen and (max-width: 600px)": {
                width: "80%",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            ullam natus? Enim, quidem. Accusantium at unde voluptates.
          </Text>
        </Flex>
      </Box>
    </>
  );
}
1;

// import { Flex, Heading } from '@chakra-ui/react'

// export const Hero = ({ title }) => (
//   <Flex justifyContent="center" alignItems="center" height="100vh">
{
  /* <Heading
  fontSize="10vw"
  >
  {title}
  </Heading>; */
}
//   </Flex>
// )

// Hero.defaultProps = {
//   title: 'with-chakra-ui',
// }
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/assets/kotaka.jpeg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        align={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.300, blackAlpha.800)"}
      >
        <Stack maxW={"5xl"} align={"flex-start"} spacing={6}>
          <Grid
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            display="grid"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={2}
            placeItems="center"
          >
            <GridItem colSpan={2}>
              <Text>Guilherme dos Anjos notícias...</Text>
              <Text>
                Todas as notícias sobre o
                <Text
                  d="inline-block"
                  bgGradient="linear(to-r, #ec9f05, #ff4e00)"
                  bgClip="text"
                  pl={3}
                >
                  RAP
                </Text>
              </Text>
            </GridItem>
            <Text color="black">Lucas Hype</Text>
            <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
              Lil Lixo
            </Text>
            <GridItem colSpan={2}>
              <Text color="#e0d62c">Loren Tralha</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text
                fontSize="4vw"
                bgGradient={"linear(to-tl, blackAlpha.600, blackAlpha.900)"}
                bgClip="text"
              >
                E muito mais
              </Text>
            </GridItem>
          </Grid>
          <Stack alignSelf="center" direction={"row"}>
            <Button
              size="lg"
              as="a"
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
              href="https://www.youtube.com/watch?v=MW9svm_FwxY"
            >
              Clique aqui!! 
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

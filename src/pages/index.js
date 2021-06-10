import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { IconButton } from "@chakra-ui/button";

import { FiGithub } from "react-icons/fi";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <IconButton
      as="a"
      href="https://github.com/kseikyo"
      icon={<FiGithub />}
      position="absolute"
      top="0"
      right="0"
    />
  </Container>
);

export default Index;

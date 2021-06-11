import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { IconButton } from "@chakra-ui/button";

import { FiGithub } from "react-icons/fi";
import { NextSeo } from "next-seo";

const Index = () => (
  <Container height="100vh">
    <NextSeo
      title="Guilherme dos anjos"
      description="Todas as notícias sobre o rap. Lucas Hype, Lil Lixo, Loren Tralha e muito mais!!!"
      canonical="https://www.guilhermedosanjos.com/"
      openGraph={{
        url: 'https://www.guilhermedosanjos.com',
        title: 'Guilherme dos anjos',
        description: 'Todas as notícias sobre o rap. Lucas Hype, Lil Lixo, Loren Tralha e muito mais!!!',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        site_name: 'Guilherme dos anjos notícias',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
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

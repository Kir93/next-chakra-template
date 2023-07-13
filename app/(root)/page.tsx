'use client';

import { Heading, VStack } from '@chakra-ui/react';
import Img from '@/components/Img';
import Logo from '@/public/next.svg';

export default function Home() {
  return (
    <VStack
      spacing="30px"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="30px"
    >
      <Heading>Next Chakra Template</Heading>
      <Img src={Logo} alt="Next.js Logo" objectFit="cover" w="150px" />
    </VStack>
  );
}

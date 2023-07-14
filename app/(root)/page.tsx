'use client';

import AutoHeightImg from '@/components/AutoHeightImg';
import { Heading, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <VStack spacing="30px" w="100%" minH="100vh" display="flex" px="30px">
      <Heading>Next Chakra Template</Heading>
      <AutoHeightImg src="/vercel.jpeg" alt="test image" />
    </VStack>
  );
}

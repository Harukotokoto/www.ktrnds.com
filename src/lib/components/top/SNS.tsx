'use client';
import { ScrollRevealContainer } from '@/lib/containers/ScrollRevealContainer';
import { Box, Button, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const SNS = () => {
  return (
    <ScrollRevealContainer>
      <HStack my={10} className={'reveal'} mx={150}>
        <Box my={12}>
          <VStack alignItems={'left'}>
            <Text fontSize={'4xl'}>SNS</Text>
            <Stack direction="row" spacing={4}>
              <Button
                leftIcon={<FaDiscord />}
                colorScheme="blue"
                variant="solid"
                as={'a'}
                href={'https://discord.gg/AU7Ud5P9MC'}
              >
                語るんです！
              </Button>
              <Button
                leftIcon={<FaDiscord />}
                colorScheme="blue"
                variant="solid"
                as={'a'}
                href={'https://discord.gg/takkun'}
              >
                たっくん鯖
              </Button>
              <Button
                leftIcon={<FaXTwitter />}
                colorScheme="gray"
                variant="solid"
                as={'a'}
                href={'https://twitter.com/Harukoto_'}
              >
                @Harukoto_
              </Button>
              <Button
                leftIcon={<FaGithub />}
                variant="outline"
                as={'a'}
                href={'https://github.com/RenaOfficial'}
              >
                GitHub
              </Button>
            </Stack>
          </VStack>
        </Box>
      </HStack>
    </ScrollRevealContainer>
  );
};

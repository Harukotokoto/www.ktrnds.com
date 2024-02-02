import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Head = () => {
  return (
    <Box mx={150} mt={'120px'}>
      <Flex>
        <Box p={3} borderBottom={'1px'}>
          <Heading fontSize={'5xl'}>
            先進的な
            <br />
            技術的アイデアを。
          </Heading>
        </Box>
      </Flex>

      <Box
        style={{
          backgroundImage: 'url("background.svg")',
          backgroundRepeat: 'no-repeat',
        }}
        height={500}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flex width={800} alignItems="center" justifyContent="flex-end">
          <VStack>
            <Heading fontSize={'5xl'}>Harukoto_</Heading>
            <Box p={3} borderBottom={'1px'}>
              <Flex justifyContent="flex-end">
                <Image
                  src="ts_logo.svg"
                  alt="TypeScriptのロゴ"
                  width={20}
                  height={20}
                />
                <Text textAlign="right" fontSize="xl" ml={2}>
                  TypeScript / JavaScript Fullstack Developer
                </Text>
              </Flex>
            </Box>
            <Stack direction="row" spacing={4}>
              <Button
                leftIcon={<FaDiscord />}
                colorScheme="blue"
                variant="solid"
                as={'a'}
                href={'https://discord.gg/AU7Ud5P9MC'}
              >
                Discordサーバー
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
            </Stack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

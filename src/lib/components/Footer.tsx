import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { CgTwitter } from 'react-icons/cg';
import { BsTwitterX } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box bgColor={'gray.200'} p={3} px={10}>
      <Flex
        style={{
          backgroundImage: 'url("sns.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}
      >
        <Box>
          <Text fontSize={'5xl'}>Harukoto_</Text>
          <Button
            leftIcon={<FaXTwitter />}
            colorScheme={'black'}
            variant="outline"
            as={'a'}
            href={'https://twitter.com/Harukoto_'}
            mr={3}
          >
            @Harukoto_
          </Button>
          <Button
            leftIcon={<FaGithub />}
            colorScheme={'black'}
            variant="outline"
            as={'a'}
            href={'https://github.com/RenaOfficial'}
            ml={3}
          >
            GitHub
          </Button>
          <Text my={2}>&copy;2024 Harukoto_ Developer Studio</Text>
        </Box>
      </Flex>
      <Box borderBottom={'1px'} />
      <Box mx={4} my={2}>
        <Text fontSize={'3xl'}>先進的な技術とアイデアを。</Text>
        <a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
      </Box>
    </Box>
  );
};

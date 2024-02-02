import { Box, HStack, Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box
      style={{
        position: 'fixed',
        zIndex: 999,
        top: 0,
        left: 0,
      }}
      width={'100vw'}
      boxShadow={'0px 1px 5px 0px rgba(0, 0, 0, 0.1)'}
      bgColor={'white'}
    >
      <HStack
        borderBottom={'1px'}
        borderColor={'gray.300'}
        height={'80px'}
        p={5}
      >
        <Text fontSize={'4xl'}>Harukoto_</Text>
      </HStack>
    </Box>
  );
};

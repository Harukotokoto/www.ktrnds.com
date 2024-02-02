'use client';
import { ScrollRevealContainer } from '@/lib/containers/ScrollRevealContainer';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

export const Profile = () => {
  return (
    <ScrollRevealContainer>
      <HStack
        my={10}
        className={'reveal'}
        mx={150}
        style={{
          backgroundImage: 'url("learning_bro.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}
      >
        <Box my={12}>
          <VStack alignItems={'left'}>
            <Text fontSize={'4xl'}>About me</Text>
            <Text>
              Web開発がメインで、フロントエンド、バックエンドの作成が可能なフルスタックエンジニアです
            </Text>
            <Text>主にReact(Next.js)を使用して開発しています。</Text>
            <Text>
              DiscordのBot作成からホームページ作成、API作成まで、幅広い開発を得意としています。
            </Text>
            <Text>
              Node.jsを使用していて、CSSが嫌いです。UIフレームワーク最高。
            </Text>
            <Text>ゲームもよくやってます。</Text>
            <Text>FPSゲーム、RPG、好きです。</Text>
          </VStack>
        </Box>
      </HStack>
    </ScrollRevealContainer>
  );
};

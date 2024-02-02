'use client';
import { ScrollRevealContainer } from '@/lib/containers/ScrollRevealContainer';
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

export const Languages = () => {
  return (
    <HStack my={10} mx={150}>
      <Box my={12}>
        <VStack alignItems={'left'}>
          <ScrollRevealContainer>
            <Text fontSize={'4xl'}>Languages</Text>
            <Text>以下の言語の知識を持っています！</Text>
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <Flex>
              <Card maxW="md" m={3}>
                <CardHeader>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="JavaScript" src="js_logo.png" />
                    <Box>
                      <Heading size="sm">JavaScript</Heading>
                      <Text>マルチパラダイム言語</Text>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    一番得意とするフルスタックの言語です。
                    Node.jsを使用し、Webサイトの作成、Discord
                    Botの作成、APIの作成を行っています
                  </Text>
                </CardBody>
              </Card>
              <Card maxW="md" m={3}>
                <CardHeader>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="TypeScript" src="ts_logo.svg" />
                    <Box>
                      <Heading size="sm">TypeScript</Heading>
                      <Text>JavaScript拡張</Text>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    JavaScriptを拡張したプログラミング言語です。
                    型を指定することで一般的なエラーを回避し、開発をスムーズに進めることが可能です。
                    Web制作、Discord Botの作成で使用しています
                  </Text>
                </CardBody>
              </Card>
              <Card maxW="md" m={3}>
                <CardHeader>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="PHP" src="php_logo.svg" />
                    <Box>
                      <Heading size="sm">PHP</Heading>
                      <Text>汎用スクリプト言語</Text>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    Web制作で主に使用している言語です。
                    Reactよりも開発効率が良く、小規模開発で使用しています(一般的な使用用途に合ってるかは分からない)
                  </Text>
                </CardBody>
              </Card>
            </Flex>
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <Flex>
              <Card maxW="md" m={3}>
                <CardHeader>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Ruby" src="ruby_logo.svg" />
                    <Box>
                      <Heading size="sm">Ruby</Heading>
                      <Text>関数型プログラミング言語</Text>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    あまり使用はしていませんが、読み書きは可能です。
                    ちょっとしたツールなどの開発に便利です。
                  </Text>
                </CardBody>
              </Card>
              <Card maxW="md" m={3}>
                <CardHeader>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Python" src="python_logo.png" />
                    <Box>
                      <Heading size="sm">Python</Heading>
                      <Text>関数型プログラミング言語</Text>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    画像処理などが高速で、APIの作成に使用しています。
                    応用的なことはわからないです。知ろうとも思わないです。
                  </Text>
                </CardBody>
              </Card>
              <Card maxW="md" m={3}>
                <CardHeader>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="C#" src="cs_logo.png" />
                    <Box>
                      <Heading size="sm">C#</Heading>
                      <Text>構造化プログラミング言語</Text>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    ゲームの作成、GUIツールの作成などで使用しています。
                    Microsoft Visual
                    Studioで簡単にUI付きアプリを作ることができます。
                  </Text>
                </CardBody>
              </Card>
            </Flex>
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <Flex>
              <Card maxW="md" m={3}>
                <CardHeader>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Java" src="java_logo.svg" />
                    <Box>
                      <Heading size="sm">Java</Heading>
                      <Text>オブジェクト指向言語</Text>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    コンパイラ言語です。
                    マイクラのMod、プラグイン開発で使用しています。
                    応用的なことも理解しようと勉強中です。
                    JavaScriptとは別物です。
                  </Text>
                </CardBody>
              </Card>
            </Flex>
          </ScrollRevealContainer>
        </VStack>
      </Box>
    </HStack>
  );
};

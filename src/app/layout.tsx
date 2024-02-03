import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Harukoto — 先進的な技術とアイデアを。</title>
        <meta name="title" content="Harukoto — 先進的な技術とアイデアを。" />
        <meta
          name="description"
          content="Web開発がメインで、フロントエンド、バックエンドの作成が可能なフルスタックエンジニアです。主にReact(Next.js)を使用して開発しています。DiscordのBot作成からホームページ作成、API作成まで、幅広い開発を得意としています。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ktrnds.com" />
        <meta
          property="og:title"
          content="Harukoto — 先進的な技術とアイデアを。"
        />
        <meta
          property="og:description"
          content="Web開発がメインで、フロントエンド、バックエンドの作成が可能なフルスタックエンジニアです。主にReact(Next.js)を使用して開発しています。DiscordのBot作成からホームページ作成、API作成まで、幅広い開発を得意としています。"
        />
        <meta property="og:image" content="https://www.ktrnds.com/background.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ktrnds.com" />
        <meta
          property="twitter:title"
          content="Harukoto — 先進的な技術的アイデアを。"
        />
        <meta
          property="twitter:description"
          content="Web開発がメインで、フロントエンド、バックエンドの作成が可能なフルスタックエンジニアです。主にReact(Next.js)を使用して開発しています。DiscordのBot作成からホームページ作成、API作成まで、幅広い開発を得意としています。"
        />
        <meta property="twitter:image" content="https://www.ktrnds.com/background.png" />
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}

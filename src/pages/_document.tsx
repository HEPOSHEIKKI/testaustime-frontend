import { DocumentProps, Head, Html, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.locale ?? "en";

  return <Html lang={currentLocale}>
    <Head>
      <link rel="icon" href="/time.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
}

export const getInitialProps = createGetInitialProps();

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='preload' href='/public/Fonts/IBMPlexSans-Regular.ttf' crossOrigin='anonymous' as="font" />
        <link rel='preload' href='/public/Fonts/IBMPlexSans-Bold.ttf' crossOrigin='anonymous' as="font" />
        <link rel='preload' href='/public/Fonts/IBMPlexSans-SemiBold.ttf' crossOrigin='anonymous' as="font" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

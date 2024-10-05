// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Imran Mohiuddin" />
        <meta property="og:description" content="Full Stack Developer" />
        <meta property="og:image" content="/twitter-image.jpg" />
        <meta property="og:url" content="https://www.imranmohiuddin.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imran Mohiuddin" />
        <meta name="twitter:description" content="Full Stack Developer" />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <meta property="og:image:alt" content="Imran Mohiuddin" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
      <body className={`font-sf-pro bg-slate-900 subpixel-antialiased text-white`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

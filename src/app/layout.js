import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Imran Mohiuddin",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imran Mohiuddin" />
        <meta name="twitter:description" content="Full Stack Developer" />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <meta property="og:title" content="Imran Mohiuddin" />
        <meta property="og:description" content="Full Stack Developer" />
        <meta property="og:image" content="/twitter-image.jpg" />
        <meta property="og:url" content="https://www.imranmohiuddin.com" />
      </head>
      <body className={`font-sf-pro bg-slate-900 subpixel-antialiased text-white`}>
        {children}
      </body>
    </html>
  );
}

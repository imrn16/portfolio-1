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
			<Head>
				<meta
					property="og:title"
					content="Imran Mohiuddin"
				/>
				<meta
					property="og:description"
					content="Full Stack Developer"
				/>
				<meta
					property="og:image"
					content="/twitter-image.png"
				/>
				<meta
					property="og:url"
					content="https://www.imranmohiuddin.com"
				/>
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="Imran Mohiuddin"
				/>
				<meta
					name="twitter:description"
					content="Full Stack Developer"
				/>
				<meta
					name="twitter:image"
					content="/twitter-image.png"
				/>
				<meta
					property="og:image:alt"
					content="Imran Mohiuddin"
				/>
				<meta
					property="og:image:width"
					content="1000"
				/>
				<meta
					property="og:image:height"
					content="600"
				/>
				<meta
					property="og:image:type"
					content="image/png"
				/>
			</Head>
			<body
				className={`font-sf-pro bg-slate-900 subpixel-antialiased text-white`}
				// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

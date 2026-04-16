import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Lesedi Shaun Modipane Portfolio',
	description:
		'Welcome to my digital repository. A curated database of my professional journey, blogs, and projects timeline. This space serves as a transparent look into my thinking process and current projects, designed for those who want to explore my work and follow my progress in real-time.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="h-screen w-screen">{children}</body>
		</html>
	);
}

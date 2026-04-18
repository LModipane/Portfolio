import Image from 'next/image';
import { Titles } from '@/components';
import gitHubLogo from '../public/github.svg';
import linkinlogo from '../public/linkedin.svg';
import { Download, Mail, Sparkles } from 'lucide-react';
import { client as SanityClient } from '@/sanity/lib/client';

type Hero = {
	myName: string;
	myRoles: string[];
};

export const revalidate = 5;

export default async function Home() {
	const heroQuery = `*[_type == "heroSection"][0]{myName,myRoles}`;
	const { myName, myRoles } = await SanityClient.fetch<Hero>(heroQuery);

	return (
		<main className="h-full w-full text-black overflow-y-scroll">
			{/* Hero section */}
			<header className="min-h-full w-full flex items-center justify-center bg-gray-100">
				<div className="flex flex-col items-center bg-white/80 border-2 border-gray-300/40 rounded-lg py-8 shadow-lg max-w-[98%]">
					{/* Availability Tag */}
					<div className="rounded-full p-0.5 bg-linear-to-r from-blue-500 to-purple-600 mb-2 animate-gradient lowercase animate-pulse duration-300">
						<div className="bg-gray-100 rounded-full p-2">
							<div className="flex items-center text-md font-extralight border-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
								<Sparkles className="mr-3 text-blue-500" size={18} />
								I&apos;m Available, just one click away
							</div>
						</div>
					</div>

					{/* Call to Action */}
					<div className=" flex flex-col justify-center mx-auto px-4 py-8 w-full">
						<h1 className="text-5xl font-semibold item-end text-slate-900">
							{myName} <Titles roles={ myRoles} />
						</h1>
						<h2 className="text-3xl font-extralight mt-6 mx-auto text-gray-600/80 text-center max-w-[80%]">
							Looking to contribute Software, Cloud, & Data expertise to your next project,
							let&apos;s schedule a{' '}
							<span className="bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text underline underline-offset-4 animate-gradient">
								conversation and START BUILDING!!!
							</span>
						</h2>
					</div>

					{/* Call to Action Buttons */}
					<div className="flex justify-center mt-2 items-center">
						<button className="flex px-6 py-3 bg-slate-900 text-white rounded-3xl hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-600 hover:scale-110 transition-colors duration-100 cursor-pointer">
							Let&apos;s Connect <Mail className="ml-2" size={20} />
						</button>
						<div className="ml-8 flex group justify-center items-center rounded-3xl bg-slate-800 hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-600 p-0.5 cursor-pointer transition-all duration-150 hover:scale-110">
							<div className="bg-white rounded-[calc(1.5rem-2px)] px-6 py-3">
								<button className="flex items-center text-slate-900 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text  transition-all duration-100 cursor-pointer">
									<span className="group-hover:text-transparent">Download Resume</span>
									<Download className="ml-2 group-hover:text-purple-600" size={20} />
								</button>
							</div>
						</div>
					</div>

					{/* Social Links */}
					<div className="flex justify-center mt-8 space-x-4 text-slate-800">
						<a
							href="https://linkedin.com/in/shaunlesedi"
							target="_blank"
							rel="noopener noreferrer"
							className=" hover:text-blue-500 transition-colors duration-300 flex flex-col items-center">
							<Image src={linkinlogo} alt="Logo" width={35} height={35} /> LinkedIn
						</a>
						<a
							href="https://github.com/shaunlesedi"
							target="_blank"
							rel="noopener noreferrer"
							className=" hover:text-gray-500 transition-colors duration-300 flex flex-col items-center">
							<Image src={gitHubLogo} alt="Logo" width={35} height={35} /> GitHub
						</a>
					</div>
				</div>
			</header>
			{/* About me Section */}
			<section className="min-h-full w-full flex justify-center bg-white">
				<div className="flex flex-col items-center p-8 shadow-lg mt-10 mb-5 w-full max-w-[90%]">
					<h2 className="text-3xl font-semibold mb-4">About Me</h2>
					<hr className="border-2 border-blue-500 w-full " />
					<div className="mt-6">
						<div className="text-2xl font-light text-gray-700/90 mx-auto text-center max-w-[88%]">
							<p>
								I am Lesedi Shaun Modipane, a Bachelor of Science Information System graduate, based
								in Tshwane Pretoria South Africa. I specialise in software engineering with a strong
								focus on building practical, data-drive applications that solve real-world problems.
								A key part of my motivation is my passion for developing software that improves
								township life and empowers local businesses by making digital tools more accessible,
								useful, and impactful in everyday community settings.
								<br className="min-h-10" />
								My work spans web development, AI systems, and cloud-based architectures, with a
								growing interest in applying machine learning to prediction systems and decision
								support tools. I value clarity in design, efficiency in execution, and continuous
								learning, especially in fast-evolving technical fields like AI and distributed
								systems. I enjoy translating complex technical ideas into usable products, with a
								strong emphasis on reliability, scalability, and user experience. My core strengths
								lie in JavaScript/TypeScript development, modern web frameworks, and building
								systems that combine data and intelligence to generate meaningful outcomes.
							</p>
							<br />
							<p className="text-start">
								Want to understand how I think and build? Take a look at my{' '}
								<span className="text-purple-700 cursor-pointer underline decoration-dotted hover:text-blue-500">
									<a href="#Projects">Projects</a>
								</span>
								,{' '}
								<span className="text-purple-700 cursor-pointer underline decoration-dotted hover:text-blue-500">
									<a href="#Blogs">Blog</a>
								</span>
								, or{' '}
								<span className="text-purple-700 cursor-pointer underline decoration-dotted hover:text-blue-500">
									<a href="#Career">Career Journey</a>
								</span>{' '}
								where I break down my work, ideas, and carrer in more detail.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="Projects" className="h-full w-full flex justify-center bg-white">
				Projects
			</section>
			<section id="Blogs" className="h-full w-full flex justify-center bg-white">
				Blog
			</section>
			<section id="Career" className="h-full w-full flex justify-center bg-white">
				Career Journey
			</section>
			<footer
				id="footer"
				className="h-full w-full flex flex-col items-center justify-center  p-8 bg-black text-white">
				<h3>Let&apos;s Connect and build Something Great Together</h3>
				{/* Display Email and Phone Number */}
				<p className="text-gray-700/90 text-center">
					&copy; {new Date().getFullYear()} Shaun Lesedi Modipane. All rights reserved.
				</p>
			</footer>
		</main>
	);
}

import { Download, Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';
import linkinlogo from '../public/linkedin.svg';
import gitHubLogo from '../public/github.svg';
import { Titles } from '@/components';
import  EmailLogo  from "../public/email.gif"

export default function Home() {
	// Note: Add Typing animation to display multiple of titles/Adjectives that describe me as a software developer, cloud Engineerand Data scientist.
	return (
		<main className="h-full w-full text-black overflow-y-scroll">
			{/* Hero section */}
			<header className="h-full w-full flex items-center justify-center bg-gray-100">
				<div className="flex flex-col items-center bg-white/80 border-2 border-gray-300/40 rounded-lg px-2 py-8 shadow-lg min-w-[93%] max-w-[95%]">
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
					<div className=" flex flex-col justify-center mx-auto px-2 py-8 w-full">
						<h1 className="text-5xl font-semibold item-end text-slate-900">
							Shaun Lesedi Modipane <Titles />
						</h1>
						<h2 className="text-3xl font-extralight mt-4 mx-auto text-gray-600/80 text-center max-w-[84%]">
							Ready to contribute software, cloud, and data expertise to your next project,
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
			<section className="h-full w-full flex items-center justify-center bg-white">
				<div className="flex flex-col items-center border-2 border-gray-300/40 rounded-lg p-8 shadow-lg mt-10">
					<h2 className="text-3xl font-semibold mb-4">About Me</h2>
					<p className="text-lg font-light text-gray-700/90 text-center max-w-225">
						I am a passionate software developer with a strong background in cloud engineering and
						data science. With a keen eye for detail and a commitment to excellence, I strive to
						create innovative solutions that drive business success. My expertise spans across
						various programming languages and technologies, allowing me to adapt and thrive in
						dynamic environments. I am dedicated to continuous learning and growth, always seeking
						new challenges to expand my skill set and contribute to impactful projects.
					</p>
				</div>
			</section>
			<footer className="h-full w-full flex flex-col items-center justify-center  p-8 bg-black text-white">
				<h3>Let&apos;s Connect and build Something Great Together</h3>
				{/* Display Email and Phone Number */}
				<p className="text-gray-700/90 text-center">
					&copy; {new Date().getFullYear()} Shaun Lesedi Modipane. All rights reserved.
				</p>
			</footer>
		</main>
	);
}

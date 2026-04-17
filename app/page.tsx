import { Download, Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';
import linkinlogo from '../public/linkedin.svg';
import gitHubLogo from '../public/github.svg';
import { Titles } from '@/components';

export default function Home() {
	// Note: Add Typing animation to display multiple of titles/Adjectives that describe me as a software developer, cloud Engineerand Data scientist.
	return (
		<main className="h-full w-full bg-gray-100 text-black overflow-y-scroll">
			{/* Hero section */}
			<header className="h-full w-full flex items-center justify-center bg-white">
				<div className="flex flex-col items-center border-2 border-gray-300/40 rounded-lg px-2 py-8 shadow-lg min-w-[93%] max-w-[95%]">
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
						<h1 className="text-5xl font-semibold ">
							Shaun Lesedi Modipane <Titles />
						</h1>
						<h2 className="text-3xl font-light mt-4 text-gray-700/80 text-center ">
							Ready to bring technical talent to your next big project. Let&apos;s connect to
							discuss how we can build something great together.
						</h2>
					</div>

					{/* Call to Action Buttons */}
					<div className="flex justify-center mt-2 items-center">
						<button className="flex px-6 py-3 bg-black text-white rounded-3xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
							Let&apos;s Connect <Mail className="ml-2" size={20} />
						</button>
						<button className="flex ml-4 px-6 py-3 bg-white text-black border-2 border-black rounded-3xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
							Download Resume <Download className="ml-2" size={20} />
						</button>
					</div>

					{/* Social Links */}
					<div className="flex justify-center mt-8 space-x-4">
						<a
							href="https://linkedin.com/in/shaunlesedi"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black hover:text-blue-500 transition-colors duration-300 flex flex-col items-center">
							<Image src={linkinlogo} alt="Logo" width={35} height={35} /> LinkedIn
						</a>
						<a
							href="https://github.com/shaunlesedi"
							target="_blank"
							rel="noopener noreferrer"
							className="text-black hover:text-gray-500 transition-colors duration-300 flex flex-col items-center">
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

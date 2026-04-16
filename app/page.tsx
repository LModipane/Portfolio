import { Download, Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';
import linkinlogo from '../public/linkedin.svg';
import gitHubLogo from '../public/github.svg';

export default function Home() {
	return (
		<main className="h-full w-full bg-gray-100 text-black overflow-y-scroll">
			{/* Hero section */}
			<header className="h-full w-full flex items-center justify-center">
				<div className="flex flex-col items-center border-2 border-gray-300/40 rounded-lg p-8 shadow-lg">
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
					<div className=" flex flex-col justify-center items-center p-8">
						<h1 className="text-4xl font-semibold">
							Shaun Lesedi Modipane Execellent Software developer
						</h1>
						<h2 className="text-2xl font-light mt-4 text-gray-700/90 text-center max-w-225 capitalize">
							Ready to bring technical excellence to your next big project. Let&apos;s connect to
							discuss how we can build something great together.
						</h2>
					</div>

					{/* Call to Action Buttons */}
					<div className="flex justify-center mt-2 items-center">
						<button className="flex px-6 py-3 bg-black text-white rounded-3xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
							Let&apos;s Connect <Mail className="ml-2" size={20} />
						</button>
						<button className="flex ml-4 px-6 py-3 bg-gray-100 text-black border-2 border-black rounded-3xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
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
		</main>
	);
}

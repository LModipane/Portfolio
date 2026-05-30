import Link from 'next/link';
import Image from 'next/image';
import Titles from '@/components/Titles';
import gitHubLogo from '../public/github.svg';
import linkinlogo from '../public/linkedin.svg';
import { client as SanityClient } from '@/sanity/lib/client';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import {
	Mail,
	Clock,
	MapPin,
	Sparkles,
	Download,
	Newspaper,
	FileCode2,
	FileBraces,
	FolderKanban,
	CalendarFold,
	ExternalLink,
	GraduationCap,
} from 'lucide-react';

type Hero = {
	myName: string;
	myRoles: string[];
};

type Project = {
	_id: string;
	title: string;
	logoUrl: string;
	linkLive: string;
	linkGitHub: string;
	description: string;
	backgroundImageUrl: string;
	tools: { _id: string; title: string }[];
};

type Skill = {
	_id: string;
	title: string;
	iconUrl: string;
	description: string;
};

type Blog = {
	_id: string;
	headline: string;
	publishedAt: string;
	description: string;
	imageCardUrl: string;
};

type LocationModel = 'in-office' | 'hybrid' | 'remote';

type Career = {
	_id: string;
	role: string;
	endDate: string;
	startDate: string;
	description: string;
	locationType: LocationModel;
	tools: { _id: string; title: string }[];
	organisation: { name: string; logoUrl: string; location: string; link: string };
};

export const dynamic = 'force-dynamic';

export default async function Home() {
	const heroQuery = `*[_type == "heroSection"][0]{myName,myRoles}`;
	const { myName, myRoles } = await SanityClient.fetch<Hero>(heroQuery);

	const projectsQuery = `*[_type == "projects"]{
			title,
			liveLink,
			githubLink,
			description,
			"_id":slug.current,
			"logoUrl": logo.asset->url,
			"backgroundImageUrl": backgroundImage.asset->url,
			"tools": technologies[]->{"_id":slug.current, title}
		}`;
	const projects = await SanityClient.fetch<Project[]>(projectsQuery);

	const skillsQuery = `*[_type == "skills"]{
		title,
		description,
		"_id":slug.current,
		"iconUrl": icon.asset->url,
	}`;
	const skills = await SanityClient.fetch<Skill[]>(skillsQuery);

	const blogQuery = `*[_type == "blogs"]{
		headline,
		description,
		publishedAt,
		"_id": slug.current,
		"imageCardUrl": image.asset -> url,
	}`;
	const blogs = await SanityClient.fetch<Blog[]>(blogQuery);

	const careerQuery = `*[_type == "career"]{
		"_id": slug.current,
		"tools": technologies[]->{"_id":slug.current, title},
		role, locationType, startDate, endDate, description,
		"organisation": {"name": organisation, "logoUrl": organisationLogo.asset -> url, "location":officeLocation, "link":organisationLink}
	}`;
	const career = await SanityClient.fetch<Career[]>(careerQuery);

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
							{myName} <Titles roles={myRoles} />
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
			{/* Projects Section */}
			<section id="Projects" className="h-fit min-h-full w-full flex justify-center bg-gray-100">
				<div className="flex flex-col p-8 shadow-lg mt-10 mb-5 h-fit w-full max-w-[90%] bg-white">
					<h2 className="flex gap-x-2 text-3xl font-semibold mb-4 flex-end ">
						<FolderKanban size={35} />
						My Projects
					</h2>
					<hr className="h-2 border-0 bg-linear-to-r from-blue-500 to-purple-500" />
					<div className="mt-6">
						{projects.map(obj => (
							<ProjectCard key={obj._id} {...obj} />
						))}
					</div>
				</div>
			</section>
			{/* Skills Section */}
			<section id="skills" className="h-fit min-h-full w-full flex justify-center bg-gray-100">
				<div className="flex flex-col p-8 shadow-lg mt-10 mb-5 min-h-full w-full max-w-[90%] bg-white">
					<h2 className="flex gap-x-2 text-3xl font-semibold mb-4 flex-end ">
						<FileCode2 size={35} />
						My Skills
					</h2>
					<hr className="h-2 border-0 bg-linear-to-r from-blue-500 to-purple-500" />
					<div className="mt-6 flex flex-wrap gap-2">
						{skills.map(obj => (
							<SkillCard key={obj._id} {...obj} />
						))}
					</div>
				</div>
			</section>
			<section id="Blogs" className="h-fit min-h-full w-full flex justify-center bg-white">
				<div className="flex flex-col p-8 shadow-lg mt-10 mb-5 h-full w-full max-w-[90%] bg-white">
					<h2 className="flex gap-x-2 text-3xl font-semibold mb-4 flex-end ">
						<Newspaper size={35} />
						My Blog
					</h2>
					<hr className="h-2 border-0 bg-linear-to-r from-blue-500 to-purple-500" />
					{/* <p className="text-md font-light text-gray-700/90 text-start max-w-[88%]">
						I write about my learning journey, projects, and ideas in software development, cloud
						computing, and AI on my blog. I share insights, tutorials, and reflections to help
						others learn and grow in their tech careers. Check back often for new posts where I
						break down complex topics into practical guides and share what I&apos;m learning along
						the way.
					</p> */}
					<div className="mt-6">
						{blogs.map(obj => (
							<BlogCard key={obj._id} {...obj} />
						))}
					</div>
				</div>
			</section>
			<section id="Career" className="h-fit min-h-full w-full flex justify-center bg-gray-100">
				<div className="flex flex-col p-8 shadow-lg mt-10 mb-5 h-full w-full max-w-[90%] bg-white">
					<h2 className="flex gap-x-2 text-3xl font-semibold mb-4 flex-end ">
						<Newspaper size={35} />
						Career Journey
					</h2>
					<hr className="h-2 border-0 bg-linear-to-r from-blue-500 to-purple-500" />
					<div className="mt-6">
						{career.map((obj, index) => (
							<CareerCard key={obj._id} {...obj} index={index} />
						))}
					</div>
				</div>
			</section>
			<footer
				id="footer"
				className="h-full w-full flex flex-col items-center justify-center p-8 bg-black text-white">
				<h3>Let&apos;s Connect and build Something Great Together</h3>
				{/* Display Email and Phone Number */}
				<p className="text-gray-700/90 text-center">
					&copy; {new Date().getFullYear()} Shaun Lesedi Modipane. All rights reserved.
				</p>
			</footer>
		</main>
	);
}

const ProjectCard = ({
	_id,
	title,
	tools,
	logoUrl,
	linkLive,
	linkGitHub,
	description,
	backgroundImageUrl,
}: Project) => (
	<div className="bg-gray-200 h-125 w-100 p-1 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 mb-2 animate-gradient">
		<Link href={`/project/${_id}`}>
			<div className="bg-white h-full w-full rounded-lg flex flex-col">
				<div className="relative h-40 w-full flex items-center justify-start">
					<div className="relative h-40 w-full">
						<Image
							src={backgroundImageUrl}
							alt={`${title} background`}
							fill
							className="rounded-t-lg object-cover"
						/>
					</div>
					<div className="absolute -bottom-10 left-4 h-28 w-28 rounded-full overflow-hidden">
						<Image src={logoUrl} alt={`${title} logo`} fill className="object-cover" />
					</div>
				</div>
				<h3 className="ml-30 mt-3 text-3xl font-bold text-gray-800 w-full truncate">{title}</h3>
				<div className="flex flex-col gap-y-2 mt-2 px-4">
					<p className="mt-2 w-full text-gray-600 line-clamp-3 ">{description}</p>
					{tools.map(obj => (
						<div key={obj._id} className="bg-gray-200 w-fit text-gray-800 p-2 rounded-lg">
							{obj.title}
						</div>
					))}
				</div>
				<div className="mt-auto flex gap-x-2 justify-end p-3">
					<a
						href={linkGitHub}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-x-1">
						<FileBraces size={24} />
						code
					</a>
					<a
						href={linkLive}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-x-1">
						<ExternalLink size={24} /> live
					</a>
				</div>
			</div>
		</Link>
	</div>
);

const SkillCard = ({ title, description, iconUrl }: Skill) => (
	<HoverCard>
		<HoverCardTrigger asChild>
			<div className="border-2 border-gray-500 rounded-2xl p-4 h-50 w-50 flex flex-col items-center justify-center">
				<div className="relative h-16 w-16">
					<Image src={iconUrl} alt={`${title} icon`} fill className="object-cover object-center" />
				</div>
				<h4 className="text-xl font-bold text-gray-800 mt-2">{title}</h4>
			</div>
		</HoverCardTrigger>
		<HoverCardContent
			align="start"
			side="right"
			sideOffset={-50}
			alignOffset={-20}
			className="w-64 bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg">
			<p>{description}</p>
		</HoverCardContent>
	</HoverCard>
);

const BlogCard = ({ _id, headline, imageCardUrl, description, publishedAt }: Blog) => (
	<div className="w-[50%] h-50">
		<Link href={`/blog/${_id}`}>
			<div className="flex gap-2 h-full w-full text-black">
				<div className="relative min-h-43.75 min-w-43.75">
					<Image
						src={imageCardUrl}
						alt={`blog ${_id} Image Card`}
						fill
						className="object-center object-cover"
					/>
				</div>
				<div className="flex flex-col gap-2 p-2">
					<span className="flex items-center gap-3 text-sm">
						<Clock size={15} /> {blogDate(publishedAt)}
					</span>
					<h3 className="text-lg font-bold capitalize">{headline}</h3>
					<p className="text-sm line-clamp-3">{description}</p>
					<div className="flex justify-end gap-4">
						<span>Read time: 6 min</span>
						<span>✨: 6</span>
					</div>
				</div>
			</div>
		</Link>
	</div>
);

function blogDate(dateString: string): string {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: 'short', // 'Dec'
		hour: '2-digit',
		year: 'numeric',
		minute: '2-digit',
		hourCycle: 'h12', // Ensure 24-hour format
		timeZone: 'Africa/Johannesburg',
	};
	return new Intl.DateTimeFormat('en-GB', options).format(date);
}

const CareerCard = ({
	role,
	tools,
	endDate,
	startDate,
	description,
	locationType,
	organisation: { name, location, link, logoUrl },
}: Career & { index: number }) => (
	<div className="w-100 h-112.5 flex flex-col p-4 m-1 border-2 border-slate-600 rounded-2xl shadow-xl">
		<div className="flex items-center gap-2">
			<div className="flex flex-col">
				<h5 className="font-bold text-lg">{role}</h5>
				<Link href={link}>
					<div className="flex items-center gap-2">
						<div className="relative w-7 h-7  overflow-hidden">
							<Image
								src={logoUrl}
								alt={`${name} - logo`}
								fill
								className="object-cover object-center rounded-full"
							/>
						</div>
						<span>{name}</span>
					</div>
				</Link>
			</div>
			<span className="border-2 border-gray-700 p-2 rounded-full ml-auto">
				<GraduationCap size={30} />
			</span>
		</div>
		<div className="flex gap-2 text-xs items-center mt-3">
			<CalendarFold size={15} />
			<span>{careerData(startDate)}</span>-<span>{careerData(endDate)}</span>
			<MapPin size={15} />
			<span>{locationType === 'in-office' ? location : locationType}</span>
		</div>
		<div className="mt-4">
			<p>{description}</p>
		</div>
		<div className="mt-4">
			{tools.map(obj => (
				<div key={obj._id} className="bg-gray-200 w-fit text-gray-800 p-2 rounded-lg">
					{obj.title}
				</div>
			))}
		</div>
	</div>
);

export function careerData(dateString: string): string {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		month: 'short', // 'Dec'
		year: 'numeric',
		day: '2-digit',
		timeZone: 'Africa/Johannesburg',
	};
	return new Intl.DateTimeFormat('en-GB', options).format(date);
}

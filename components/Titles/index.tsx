'use client';
import { Typewriter } from 'react-simple-typewriter';

const Titles = () => {
	return (
		<span className="mt-2 rounded-lg py-2 px-3 shadow-lg bg-white font-light text-center">
			<span className="bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
				<Typewriter
					words={[
						'Excellent Software Developer',
						'Experienced Cloud Engineer',
						'Exceptional Data Scientist',
					]}
					loop={0}
					cursor={false} // disable built-in cursor
					typeSpeed={70}
					deleteSpeed={20}
					delaySpeed={1000}
				/>
			</span>
			<span className="ml-1 text-purple-500 animate-[blink-fast_0.6s_steps(1)_infinite]">✍🏿</span>
		</span>
	);
};

export default Titles;

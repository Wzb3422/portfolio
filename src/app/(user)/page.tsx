import { AnimatePage } from '@components/atoms/AnimatePage';
import { HeroSection } from '@components/molecules/HeroSection/HeroSection';

export const metadata = {
	title: 'Software Engineer and Consultant Zeb Wu',
	description:
		'A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting.',
	keywords: [
		'Software Engineer',
		'Zeb Wu',
		'Software Consulting',
		'Front-End',
		'Full-Stack',
		'React',
		'TypeScript',
		'JavaScript',
		'GraphQL',
		'CSS',
		'Tailwind',
	],
};

const HomePage = async () => {
	return (
		<AnimatePage>
			<HeroSection />
		</AnimatePage>
	);
};

export default HomePage;

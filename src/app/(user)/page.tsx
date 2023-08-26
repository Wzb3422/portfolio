import { AnimatePage } from '@components/atoms/AnimatePage';
import { HeroSection } from '@components/molecules/HeroSection/HeroSection';

export const metadata = {
	title: 'Frontend Engineer Zeb Wu',
	description:
		'A Front-End Software Engineer with a focus on JavaScript and React. I have worked at top global companies such as WeChat Tiktok Alibaba',
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

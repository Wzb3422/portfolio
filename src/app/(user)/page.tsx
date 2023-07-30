import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { Service } from '@components/atoms/Service/Service';
import { HeroSection } from '@components/molecules/HeroSection/HeroSection';

import { sanityClient } from '@lib/sanity';

import { servicesQuery } from '@queries/services';
import { jobsQuery } from '@queries/jobs';

import { WorkExperience } from '@components/organisms/WorkExperience';

import LogoCypress from '@root/public/assets/tools/cypress.svg';
import LogoFigma from '@root/public/assets/tools/figma.svg';
import LogoGraphql from '@root/public/assets/tools/graphql.svg';
import LogoHygraph from '@root/public/assets/tools/hygraph.svg';
import LogoNext from '@root/public/assets/tools/nextjs.svg';
import LogoSanity from '@root/public/assets/tools/sanity.svg';
import LogoStorybook from '@root/public/assets/tools/storybook.svg';
import LogoSvelte from '@root/public/assets/tools/svelte.svg';
import LogoVercel from '@root/public/assets/tools/vercel.svg';
import type { Service as ServiceType, Job } from '@types';

const getData = async () => {
	const services: ServiceType[] = await sanityClient.fetch(servicesQuery);
	const jobs: Job[] = await sanityClient.fetch(jobsQuery);
	return { services, jobs };
};

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
	const { services, jobs } = await getData();
	debugger;

	return (
		<AnimatePage>
			<HeroSection />
		</AnimatePage>
	);
};

export default HomePage;

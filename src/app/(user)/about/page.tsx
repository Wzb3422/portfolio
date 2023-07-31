import { AnimatePage } from '@components/atoms/AnimatePage';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';
import { IconDownload } from '@components/atoms/Icons';
import { Education } from '@components/organisms/Education';
import { WorkExperience } from '@components/organisms/WorkExperience';

import { sanityClient } from '@lib/sanity';

import { educationQuery } from '@queries/education';
import { jobsQuery } from '@queries/jobs';

import type { Education as EducationType, Job, Podcast } from '@types';
import Link from 'next/link';

export const metadata = {
	title:
		'About Zeb Wu, a Senior Software Engineer and Consultant in the UK',
	description:
		'As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place.',
};

const getData = async () => {
	const jobs: Job[] = await sanityClient.fetch(jobsQuery);
	const education: EducationType[] = await sanityClient.fetch(educationQuery);

	return {
		education,
		jobs,
	};
};

const AboutPage = async () => {
	const { education, jobs } = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Zeb Wu
				</h1>
				<h2 className="mt-2 text-xl font-bold md:text-2xl">
					Software Engineer
				</h2>
				<p className="mt-8">
					As a highly motivated Fullstack Developer with a strong focus on frontend development, I have 2 years of professional experience and a proven track record of success in top global companies such as Tiktok, WeChat, and Alibaba. My in-depth knowledge of modern web technologies and unwavering passion for staying up-to-date with the latest trends in the field make me a valuable asset to any team. I am confident in my abilities to deliver exceptional results and exceed expectations.
				</p>
				<p className="my-4">
					Programming has been my passion since childhood. At the age of 12, I began learning to code in Java with the goal of creating Minecraft Mods, although my initial attempts were not successful🤣. After getting accepted into a university to study Computer Science, my love for programming only grew stronger. I continued to code and learn, and today, I am a skilled developer with a deep understanding of various programming languages and frameworks as well as experience of developing commercial applications that serve millions of users.
				</p>

				<h2 className="headline mb-4 mt-12 text-4xl">Work Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mb-4 mt-12 text-4xl">Education</h2>
				<p className="mb-6">
					I have a Bachelor's degree in Computer Science, which has given me a solid foundation in software development.
				</p>

				<Education education={education} />

				<section id="cv-download">
					<h2 className="headline mb-4 mt-12 text-4xl">
						Interested in what I have to offer?
					</h2>

					<p>
						I am happy to have a chat about relevant projects to work on. Below
						you find a download link for my latest resume.
					</p>

					<div className="mt-8 flex justify-start gap-6 items-baseline">
						<Button
							href="/zebwu-resume.pdf"
							download={true}
							className="group flex gap-2 whitespace-nowrap"
						>
							<IconDownload />
							Download My Resume
						</Button>
					</div>
				</section>
			</Container>
		</AnimatePage>
	);
};

export default AboutPage;

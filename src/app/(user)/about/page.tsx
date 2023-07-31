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
					As a highly motivated Fullstack Developer with a strong focus on frontend development, I have amassed 2 years of professional experience and a proven track record of success in top global companies such as Tiktok, WeChat, and Alibaba. My in-depth knowledge of modern web technologies and unwavering passion for staying up-to-date with the latest trends in the field make me a valuable asset to any team. I am confident in my abilities to deliver exceptional results and exceed expectations.
				</p>
				<p className="my-4">
					I am &radic;1,024 years old and have been a web developer for as long
					as I can think. The technologies I work with are JavaScript, HTML and
					CSS with a focus on the frameworks React.js, Gatsby, Next.js, Node and
					Express. I use code not only to do my day-to-day job, but also to
					solve everyday problems I come across.
				</p>
				<p>
					When I am not writing code I love to spend time with my wife and
					five-year-old daughter at home in England or travelling around the
					world. We are quite a multi-cultural family with me having grown up in
					Germany 🇩🇪 and my wife being from Mexico 🇲🇽, which is why we raise our
					daughter trilingual. I myself speak five languages (some better than
					others). Furthermore I enjoy cooking fresh food when I come home after
					a long day at the office.
				</p>

				<h2 className="headline mb-4 mt-12 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mb-4 mt-12 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} />

				{/* <section id="cv-download">
					<h2 className="headline mb-4 mt-12 text-4xl">
						Interested in what I have to offer?
					</h2>

					<p>
						I am happy to have a chat about relevant projects to work on. Below
						you find a download link for my up-to-date CV. Are you a recruiter?
						Have a read through my recruiters page, where I explain what I am
						looking for in a job. This page is designed to save both of us time.
					</p>
					<p>
						If you are interested in working with me, please contact me via{' '}
						<Link
							href="/contact"
							className="underlined relative border-b-2 border-grey-300 font-bold hover:border-b-0 dark:border-grey-700"
						>
							the contact form
						</Link>
						. I do not appreciate cold calls and will not answer calls from
						numbers I do not recognise.
					</p>

					<div className="mt-8 flex justify-start gap-6 items-baseline">
						<Button
							href="/cv-2023.pdf"
							download={true}
							className="group flex gap-2 whitespace-nowrap"
						>
							<IconDownload />
							Download my CV
						</Button>

						<Link
							href="/recruiters"
							className="text-sm font-semibold leading-6 text-slate-900 transition-all hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
						>
							Information for recruiters <span aria-hidden="true">→</span>
						</Link>
					</div>
				</section> */}
			</Container>
		</AnimatePage>
	);
};

export default AboutPage;

import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import {
	IllustrationAccessibilityAudit,
	IllustrationCodeAudit,
	IllustrationConsulting,
	IllustrationEcommerce,
	IllustrationWebDevelopment,
} from '@components/atoms/Icons';
import { HeroSection } from '@components/molecules/HeroSection/HeroSection';

import LogoCypress from '@root/public/assets/tools/cypress.svg';
import LogoFigma from '@root/public/assets/tools/figma.svg';
import LogoGraphql from '@root/public/assets/tools/graphql.svg';
import LogoHygraph from '@root/public/assets/tools/hygraph.svg';
import LogoNext from '@root/public/assets/tools/nextjs.svg';
import LogoSanity from '@root/public/assets/tools/sanity.svg';
import LogoStorybook from '@root/public/assets/tools/storybook.svg';
import LogoSvelte from '@root/public/assets/tools/svelte.svg';
import LogoVercel from '@root/public/assets/tools/vercel.svg';

export const metadata = {
	title: 'Software Engineer and Consultant Jacob Herper',
	description:
		'A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting.',
	keywords: [
		'Software Engineer',
		'Jacob Herper',
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

const HomePage = () => {
	return (
		<AnimatePage>
			<HeroSection />
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
						Some of my favourite tools
					</h2>

					<div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
						<LogoNext className="w-32" aria-label="Next.js" />
						<LogoSvelte className="w-12" aria-label="SvelteKit" />
						<LogoHygraph className="w-28 md:w-36" aria-label="Hygraph" />
						<LogoSanity className="w-32 md:w-40" aria-label="Sanity" />
						<LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
						<LogoGraphql className="w-28 md:w-36" aria-label="GraphQL" />
						<LogoVercel className="w-32 md:w-36" aria-label="Vercel" />
						<LogoFigma className="w-8" aria-label="Figma" />
						<LogoCypress className="w-32 md:w-40" aria-label="Cypress" />
					</div>
				</Container>
			</section>
			<section id="services">
				<Container>
					<h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						Services I provide
						<span className="block text-off-black dark:text-off-white font-bold text-xl md:text-2xl mt-2">
							as a software architect with a passion for creating applications
							and websites that people love.
						</span>
					</h2>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Software Consultancy
					</h3>
					<div className="flex lg:gap-24 flex-col lg:flex-row-reverse">
						<IllustrationConsulting
							className="w-full h-fit px-12 lg:px-0"
							title="Software Consultancy"
						/>
						<div>
							<p className="text-xl mt-4 md:text-xl lg:text-2xl">
								I find the right tech stack for your project, scale your team
								and work with you every step of the way.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								I love working with startups and established businesses to find
								the right tech stack, be it a single new feature or a whole
								rebuild of your current product. I can help you find the perfect
								developers for your project and scale up as your business grows.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								When it comes to application development, I&apos;ve seen it all.
								From building highly customised enterprise software stacks on
								the latest open source frameworks to reducing costs and
								improving user experience with cloud-based solutions.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								I offer consulting services for companies and agencies that
								strive to develop scalable and performant web solutions. Deeply
								knowing my customers&apos; needs, I can help them make the right
								decision when it comes to deciding on a software architecture
								and tech stack.
							</p>
						</div>
					</div>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Code Audit
					</h3>
					<div className="flex lg:gap-24 flex-col lg:flex-row">
						<IllustrationCodeAudit
							className="w-full h-fit px-12 lg:px-0"
							title="Code Auditing"
						/>
						<div>
							<p className="text-xl mt-4 md:text-xl lg:text-2xl">
								I make sure your code is accessible, scalable and performs well.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								Code Auditing is the process of auditing software code for
								accessibility, scalability and performance. My expertise
								includes assisting in developing best practices for secure
								coding, finding bugs and defects in a system, recommending best
								practices for scalability and performance.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								Nobody likes software projects to fail. But there are some
								common mistakes that developers make, that can cause software
								projects to underperform or even crash. And these issues
								aren&apos;t always the fault of a developer, but sometimes the
								code itself is just bad or outdated. I&apos;ve been auditing the
								code of projects for compliance and performance for years and
								enjoy working with companies of all sizes to help them scale.
							</p>
						</div>
					</div>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Website & App Development
					</h3>
					<div className="flex lg:gap-24 flex-col lg:flex-row-reverse">
						<IllustrationWebDevelopment
							className="w-full h-fit px-12 lg:px-0"
							title="Website and Application Development"
						/>
						<div>
							<p className="text-xl mt-4 md:text-xl lg:text-2xl">
								I build web applications and websites that are well-designed,
								accessible, and performant.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								I&apos;ve been building websites and apps for over 15 years now,
								working with clients from startups to large enterprise
								businesses. I like to focus on accessibility, performance, and
								clean code.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								As a web and mobile development consultant, I help my clients
								create the best possible digital products for their businesses.
								I don&apos;t just develop websites and apps, I make them
								beautiful, fast and accessible to people with disabilities. My
								goal is to work with you to help you reach your full potential.
							</p>
						</div>
					</div>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Accessibility Audit
					</h3>
					<div className="flex lg:gap-24 flex-col lg:flex-row">
						<IllustrationAccessibilityAudit
							className="w-full h-fit px-12 lg:px-0"
							title="Accessibility Auditing"
						/>
						<div>
							<p className="text-xl mt-4 md:text-xl lg:text-2xl">
								I audit your website or app for accessibility, identify
								problems, and help you fix them.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								Looking for an experienced accessibility auditor? I&apos;ll help
								you identify issues, prioritise them for resolution, provide
								recommendations on how to fix them and keep your site compliant.
								See some examples of my work below.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								I audit existing websites and apps for accessibility, which
								helps determine how they can be improved to meet WCAG best
								practices. My auditing process includes a detailed methodology
								and reporting. An accessibility audit is recommended before
								launching new products or major updates to existing websites and
								apps.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								As an accessibility auditor, I audit existing websites and apps
								for accessibility. I shed light on why things are inaccessible,
								and help change that. What you&apos;ll gain is a better
								understanding of how users with disabilities interact with your
								product, what traits make for effective interfaces for people
								with disabilities and insight in how to design these interfaces
								going forward.
							</p>
						</div>
					</div>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						E-Commerce
					</h3>
					<div className="flex lg:gap-24 flex-col lg:flex-row-reverse">
						<IllustrationEcommerce
							className="w-full h-fit px-12 lg:px-0"
							title="E-Commerce Software Engineering"
						/>
						<div>
							<p className="text-xl mt-4 md:text-xl lg:text-2xl">
								I know how to help you sell more, with less effort.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								E-commerce development is my trade. I have years of experience
								working across different industries in B2B and B2C e-commerce
								development. Whether you&apos;re looking to create an MVP or
								start a new project, I can help you achieve financial goals
								through performant microservice architecture and modern
								JavaScript frontends.
							</p>
							<p className="mt-4 mb-4 text-lg leading-7">
								I can help you design, develop and deploy modern frontend
								applications built with a microservice architecture. With years
								of experience working across different industries in B2B and B2C
								e-commerce development, I can help you achieve financial goals
								through performant frontends built in React, Redux and GraphQL.
							</p>
						</div>
					</div>
				</Container>
			</section>
		</AnimatePage>
	);
};

export default HomePage;
import { TypeWriter } from '@components/atoms/TypeWriter';

import LogoTiktok from '@root/public/assets/companies/tiktok.svg';
import LogoAlibaba from '@root/public/assets/companies/alibaba.svg';
import LogoWechat from '@root/public/assets/companies/wechat.svg';
import LogoYyb from '@root/public/assets/companies/yyb.svg';

import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
	const talkAbout = [
		'React',
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'Redux',
		'Next.js',
		'RESTful APIs',
		'HTML',
		'CSS',
		'Vue',
		'Nest.js',
		'Node.js',
		'AWS',
	];

	return (
		<section id="hero" className="relative isolate overflow-hidden py-14">
			<div className="bg-gradient-from-t absolute inset-x-0 bottom-0 -z-10 h-24 from-off-white dark:from-slate-950 sm:h-32" />
			<div
				className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] dark:shadow-slate-700 sm:-mr-80 lg:-mr-96 lg:shadow-xl"
				aria-hidden="true"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto flex flex-col">
					<h1 className="headline max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
						Hey, I&apos;m Zeb Wu
					</h1>
					<div className="mt-16 max-w-xl lg:mt-4">
						<p className="text-lg leading-8 text-slate-600 dark:text-off-white">
							I am a passionate Software Engineer, specialised in front-end
							development using React and TypeScript. As an advocate for web
							performance and user experience, I create amazing web applications to make the Internet a better place.
							<br />
						</p>
						<p className="flex flex-wrap items-center text-lg mt-4 leading-8 text-slate-600 dark:text-off-white">
							Currently a Software Engineer at WeChat
							<Link href="https://www.wechat.com" target="_blank">
								<Image
									src="/assets/companies/wechat.svg"
									width={32}
									height={32}
									quality={100}
									alt="WeChat Logo"
									className="ml-2"
								/>
							</Link>
						</p>
						<p className="flex flex-wrap items-center text-lg leading-8 text-slate-600 dark:text-off-white">
							Previously worked at
							<Link href="https://www.tiktok.com" target="_blank">
								<Image
									src="/assets/companies/tiktok.svg"
									width={32}
									height={32}
									quality={100}
									alt="TikTok Logo"
									className="mx-1"
								/>
							</Link>
							<Link href="https://www.alibabagroup.com/" target="_blank">
								<Image
									src="/assets/companies/alibaba.svg"
									width={32}
									height={32}
									quality={100}
									alt="Alibaba Logo"
									className="mx-1"
								/>
							</Link>
							<Link href="https://sj.qq.com/" target="_blank">
								<Image
									src="/assets/companies/yyb.svg"
									width={32}
									height={32}
									quality={100}
									alt="Yyb Logo"
									className="mx-1"
								/>
							</Link>
						</p>
						<p className="text-lg leading-8 text-slate-600 dark:text-off-white">
							You can talk to me about <TypeWriter strings={talkAbout} />.
						</p>
						<div className="mt-10 flex items-center">
							<Link
								href="/contact"
								className="rounded-md bg-blue-700 px-3.5 py-2.5 mr-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get in touch
							</Link>
							<Link
								href="/about"
								className="text-sm font-semibold leading-6 text-slate-900 transition-all hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
							>
								Read more <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

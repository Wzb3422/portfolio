import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContactForm } from '@components/molecules/ContactForm';

export const metadata = {
	title: 'Contact Zeb Wu - Software Engineer in the UK',
	description:
		'This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in the UK.',
};

const ContactPage = () => {
	return (
		<AnimatePage>
			<Container>
				<h1 className="mt-8 font-bold text-4xl">
					Love to hear from you,
					<br />
					Get in touch👋
				</h1>

				<p className="mt-2 text-lg leading-8 text-slate-600 dark:text-off-white">
					If you are interested in the services I offer or would like to connect over a cup of coffee, please don't hesitate to get in touch with me.
					<br />
					I am always happy to hear from new people and eager to explore new opportunities.
				</p>

				<p className="mt-2">
					<span className="font-bold">Email: </span>
					wzb3422@gmail.com
				</p>

				<div className="h-10"></div>
			</Container>
		</AnimatePage>
	);
};

export default ContactPage;

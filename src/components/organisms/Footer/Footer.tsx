import { Container } from '@components/atoms/Container';
import { IconGithub, IconLinkedin } from '@components/atoms/Icons';
import { SocialIcons } from '@components/molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="mt-8 py-4">
			<Container className="flex justify-between">
				<span>&copy; {new Date().getFullYear()} Zeb Wu</span>
				<SocialIcons
					profiles={[
						{
							name: 'Github',
							url: 'https://www.github.com/wzb3422',
							icon: <IconGithub />,
						},
						{
							name: 'LinkedIn',
							url: 'https://www.linkedin.com/in/zebwu',
							icon: <IconLinkedin />,
						},
						// {
						// 	name: 'Twitter',
						// 	url: 'https://twitter.com/jakeherp',
						// 	icon: <IconTwitter />,
						// },
						// {
						// 	name: 'Instagram',
						// 	url: 'https://www.instagram.com/jakeherp',
						// 	icon: <IconInstagram />,
						// },
					]}
				/>
			</Container>
		</footer>
	);
};

export { Footer };

import { getProfile, getSocialLinks } from './lib/siteContent';

const profile = getProfile();
const socialLinks = getSocialLinks();

export const SITE_TITLE = profile.name;
export const SITE_DESCRIPTION =
	'AI systems and agentic architecture leader helping turn AI ideas into production-ready enterprise systems for the part after the demo.';

export const SOCIAL_LINKS = {
	linkedin: socialLinks.linkedin,
	github: socialLinks.github,
	email: socialLinks.emailHref,
};

import { getProfile, getSocialLinks } from './lib/siteContent';

const profile = getProfile();
const socialLinks = getSocialLinks();

export const SITE_TITLE = profile.name;
export const SITE_DESCRIPTION =
	'Applied AI leader with infrastructure roots, helping turn AI ideas into practical enterprise systems for the part after the demo.';

export const SOCIAL_LINKS = {
	linkedin: socialLinks.linkedin,
	github: socialLinks.github,
	email: socialLinks.emailHref,
};

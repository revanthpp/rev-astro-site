import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

/**
 * @typedef {{
 *   name: string;
 *   title: string;
 *   targetTitle: string;
 *   location: string;
 *   positioning: string;
 *   heroEyebrow: string;
 *   heroHeadline: string;
 *   heroSubheadline: string;
 *   heroSupportingLine: string;
 *   shortBio: string;
 *   longBio: string;
 *   personalInterests: string;
 *   images: Record<'professional' | 'skydiving' | 'halfMarathon', { src: string; alt: string }>;
 * }} Profile
 */

/**
 * @typedef {{
 *   primaryCta: string;
 *   secondaryCta: string;
 *   featuredWriting: string[];
 *   featuredFieldNotes: string[];
 *   featuredProjects: string[];
 *   credibility: string[];
 *   intro: { eyebrow: string; headline: string; body: string };
 *   focusEyebrow: string;
 *   focusHeadline: string;
 *   focusDescription: string;
 *   focusAreas: Array<{ title: string; description: string }>;
 *   currentThinking: { eyebrow: string; headline: string; fallback: string };
 *   fieldNotes: { eyebrow: string; headline: string };
 *   outsideWork: { eyebrow: string; headline: string; body: string };
 *   certifications: { eyebrow: string; headline: string };
 *   contact: { eyebrow: string; headline: string; description: string; cta: string };
 * }} Homepage
 */

/** @typedef {{ items: Array<{ label: string; href: string }> }} Navigation */
/** @typedef {{ linkedin: string; github: string; email: string }} SocialLinks */
/** @typedef {{ name: string; issuer: string; date?: string; credentialId?: string; url?: string; featured: boolean }} Certification */

const root = process.cwd();

/**
 * @template T
 * @param {string} relativePath
 * @returns {T}
 */
function readYaml(relativePath) {
	const filePath = path.join(root, relativePath);
	return /** @type {T} */ (yaml.load(fs.readFileSync(filePath, 'utf8')));
}

/** @returns {Profile} */
export function getProfile() {
	return readYaml('content/site/profile.yml');
}

/** @returns {Homepage} */
export function getHomepage() {
	return readYaml('content/site/homepage.yml');
}

/** @returns {Navigation} */
export function getNavigation() {
	return readYaml('content/site/navigation.yml');
}

/** @returns {SocialLinks & { emailHref: string }} */
export function getSocialLinks() {
	/** @type {SocialLinks} */
	const links = readYaml('content/site/social-links.yml');
	return {
		...links,
		emailHref: links.email?.startsWith('mailto:') ? links.email : `mailto:${links.email}`,
	};
}

/** @returns {Certification[]} */
export function getCertifications() {
	/** @type {{ certifications?: Certification[] }} */
	const content = readYaml('content/certifications/certifications.yml');
	return content.certifications ?? [];
}

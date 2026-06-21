import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const root = process.cwd();

function readYaml(relativePath) {
	const filePath = path.join(root, relativePath);
	return yaml.load(fs.readFileSync(filePath, 'utf8'));
}

export function getProfile() {
	return readYaml('content/site/profile.yml');
}

export function getHomepage() {
	return readYaml('content/site/homepage.yml');
}

export function getNavigation() {
	return readYaml('content/site/navigation.yml');
}

export function getSocialLinks() {
	const links = readYaml('content/site/social-links.yml');
	return {
		...links,
		emailHref: links.email?.startsWith('mailto:') ? links.email : `mailto:${links.email}`,
	};
}

export function getCertifications() {
	return readYaml('content/certifications/certifications.yml').certifications ?? [];
}

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const root = process.cwd();
const errors = [];

function fail(file, message) {
	errors.push(`${file}: ${message}`);
}

function readYaml(file) {
	try {
		return yaml.load(fs.readFileSync(path.join(root, file), 'utf8')) ?? {};
	} catch (error) {
		fail(file, error.message);
		return {};
	}
}

function readFrontmatter(file) {
	const fullPath = path.join(root, file);
	const text = fs.readFileSync(fullPath, 'utf8');
	const match = text.match(/^---\n([\s\S]*?)\n---/);
	if (!match) {
		fail(file, 'Missing frontmatter block.');
		return {};
	}
	try {
		return yaml.load(match[1]) ?? {};
	} catch (error) {
		fail(file, error.message);
		return {};
	}
}

function requireFields(file, data, fields) {
	for (const field of fields) {
		if (data[field] === undefined || data[field] === null || data[field] === '') {
			fail(file, `Missing required field "${field}".`);
		}
	}
}

function requireArray(file, data, field) {
	if (!Array.isArray(data[field]) || data[field].length === 0) {
		fail(file, `"${field}" must be a non-empty list.`);
	}
}

function filesIn(dir) {
	const fullDir = path.join(root, dir);
	if (!fs.existsSync(fullDir)) {
		fail(dir, 'Directory is missing.');
		return [];
	}
	return fs
		.readdirSync(fullDir)
		.filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
		.map((name) => path.join(dir, name));
}

for (const file of [
	'content/site/profile.yml',
	'content/site/homepage.yml',
	'content/site/navigation.yml',
	'content/site/social-links.yml',
	'content/certifications/certifications.yml',
]) {
	if (!fs.existsSync(path.join(root, file))) fail(file, 'File is missing.');
}

requireFields('content/site/profile.yml', readYaml('content/site/profile.yml'), [
	'name',
	'title',
	'targetTitle',
	'location',
	'heroHeadline',
	'heroSubheadline',
	'shortBio',
	'longBio',
]);

const homepage = readYaml('content/site/homepage.yml');
requireArray('content/site/homepage.yml', homepage, 'featuredWriting');
requireArray('content/site/homepage.yml', homepage, 'featuredProjects');
requireArray('content/site/homepage.yml', homepage, 'focusAreas');

requireFields('content/site/social-links.yml', readYaml('content/site/social-links.yml'), [
	'linkedin',
	'github',
	'email',
]);

for (const file of filesIn('content/writing')) {
	const data = readFrontmatter(file);
	requireFields(file, data, ['title', 'description', 'date', 'category', 'readingTime', 'draft']);
	requireArray(file, data, 'tags');
}

for (const file of filesIn('content/notes')) {
	const data = readFrontmatter(file);
	requireFields(file, data, ['title', 'date', 'category', 'draft']);
	requireArray(file, data, 'tags');
}

for (const file of filesIn('content/projects')) {
	const data = readFrontmatter(file);
	requireFields(file, data, [
		'title',
		'description',
		'status',
		'category',
		'problem',
		'architecture',
		'draft',
	]);
	requireArray(file, data, 'technologies');
	requireArray(file, data, 'tradeoffs');
}

if (errors.length > 0) {
	console.error('Content check failed:\n');
	for (const error of errors) console.error(`- ${error}`);
	process.exit(1);
}

console.log('Content check passed.');

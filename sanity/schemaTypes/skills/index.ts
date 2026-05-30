import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'skills',
	title: 'Skills Repertoire',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'image',
			description: 'An icon representing the skill, used in the skills section of the homepage',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
	],
});

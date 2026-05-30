import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'blogs',
	title: 'Blog Library',
	type: 'document',
	fields: [
		defineField({
			name: 'headline',
			title: 'Blog HeadLine',
			type: 'string',
			description:
				'The primary headline (H1) or main title of your blog post. This displays prominently at the top of your page.',
		}),
		defineField({
			name: 'slug',
			title: 'Blog Slug',
			type: 'slug',
			options: {
				source: 'headline',
			},
		}),
		defineField({
			name: 'image',
			title: 'Blog Image Card',
			type: 'image',
			description: 'An Image card for blog card, used to improve UI',
		}),
		defineField({
			name: 'description',
			title: 'Blog Description',
			type: 'text',
			description: 'A brief overview of the blog page',
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			description: 'The date and time the article was published',
			initialValue: () => new Date().toISOString(), // Auto-fills with current date/time
			validation: Rule => Rule.required(),
		}),
	],
});

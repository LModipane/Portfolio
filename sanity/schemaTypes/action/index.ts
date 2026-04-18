import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'heroSection',
	title: 'Hero Section',
	type: 'document',
	fields: [
		defineField({
			name: 'myName',
			title: 'My Name',
			type: 'string',
		}),
	],
});

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
			description: "This refers to the name that will display on the hero section of website"
		}),
		defineField({
			name: "myRoles",
			title: "My Roles",
			type: "array",
			of: [{type: "string"}]
		})
	],
});

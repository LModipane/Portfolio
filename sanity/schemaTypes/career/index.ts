import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'career',
	title: 'Career Journey',
	type: 'document',
	fields: [
		defineField({
			name: 'role',
			title: 'Career Role',
			type: 'string',
			description: 'This refers to the role or degree',
		}),
		defineField({
			name: 'slug',
			title: 'Career Slug',
			type: 'slug',
			options: {
				source: 'role',
			},
		}),
		defineField({
			name: 'organisation',
			title: 'Career organisation',
			type: 'string',
			description: 'This refers to the organisation where i worked in',
		}),
		defineField({
			name: 'organisationLogo',
			title: 'Organisation logo',
			type: 'image',
			description: 'This refers to the logo that organisation used',
		}),
		defineField({
			name: 'locationType',
			title: 'Career Location',
			type: 'string',
			options: {
				list: [
					{ title: 'Remote', value: 'remote' },
					{ title: 'Hybrid', value: 'hybrid' },
					{ title: 'In-Office', value: 'in-office' },
				],
				layout: 'radio', // Optional: renders as a clean radio button list
			},
			description: "This refers organisation's locational model, where i worked in",
		}),
		defineField({
			name: 'officeLocation',
			title: 'Office Loction',
			type: 'string',
			hidden: ({ parent }) => parent?.locationType !== 'in-office',
			validation: Rule =>
				Rule.custom((value, context) => {
					const parent = context.parent as { locationType?: string };

					if (parent?.locationType === 'in-office' && !value)
						return 'Please provide the office location.';

					return true;
				}),
		}),
		defineField({
			name: 'startDate',
			title: 'Career Start Date',
			type: 'date',
			description: 'this refers to the date, when you started your career',
		}),
		defineField({
			name: 'endDate',
			title: 'Career End Date',
			type: 'date',
			description: 'this refers to the date, when you ended your career',
		}),
		defineField({
			name: 'organisationLink',
			title: 'Organisation Website Link',
			type: 'url',
			description: 'This refers to the url, where visitors can view organisation where i worked in',
		}),
		defineField({
			name: 'description',
			title: 'Career Description',
			type: 'text',
			description: 'This refers to an overall description of my career',
		}),
		defineField({
			name: 'technologies',
			title: 'Technologies Used',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'skills' } }],
			description:
				'A list of technologies used in the Career, referencing the technologies document',
		}),
	],
});

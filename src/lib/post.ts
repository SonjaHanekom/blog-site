export type Tags = 'Fountain Pens' | 'Coding' | 'Design' | 'Lifestyle' | 'Pets';

export type Post = {
	title: string;
	slug: string;
	summary: string;
	date: string;
	tags: Tags[];
	image: string;
	imageAlt: string;
	published: boolean;
};

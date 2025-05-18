export type Categories = 'Fountain Pens' | 'Ink';

export type Post = {
	title: string;
	slug: string;
	summary: string;
	date: string;
	tags: Tags[];
	published: boolean;
};

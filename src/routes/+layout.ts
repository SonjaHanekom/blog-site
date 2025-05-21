import { redirect } from '@sveltejs/kit';

export const prerender = true;

export const load = async ({ url }) => {
	if (url.pathname !== '/') {
		return;
	}
	redirect(300, '/blogs');
};

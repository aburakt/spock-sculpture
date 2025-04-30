import type {PageServerLoad} from './$types';
import {error, redirect} from "@sveltejs/kit";

export const load = (async ({locals}) => {

	return {
		user: locals.user
	};

}) satisfies PageServerLoad;

export const actions = {
	login: async ({request, locals}) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;

		try {
			await locals.pb.collection('users').authWithPassword(username, password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err: any) {
			error(500, err.message);
		}

		redirect(303, '/');
	}
};
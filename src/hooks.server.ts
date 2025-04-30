import PocketBase from 'pocketbase';

export const handle = async ({event, resolve}) => {
	const url = 'http://127.0.0.1:8090/';
	event.locals.pb = new PocketBase(url);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie')
		|| '');
	const model = event.locals.pb.authStore.model;

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = structuredClone(model);
			event.locals.user!.isAdmin = event.locals.pb.authStore.isAdmin;
		}
	} catch {
		event.locals.pb.authStore.clear();
		event.locals.user = null;
	}

	const response = await resolve(event);
	// TODO: secure this
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({
		secure: false
	}));

	return response;
};
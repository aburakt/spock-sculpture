import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	// PocketBase'den navigasyon öğelerini yükle
	let navItem = [];

	try {
		const records = await locals.pb.collection('navItem').getFullList({
			sort: 'sort',
		});

		navItem = records.map(record => ({
			name: record.name,
			path: record.path
		}));
	} catch (error) {
		console.error('Navigasyon öğeleri yüklenemedi:', error);
		// Varsayılan değerleri kullan
		navItem = [
			{name: 'Ana Sayfa', path: '/'},
			{name: 'Hakkımızda', path: '/hakkimizda'},
			{name: 'Hizmetler', path: '/hizmetler'},
			{name: 'Blog', path: '/blog'},
			{name: 'İletişim', path: '/iletisim'},
			{name: 'SSS', path: '/sss'}
		];
	}

	return {
		navItem
	};
};
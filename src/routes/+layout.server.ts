import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	// PocketBase'den navigasyon öğelerini yükle
	let navItems = [];

	try {
		const records = await locals.pb.collection('navItems').getFullList({
			sort: 'sort',
		});

		navItems = records.map(record => ({
			name: record.name,
			path: record.path
		}));
	} catch (error) {
		console.error('Navigasyon öğeleri yüklenemedi:', error);
		// Varsayılan değerleri kullan
		navItems = [
			{name: 'Ana Sayfa', path: '/'},
			{name: 'Hakkımızda', path: '/hakkimizda'},
			{name: 'Hizmetler', path: '/hizmetler'},
			{name: 'Blog', path: '/blog'},
			{name: 'İletişim', path: '/iletisim'},
			{name: 'SSS', path: '/sss'}
		];
	}

	return {
		navItems
	};
};
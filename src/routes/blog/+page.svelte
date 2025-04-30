<script lang="ts">
	const blogPosts = [
		{
			id: 1,
			title: "Sektördeki Son Gelişmeler",
			date: "15 Mayıs 2025",
			image: "https://picsum.photos/id/201/600/400",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
		},
		{
			id: 2,
			title: "Başarılı Proje Yönetiminin Sırları",
			date: "10 Mayıs 2025",
			image: "https://picsum.photos/id/202/600/400",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
		},
		{
			id: 3,
			title: "2025'te Teknoloji Trendleri",
			date: "5 Mayıs 2025",
			image: "https://picsum.photos/id/203/600/400",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
		},
		{
			id: 4,
			title: "Müşteri Memnuniyeti Nasıl Artırılır?",
			date: "1 Mayıs 2025",
			image: "https://picsum.photos/id/204/600/400",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
		},
		{
			id: 5,
			title: "Uzaktan Çalışma İpuçları",
			date: "25 Nisan 2025",
			image: "https://picsum.photos/id/205/600/400",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
		},
		{
			id: 6,
			title: "Ekip Motivasyonunu Artırmanın Yolları",
			date: "20 Nisan 2025",
			image: "https://picsum.photos/id/206/600/400",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
		}
	];
</script>

<div class="prose max-w-none">
  <h1 class="text-5xl font-bold mb-12">Blog</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each blogPosts as post}
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img src={post.image} alt={post.title} class="w-full h-48 object-cover"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{post.title}</h2>
          <p class="text-sm text-gray-500">{post.date}</p>
          <p>{post.excerpt}</p>
          <div class="card-actions justify-end">
            <a href={`/blog/${post.id}`} class="btn btn-primary">Devamını Oku</a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex justify-center my-8">
    <div class="join">
      <button class="join-item btn btn-active">1</button>
      <button class="join-item btn">2</button>
      <button class="join-item btn">3</button>
      <button class="join-item btn">4</button>
    </div>
  </div>

  <div class="bg-base-200 p-8 rounded-lg mt-8">
    <h2 class="text-2xl font-bold mb-4">Bültenimize Abone Olun</h2>
    <p class="mb-4">En son blog yazılarımızdan ve haberlerimizden haberdar olmak için e-posta listemize kaydolun.</p>
    <div class="flex flex-col md:flex-row gap-4">
      <input type="email" placeholder="E-posta adresiniz" class="input input-bordered w-full"/>
      <button class="btn btn-primary">Abone Ol</button>
    </div>
  </div>
</div>
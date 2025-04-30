<script lang="ts">
	import { page } from '$app/stores';

	const postId = $page.params.id;

	// Gerçek bir uygulamada bu veriler bir API'den alınacaktır
	const post = {
		id: postId,
		title: "Örnek Blog Başlığı",
		date: "15 Mayıs 2025",
		author: "Admin",
		image: `https://picsum.photos/id/${200 + Number(postId)}/1200/600`,
		content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque auctor nisl eget felis vehicula, eget aliquet lorem malesuada. Mauris ultricies, tellus nec dictum interdum, nisl orci hendrerit diam, eget molestie nunc risus in dui.</p>

      <p>Nam iaculis urna et ligula porttitor, in porttitor mi pellentesque. Donec euismod, risus nec ultricies fermentum, nulla nisi luctus elit, id pharetra dui orci vitae neque. Aenean auctor ornare eleifend. Cras nec justo neque. Vivamus condimentum leo vel lobortis pharetra.</p>

      <h2>Alt Başlık 1</h2>

      <p>Fusce interdum eros eu nulla finibus, in accumsan mauris volutpat. Praesent vestibulum erat ac justo convallis, vel ultricies dui facilisis. Donec condimentum velit non leo consequat tempor. Nunc facilisis mauris vel metus facilisis, vel fermentum tortor ultrices.</p>

      <p>Mauris blandit, mi ut faucibus laoreet, turpis dolor commodo enim, a auctor nulla mi vitae enim. Morbi finibus, lacus id sollicitudin sagittis, nunc leo pretium neque, id laoreet tortor diam ac velit. Sed euismod quam id tempus venenatis.</p>

      <h2>Alt Başlık 2</h2>

      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consectetur ipsum eu eros tristique, ac dapibus urna faucibus. Fusce id ante ullamcorper, finibus erat sit amet, commodo neque.</p>

      <p>Suspendisse potenti. Integer tincidunt, diam a auctor faucibus, felis est tempus enim, vel fringilla eros tortor at orci. Fusce vehicula, dolor ac interdum rutrum, est massa facilisis magna, eget pulvinar elit ligula non justo.</p>
    `
	};

	// Önerilen diğer yazılar
	const relatedPosts = [
		{
			id: Number(postId) % 6 + 1,
			title: "İlgili Yazı 1",
			image: `https://picsum.photos/id/${210 + Number(postId) % 6}/300/200`
		},
		{
			id: (Number(postId) + 1) % 6 + 1,
			title: "İlgili Yazı 2",
			image: `https://picsum.photos/id/${220 + Number(postId) % 6}/300/200`
		},
		{
			id: (Number(postId) + 2) % 6 + 1,
			title: "İlgili Yazı 3",
			image: `https://picsum.photos/id/${230 + Number(postId) % 6}/300/200`
		}
	];
</script>

<div class="prose max-w-none">
    <div class="mb-8">
        <a href="/blog" class="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Tüm Yazılara Dön
        </a>
    </div>

    <h1 class="text-5xl font-bold mb-4">{post.title}</h1>

    <div class="flex items-center text-sm text-gray-500 mb-6">
        <span class="mr-4">{post.date}</span>
        <span>Yazar: {post.author}</span>
    </div>

    <figure class="mb-8">
        <img src={post.image} alt={post.title} class="rounded-lg w-full object-cover max-h-96" />
    </figure>

    <div class="content">
        {@html post.content}
    </div>

    <div class="divider my-12"></div>

    <div>
        <h2 class="text-2xl font-bold mb-6">İlgili Yazılar</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each relatedPosts as related}
                <div class="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={related.image} alt={related.title} class="w-full h-40 object-cover" />
                    </figure>
                    <div class="card-body">
                        <h3 class="card-title">{related.title}</h3>
                        <div class="card-actions justify-end">
                            <a href={`/blog/${related.id}`} class="btn btn-primary btn-sm">Oku</a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
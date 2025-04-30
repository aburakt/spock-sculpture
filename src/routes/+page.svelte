<script lang="ts">
	export let data;
	console.log(data);
</script>

<div class="hero min-h-[70vh] bg-base-200 rounded-lg">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hoş Geldiniz</h1>
      <p class="py-6">Firmamızın sunduğu hizmetlerle müşterilerimize en kaliteli çözümleri sunuyoruz. Profesyonel
        ekibimizle yanınızdayız.</p>
      <button class="btn btn-primary">Hizmetlerimiz</button>
    </div>
  </div>
</div>

<div class="py-12"><h1>Welcome to SvelteKit</h1>
  <!--Login Form-->
  <form action="?/login" method="post">
    <input type="text" name="username" placeholder="Username"/>
    <input type="password" name="password" placeholder="Password"/>
    <button type="submit">Login</button>
  </form>

  <!--Print the username from data.user-->
  {#if data.user}
    <p>Hello {data.user.name}</p>
  {/if}
</div>
<div class="py-12">
  <h2 class="text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="card bg-base-100 shadow-xl">
      <figure><img src="https://picsum.photos/id/1/500/300" alt="Hizmet 1"/></figure>
      <div class="card-body">
        <h2 class="card-title">Hizmet 1</h2>
        <p>Bu hizmet hakkında detaylı bilgi burada yer alacak.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Detaylı Bilgi</button>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 shadow-xl">
      <figure><img src="https://picsum.photos/id/2/500/300" alt="Hizmet 2"/></figure>
      <div class="card-body">
        <h2 class="card-title">Hizmet 2</h2>
        <p>Bu hizmet hakkında detaylı bilgi burada yer alacak.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Detaylı Bilgi</button>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 shadow-xl">
      <figure><img src="https://picsum.photos/id/3/500/300" alt="Hizmet 3"/></figure>
      <div class="card-body">
        <h2 class="card-title">Hizmet 3</h2>
        <p>Bu hizmet hakkında detaylı bilgi burada yer alacak.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Detaylı Bilgi</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="py-12 bg-base-200 rounded-lg my-6 p-8">
  <h2 class="text-3xl font-bold text-center mb-8">Neden Bizi Seçmelisiniz?</h2>
  <div class="stats shadow w-full">
    <div class="stat">
      <div class="stat-figure text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             class="inline-block w-8 h-8 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </div>
      <div class="stat-title">Toplam Müşteri</div>
      <div class="stat-value text-primary">250+</div>
      <div class="stat-desc">2010'dan beri</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             class="inline-block w-8 h-8 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <div class="stat-title">Tamamlanan Proje</div>
      <div class="stat-value text-secondary">400+</div>
      <div class="stat-desc">Son 10 yılda</div>
    </div>

    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             class="inline-block w-8 h-8 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      </div>
      <div class="stat-title">Memnuniyet Oranı</div>
      <div class="stat-value">98%</div>
      <div class="stat-desc text-secondary">2% artış (son yıl)</div>
    </div>
  </div>
</div>
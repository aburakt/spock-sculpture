<script lang="ts">
  import { page } from '$app/stores';

  // Layout'tan navItems verilerini al
  $: navItem = $page.data.navItem || [];
</script>


<!--<script lang="ts">-->

<!--  import { onMount } from 'svelte';-->
<!--  import { page } from '$app/stores';-->

<!--  let navItems = [];-->
<!--  let isLoading = true;-->

<!--  onMount(async () => {-->
<!--    try {-->
<!--      // PocketBase'den navigasyon öğelerini çekiyoruz-->
<!--      const records = await $page.data.pb.collection('navItems').getFullList({-->
<!--        sort: 'sort' // Eğer bir sıralama alanınız varsa-->
<!--      });-->

<!--      // API'den gelen verileri kullanılabilir formata dönüştürüyoruz-->
<!--      navItems = records.map(record => ({-->
<!--        name: record.name,-->
<!--        path: record.path-->
<!--      }));-->

<!--      isLoading = false;-->
<!--    } catch (error) {-->
<!--      console.error('Navigasyon öğeleri çekilemedi:', error);-->
<!--      // Hata durumunda fallback olarak varsayılan değerleri kullanabiliriz-->
<!--      navItems = [-->
<!--        {name: 'Ana Sayfa', path: '/'},-->
<!--        {name: 'Hakkımızda', path: '/hakkimizda'},-->
<!--        {name: 'Hizmetler', path: '/hizmetler'},-->
<!--        {name: 'Blog', path: '/blog'},-->
<!--        {name: 'İletişim', path: '/iletisim'},-->
<!--        {name: 'SSS', path: '/sss'}-->
<!--      ];-->
<!--      isLoading = false;-->
<!--    }-->
<!--  });-->

<!--</script>-->

<div class="navbar bg-base-100 shadow">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
        </svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {#each navItem as item}
          <li><a href={item.path}>{item.name}</a></li>
        {/each}
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">Logo</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each navItem as item}
        <li><a href={item.path}>{item.name}</a></li>
      {/each}
    </ul>
  </div>
  <div class="navbar-end">
    <label class="toggle text-base-content mr-3">
      <input type="checkbox" value="synthwave" class="theme-controller" />
      <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </g>
      </svg>
      <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </g>
      </svg>
    </label>
    <a class="btn btn-secondary" href="/iletisim">İletişim</a>
  </div>
</div>
<script lang="ts">
	const navItems = [
		{name: 'Ana Sayfa', path: '/'},
		{name: 'Hakkımızda', path: '/hakkimizda'},
		{name: 'Hizmetler', path: '/hizmetler'},
		{name: 'Blog', path: '/blog'},
		{name: 'İletişim', path: '/iletisim'},
		{name: 'SSS', path: '/sss'}
	];
</script>
<div class="navbar flex-grow container mx-auto px-4 py-6 bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
        </svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {#each navItems as item}
          <li><a href={item.path}>{item.name}</a></li>
        {/each}
      </ul>
    </div>
    <a href="/" class="btn btn-ghost text-xl">Logo</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each navItems as item}
        <li><a href={item.path}>{item.name}</a></li>
      {/each}
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/iletisim" class="btn btn-primary">İletişime Geç</a>
  </div>
</div>
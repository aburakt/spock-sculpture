<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let {children} = $props();
</script>

<div class="min-h-screen flex flex-col">
  <Navbar/>
  <main class="flex-grow container mx-auto px-4 py-6">
    {@render children()}
  </main>
  <Footer/>
</div>
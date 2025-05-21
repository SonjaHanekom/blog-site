<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/ui/Nav.svelte';
	import { page } from '$app/state';
	let { children } = $props();
</script>

<Nav />

<main class="grid h-screen items-center py-10">
	<div
		class={[
			'flex h-full w-full flex-col',
			page.url.pathname !== '/' && 'max-w-72 place-self-center sm:max-w-lg md:max-w-xl lg:max-w-4xl'
		]}
	>
		{@render children()}
	</div>
</main>

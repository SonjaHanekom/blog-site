<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/ui/Nav.svelte';
	let { children } = $props();
</script>

<Nav />

<main class="flex-1 p-8">
	{@render children()}
</main>

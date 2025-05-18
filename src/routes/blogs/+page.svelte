<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import { Search } from 'lucide-svelte';

	let search = $state('');
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<h1>Blogs</h1>

<form class="flex gap-2" onsubmit={(e) => alert('Form submitted!')}>
	<Input class="flex-1" bind:value={search} />
	<Button provider="button" type="submit"><Search /></Button>
</form>

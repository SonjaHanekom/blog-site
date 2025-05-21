<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { Search } from 'lucide-svelte';

	let search = $state('');

	let { data } = $props();
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<h1>Blogs</h1>

<form class="grid grid-cols-[1fr_auto] gap-2" onsubmit={(e) => alert('Form submitted!')}>
	<Input class="!w-full" bind:value={search} />
	<Button provider="button" type="submit"><Search /></Button>
	<div class="grid grid-cols-5">
		<Tag isFilter tag="Fountain Pens" />
		<Tag isFilter tag="Design" />
		<Tag isFilter tag="Lifestyle" />
		<Tag isFilter tag="Pets" />
		<Tag isFilter tag="Coding" />
	</div>
</form>

<ul class="mt-12">
	{#each data.posts as post}
		<li>
			<Card class="h-64" href={`/blogs/${post.slug}`} img={post.image} imgAlt={post.imageAlt}>
				<h2>{post.title}</h2>
				<p class="py-2">{post.summary}</p>

				{#snippet meta()}
					<span>{post.date}</span>
					<div class="flex gap-2 place-self-end">
						{#each post.tags as tag}
							<Tag {tag} />
						{/each}
					</div>
				{/snippet}
			</Card>
		</li>
	{/each}
</ul>

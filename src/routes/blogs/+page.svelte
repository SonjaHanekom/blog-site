<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { ALL_TAGS, type Tags } from '$lib/post.js';
	import { Search } from 'lucide-svelte';
	import { flip } from 'svelte/animate';

	let search = $state('');
	let tags: Tags[] = $state([]);

	let { data } = $props();

	const toggleTag = (enabled: boolean, tag: Tags) => {
		if (!enabled) {
			tags = tags.filter((t) => t !== tag);
		} else {
			tags = [...tags, tag];
		}
	};

	const onsubmit = (e: SubmitEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		search = formData.get('search') as string;
	};

	const filteredPosts = $derived.by(() => {
		const taggedPosts = tags.length
			? data.posts.filter((post) => {
					return tags.some((tag) => post.tags.includes(tag));
				})
			: data.posts;
		return taggedPosts.filter((post) =>
			post.title.toLocaleLowerCase().includes(search.toLowerCase())
		);
	});
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<h1>Blogs</h1>

<form class="grid grid-cols-[1fr_auto] gap-2" {onsubmit}>
	<Input type="search" name="search" aria-label="Search" />
	<Button provider="button" type="submit"><Search /></Button>
</form>
<div class="mt-4 grid grid-cols-5 gap-4">
	{#each ALL_TAGS as tag}
		<Tag isFilter {tag} bind:toggled={() => tags.includes(tag), (v) => toggleTag(v, tag)} />
	{/each}
</div>

<ul class="mt-8 space-y-4">
	{#each filteredPosts as post (post.slug)}
		<li animate:flip={{ duration: 200 }}>
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

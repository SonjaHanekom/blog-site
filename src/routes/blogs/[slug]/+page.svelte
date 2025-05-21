<script lang="ts">
	import Tag from '$lib/components/ui/Tag.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="space-y-4">
	<div class="card space-y-4 rounded-xl border border-surface-950 p-4">
		<hgroup class="space-y-4">
			<h1>{data.meta.title}</h1>
			<p class="italic">{data.meta.summary}</p>
		</hgroup>
		<div class="flex justify-end gap-2">
			<p class="flex-1 self-center">Published on {data.meta.date}</p>
			{#each data.meta.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
	</div>

	<div class="card space-y-4 rounded-xl border border-surface-950 p-4">
		<data.content />
	</div>
</article>

<style>
	article {
		h1 {
			text-transform: capitalize;
		}
	}
</style>

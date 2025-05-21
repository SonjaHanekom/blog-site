<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		meta?: Snippet;
		href?: string;
		img?: string;
		imgAlt?: string;
		outerClass?: string;
		[key: string]: unknown; // Allow any other props
	}
	let { children, meta, href, img, imgAlt, outerClass, ...rest }: Props = $props();

	let classList = $derived([
		'block border-2 transition-all rounded-xl',
		'bg-surface-50 border-surface-950 text-surface-950',
		href && 'hover:translate-x-1 hover:translate-y-1.5 hover:shadow-none',
		'grid',
		img ? 'grid-cols-[1fr_3fr]' : 'grid-cols-1',
		rest.class
	]);

	let bWidth = $state();
	let bHeight = $state();
</script>

<div class="flex size-fit pb-1.5 pr-1 {outerClass}">
	{#snippet content()}
		{#if img}
			<img
				src={img}
				alt={imgAlt ?? ''}
				class="h-full w-full rounded-l-xl border-r border-surface-950 object-cover"
			/>
		{/if}

		<section class="grid grid-rows-[1fr_auto] p-4">
			<div>
				{@render children()}
			</div>
			{#if meta}
				<div class="grid grid-flow-col">
					{@render meta()}
				</div>
			{/if}
		</section>
	{/snippet}

	{#if href}
		<a
			{href}
			type="button"
			bind:offsetWidth={bWidth}
			bind:offsetHeight={bHeight}
			{...{ ...rest, class: classList }}
		>
			{@render content()}
		</a>
	{:else}
		<div bind:offsetWidth={bWidth} bind:offsetHeight={bHeight} {...{ ...rest, class: classList }}>
			{@render content()}
		</div>
	{/if}

	<div
		style="width: {bWidth}px; height: {bHeight}px;"
		class="absolute -z-10 translate-x-1 translate-y-1.5 rounded-xl bg-surface-950"
	></div>
</div>

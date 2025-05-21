<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	interface Props {
		children: Snippet;
		href?: string;
		isNav?: boolean;
		onclick?: () => void;
		variant?: 'round' | 'square';
		provider?: 'link' | 'button';
		[key: string]: unknown; // Allow any other props
	}
	let {
		children,
		href,
		isNav = false,
		onclick = () => {},
		variant = 'round',
		provider = 'link',
		...rest
	}: Props = $props();

	let isActive = $derived(
		href && isNav
			? href === '/'
				? href === page.url.pathname
				: page.url.pathname.startsWith(href)
			: false
	);

	let classList = $derived([
		'btn border-2 transition-all z-10',
		!isActive && 'bg-surface-50 border-surface-950 text-surface-950',
		!isActive && isNav && 'hover:translate-x-1 hover:translate-y-1.5 hover:shadow-none ',
		isActive &&
			'interactive-current translate-x-1 translate-y-1.5 border-primary-950 bg-primary-50 text-primary-950',
		variant === 'round' && 'rounded-full',
		variant === 'square' && 'rounded-xl',
		rest.class
	]);

	let bWidth = $state();
	let bHeight = $state();
</script>

<div class="flex size-fit pb-1.5 pr-1">
	{#if provider === 'link'}
		<a
			{href}
			bind:offsetWidth={bWidth}
			bind:offsetHeight={bHeight}
			{...{ ...rest, class: classList }}
		>
			{@render children()}
		</a>
	{:else if provider === 'button'}
		<button
			type="button"
			bind:offsetWidth={bWidth}
			bind:offsetHeight={bHeight}
			{onclick}
			{...{ ...rest, class: classList }}
		>
			{@render children()}
		</button>
	{/if}
	<div
		style="width: {bWidth}px; height: {bHeight}px;"
		class="btn absolute translate-x-1 translate-y-1.5 bg-surface-950"
	></div>
</div>

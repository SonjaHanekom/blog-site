<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	interface Props {
		children: Snippet;
		href: string;
		variant?: 'round' | 'square';
	}
	let { children, href, variant = 'round' }: Props = $props();

	let classList = $derived([
		'btn border-2 transition-all ',
		page.url.pathname !== href &&
			'bg-surface-50 hover:translate-x-1 hover:translate-y-1.5 hover:shadow-none border-surface-950 text-surface-950',
		page.url.pathname === href &&
			'interactive-current translate-x-1 translate-y-1.5 border-primary-950 bg-primary-50 text-primary-950',
		variant === 'round' && 'rounded-full',
		variant === 'square' && 'rounded-xl'
	]);

	let bWidth = $state();
	let bHeight = $state();
</script>

<div class="flex size-fit pb-1.5 pr-1">
	<a {href} type="button" class={classList} bind:offsetWidth={bWidth} bind:offsetHeight={bHeight}>
		{@render children()}
	</a>
	<div
		style="width: {bWidth}px; height: {bHeight}px;"
		class="btn absolute -z-10 translate-x-1 translate-y-1.5 bg-surface-950"
	></div>
</div>

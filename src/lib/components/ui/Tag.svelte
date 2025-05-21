<script lang="ts">
	import type { Tags } from '$lib/post';

	interface Props {
		tag: Tags;
		toggled?: boolean;
		isFilter?: boolean;
		[key: string]: unknown; // Allow any other props
	}
	let { tag, toggled = $bindable(false), isFilter = false, ...rest }: Props = $props();

	let classList = $derived([
		'btn border-2 transition-all z-10',
		'rounded-2xl',
		!isFilter && 'hover:filter-none',
		isFilter && 'w-full cursor-pointer',
		isFilter && toggled && 'interactive-current translate-x-1 translate-y-1.5',
		tag === 'Fountain Pens' && 'bg-error-50 text-error-950 border-error-950',
		tag === 'Design' && 'bg-warning-50 text-warning-950 border-warning-950',
		tag === 'Lifestyle' && 'bg-success-50 text-success-950 border-success-950',
		tag === 'Pets' && 'bg-secondary-50 text-secondary-950 border-secondary-950',
		tag === 'Coding' && 'bg-primary-50 text-primary-950 border-primary-950',
		rest.class
	]);

	let width = $state();
	let height = $state();
</script>

{#snippet content()}
	<span class={classList} bind:offsetWidth={width} bind:offsetHeight={height} {...rest}>
		{tag}
	</span>
	<div
		style="width: {width}px; height: {height}px;"
		class="btn absolute translate-x-1 translate-y-1.5 bg-surface-950"
	></div>
{/snippet}
{#if isFilter}
	<label class="flex w-full pb-1.5 pr-1">
		<input type="checkbox" bind:checked={toggled} class="sr-only" aria-label={`Filter by ${tag}`} />
		{@render content()}
	</label>
{:else}
	<div class="flex pb-1.5 pr-1">
		{@render content()}
	</div>
{/if}

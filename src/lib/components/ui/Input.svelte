<script lang="ts">
	interface Props {
		placeholder?: string;
		value?: string;
		[key: string]: unknown; // Allow any other props
	}
	let {
		placeholder = 'Search for a blog title...',
		value = $bindable(''),
		...rest
	}: Props = $props();

	let classList = $derived([
		'btn border-2 transition-all w-full',
		'bg-surface-50 border-surface-950 text-surface-950 focus:border-primary-500 focus:ring-primary-500',
		rest.class
	]);

	let width = $state();
	let height = $state();
</script>

<div class="flex w-full flex-1 pb-1.5 pr-1">
	<input
		bind:value
		bind:offsetWidth={width}
		bind:offsetHeight={height}
		{...{ ...rest, type: 'text', class: classList, placeholder }}
	/>
	<div
		style="width: {width}px; height: {height}px;"
		class="btn absolute -z-10 translate-x-1 translate-y-1.5 bg-surface-950"
	></div>
</div>

<script lang="ts">
	import Window from '$lib/components/ui/Window.svelte';

	let view: HTMLDivElement | undefined = $state();

	let bounds = $derived.by(() => {
		let rect = view?.getBoundingClientRect();
		return {
			xmin: rect?.left || 0,
			xmax: rect?.right || 0,
			ymin: rect?.top || 0,
			ymax: rect?.bottom || 0
		};
	});
</script>

<div class="h-full" bind:this={view}>
	<Window id="window-1" title="Window 1" initialPosition={{ x: 100, y: 100 }} {bounds}>
		<img src="https://picsum.photos/400" alt="Picsum Pic" />
	</Window>
	<Window id="window-2" title="Window 2" initialPosition={{ x: 500, y: 500 }} {bounds}>
		<img src="https://picsum.photos/200" alt="Picsum Pic" />
	</Window>
	<Window id="window-3" title="Window 3" initialPosition={{ x: 700, y: 300 }} {bounds}>
		<img src="https://picsum.photos/300/200" alt="Picsum Pic" />
	</Window>
</div>

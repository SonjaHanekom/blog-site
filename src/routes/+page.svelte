<script>
	import Window from '$lib/components/ui/Window.svelte';
</script>

<div class="flex h-screen w-screen items-center justify-center gap-4">
	<Window id="window-1" title="Window 1">
		<img src="https://picsum.photos/400" alt="Picsum Pic" />
	</Window>
	<Window id="window-2" title="Window 2">
		<img src="https://picsum.photos/200" alt="Picsum Pic" />
	</Window>
	<Window id="window-3" title="Window 3">
		<img src="https://picsum.photos/300/700" alt="Picsum Pic" />
	</Window>
</div>

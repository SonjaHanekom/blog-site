<script>
	import Window from '$lib/components/ui/Window.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { Skull } from 'lucide-svelte';
</script>

<Window id="window-1" title="Window 1" initialPosition={{ x: 100, y: 100 }}>
	<img src="https://picsum.photos/400" alt="Picsum Pic" />
</Window>
<Window id="window-2" title="Window 2" initialPosition={{ x: 500, y: 500 }}>
	<img src="https://picsum.photos/200" alt="Picsum Pic" />
</Window>
<Window id="window-3" title="Window 3" initialPosition={{ x: 700, y: 300 }}>
	<img src="https://picsum.photos/300/200" alt="Picsum Pic" />
</Window>

<div class="flex flex-col gap-4">
	<Button href="/">Hi</Button>

	<Button href="/ahhh">Hi<Skull />Hi</Button>
</div>

<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { House, PencilRuler, Rss, Search, User } from 'lucide-svelte';
</script>

<nav
	class="fixed top-1/2 flex size-fit -translate-y-1/2 flex-col gap-2 rounded-br-3xl rounded-tr-3xl border-b-2 border-l-0 border-r-2 border-t-2 border-surface-950 bg-surface-50 p-4"
>
	<!-- <Button isNav href="/"><House /></Button> -->
	<Button isNav href="/blogs"><Rss /></Button>
	<Button isNav href="/about-me"><User /></Button>
</nav>

<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { House, PencilRuler, Rss, Search, User } from 'lucide-svelte';
</script>

<nav
	class="place-self-center flex size-fit flex-col gap-2 rounded-br-3xl rounded-tr-3xl border-b-2 border-l-0 border-r-2 border-t-2 border-surface-950 bg-surface-50 p-4"
>
	<Button href="/"><House /></Button>
	<Button href="/blog"><Rss /></Button>
	<Button href="/"><PencilRuler /></Button>
	<Button href="/"><Search /></Button>
	<Button href="/"><User /></Button>
</nav>

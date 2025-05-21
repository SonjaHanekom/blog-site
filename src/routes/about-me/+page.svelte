<script>
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import { Github } from 'lucide-svelte';
</script>

<Card img="/me.jpg" imgAlt="An image of myself at pride, 2024" outerClass="self-center my-auto">
	<h1>About Me</h1>
	<p class="py-2">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>
	<p class="py-2">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>

	{#snippet meta()}
		<div class="flex gap-2">
			<Button
				href="https://github.com/SonjaHanekom"
				isNav
				target="_blank"
				noreferrer
				class="h-12 w-12 p-1"><Github size={24} /></Button
			>
		</div>
	{/snippet}
</Card>

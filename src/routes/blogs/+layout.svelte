<script lang="ts">
	let { children } = $props();
</script>

<div class="grid">
	<div class="w-full max-w-4xl place-self-center">
		{@render children()}
	</div>
</div>

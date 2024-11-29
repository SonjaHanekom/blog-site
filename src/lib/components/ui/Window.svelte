<script lang="ts">
	let { id, title, children } = $props();

	const onclose = () => {
		console.log('close');
		// TODO: dispatch close event
	};

	const onminimize = () => {
		console.log('minimize');
		// TODO: dispatch minimize event
	};

	const onrestore = () => {
		console.log('close');
		// TODO: dispatch restore event
	};
</script>

<div {id} class="card w-fit border-2 border-surface-950-50">
	<div class="flex items-center gap-3 border-b px-4 py-2 border-surface-950-50">
		<button
			class="aspect-square h-3 rounded-full bg-error-50 p-1"
			onclick={onclose}
			aria-label="Close"
		>
		</button>
		<button
			class="aspect-square h-3 rounded-full bg-warning-50 p-1"
			onclick={onminimize}
			aria-label="Minimize"
		>
		</button>
		<button
			class="aspect-square h-3 rounded-full bg-success-50 p-1"
			onclick={onrestore}
			aria-label="Restore"
		>
		</button>
		<span class="flex-1 text-right">{title}</span>
	</div>
	<div class="p-2">
		<div class="overflow-clip rounded-b-container bg-red-500">
			{@render children()}
		</div>
	</div>
</div>

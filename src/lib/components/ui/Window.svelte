<script lang="ts">
	import { windowStack, bringToFront } from '$lib/stores/window-stack-store.svelte';
	import type { Snippet } from 'svelte';

	let {
		id,
		title,
		children,
		initialPosition = { x: 300, y: 500 },
		bounds = { xmin: 0, xmax: window.innerWidth, ymin: 0, ymax: window.innerHeight },
	}: {
		id: string;
		title: string;
		children: Snippet<[]>;
		initialPosition: { x: number; y: number };
		bounds: { xmin: number; xmax: number; ymin: number; ymax: number };
	} = $props();

	let dragging = $state(false);
	let position = $state(initialPosition);
	let width = $state(0);
	let height = $state(0);
	let stack = $derived.by(() => {
		const index = windowStack.windows.findIndex((windowId) => windowId === id);
		if (index === -1) return 0;
		return index;
	});

	const onmousedown = () => {
		dragging = true;
		bringToFront(id);
		window.addEventListener('mousemove', onmousemove);
		window.addEventListener('mouseup', onmouseup);
	};

	const onmousemove = (event: MouseEvent) => {
		if (!dragging) return;
		position.x += event.movementX;
		position.y += event.movementY;
		
		if (position.x < bounds.xmin) position.x = bounds.xmin;
		if (position.x + width > bounds.xmax) position.x = bounds.xmax - width;
		if (position.y < bounds.ymin) position.y = bounds.ymin;
		if (position.y + height > bounds.ymax) position.y = bounds.ymax - height;
	};

	const onmouseup = () => {
		dragging = false;
		window.removeEventListener('mousemove', onmousemove);
		window.removeEventListener('mouseup', onmouseup);
	};

	const onclose = (e: MouseEvent) => {
		e.stopPropagation();
		console.log('close');
		// TODO: dispatch close event
	};

	const onminimize = (e: MouseEvent) => {
		e.stopPropagation();
		console.log('minimize');
		// TODO: dispatch minimize event
	};

	const onrestore = (e: MouseEvent) => {
		e.stopPropagation();
		console.log('close');
		// TODO: dispatch restore event
	};
</script>

<div
	{id}
	class="card absolute w-fit border-2 bg-surface-50 border-surface-950-50"
	style={`left: ${position.x}px; top: ${position.y}px; z-index: ${stack}`}
	role="dialog"
	aria-labelledby={`${id}-title`}
	bind:clientHeight={height}
	bind:clientWidth={width}
>
	<div
		class="flex items-center gap-3 border-b px-4 py-2 border-surface-950-50"
		{onmousedown}
		role="menubar"
		tabindex="0"
	>
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
		<span id={`${id}-title`} class="flex-1 text-right">{title}</span>
	</div>
	<div class="p-2">
		<div class="overflow-clip rounded-b-container">
			{@render children()}
		</div>
	</div>
</div>

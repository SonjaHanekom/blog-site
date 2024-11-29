export const windowStack: { windows: string[] } = $state({ windows: [] });

export function bringToFront(id: string) {
	windowStack.windows = windowStack.windows.filter((windowId) => windowId !== id);
	windowStack.windows.push(id);
}

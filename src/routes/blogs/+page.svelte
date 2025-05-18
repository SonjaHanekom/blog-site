<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import { Search } from 'lucide-svelte';

	let search = $state('');
    
    let { data } = $props();
    
    $inspect(data);
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

<h1>Blogs</h1>

<form class="flex gap-2" onsubmit={(e) => alert('Form submitted!')}>
	<Input class="flex-1" bind:value={search} />
	<Button provider="button" type="submit"><Search /></Button>
</form>


<ul class="mt-4">
    {#each data.posts as { slug, title, summary, date, tags }}
        <li>
            <a href={`/blogs/${slug}`}>
                <h2>{title}</h2>
                <p>{summary}</p>
                <sub>{date}</sub>
                {#each tags as tag}
                    <span class="surface-4">&num;{tag}</span>
                {/each}
            </a>
        </li>
    {/each}
</ul>
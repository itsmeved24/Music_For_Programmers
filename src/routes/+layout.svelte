<script lang="ts">

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png?v=4" sizes="any" type="image/png" />
	<link rel="shortcut icon" href="/favicon.png?v=4" type="image/png" />
	<link rel="apple-touch-icon" href="/favicon.png?v=4" />
</svelte:head>

{@render children?.()}

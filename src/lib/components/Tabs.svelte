<script>
  import { onMount } from "svelte";

  export let items = [];
  export let activeTabValue;

  onMount(() => {
    // Set default tab value
    if (Array.isArray(items) && items.length && items[0].value) {
      activeTabValue = items[0].value;
    }
  });

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<ul class="flex items-center justify-start space-x-3 pb-0.5">
  {#if Array.isArray(items)}
    {#each items as item}
      <li class="{activeTabValue === item.value ? 'cursor-pointer border-b-[3px] border-[#1877F2] text-[#1877F2]' : ''} cursor-pointer px-2 py-1 font-medium">
        <span on:click={handleClick(item.value)}>{item.label}</span>
      </li>
    {/each}
  {/if}
</ul>
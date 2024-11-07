<script lang="ts">
import type { List } from "mdast"
import ListItemBlock from "./ListItemBlock.svelte"

let { block }: {
    block: List;
} = $props()

let tag = $derived(block.ordered ? "ol" : "ul")
</script>
<svelte:element this={ tag }>
    {#each block.children as child}
        <ListItemBlock block={child}/>
    {/each}
</svelte:element>
<style>
ol, ul {
    margin: 0;
    padding: 0;
    margin-left: 1.2em;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

</style>

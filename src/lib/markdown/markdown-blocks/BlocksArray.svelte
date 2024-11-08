<script lang="ts">
import GenericBlock from "./GenericBlock.svelte"
import type { RootContent } from "mdast"

let { blocks }: {
    blocks: RootContent[];
} = $props()
</script>
<div class="blocks">
    {#each blocks as block}
        <GenericBlock {block}/>
    {/each}
</div>
<style>

.blocks {
    display: flex;
    flex-direction: column;
    gap: 12px;
    line-height: 1.5;
    text-align: justify;
    /* word-break: break-word; */
    /* hyphens: auto; */
}
</style>

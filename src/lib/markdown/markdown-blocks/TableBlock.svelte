<script lang="ts">
import type { Table } from "mdast"
import PhrasingContentArray from "./PhrasingContentArray.svelte"

let {
    block
}: {
    block: Table;
} = $props()

let columns = $derived(block.children?.[0].children.length ?? 0)
</script>
<div
    style:--columns={ columns }
    class="grid-table">
    {#each block.children as row, i}
        {#each row.children as cell}
            <div
                class="grid-cell"
                class:header={ i === 0 }>
                <PhrasingContentArray children={cell.children}/>
            </div>
        {/each}
    {/each}
</div>
<style>
.grid-table {
    font-size: 1.1rem;
    display: grid;
    border-radius: 8px;
    width: 100%;
    grid-template-columns: repeat(var(--columns), fit-content(100%));
    overflow: hidden;
    border: 1px solid rgba(var(--foreground-rgb), 0.1);
    box-shadow: 0 0 8px rgba(var(--foreground-rgb), 0.1);
}

.grid-cell {
    padding: 8px 12px;
    &::after {
        display: block;
        font-size: 0.1px;
    }
    &.header {
        background: rgba(var(--foreground-rgb), 0.1);
    }
    margin-right: -1px;
    margin-bottom: -1px;
    border-bottom: 1px solid rgba(var(--foreground-rgb), 0.1);
    border-right: 1px solid rgba(var(--foreground-rgb), 0.1);
    /* &:last-child {
        border-bottom-right-radius: 4px;
    } */
}
</style>

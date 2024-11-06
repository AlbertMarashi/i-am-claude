<script lang="ts">
import type { Blockquote } from "mdast"
import BlocksArray from "./BlocksArray.svelte"

let { block }: {
    block: Blockquote;
} = $props()

</script>
<blockquote>
    <inner>
        <BlocksArray blocks={block.children}/>
    </inner>
</blockquote>
<style>
blockquote {
    display: flex;
    margin: 16px 0;
    font-size: 1.1rem;
    align-items: center;
    inner {
        background: rgba(var(--foreground-rgb), 0.03);
        flex: 8;
        padding: 16px;
        border-radius: 24px;
        border-left: 8px solid rgba(var(--foreground-rgb), 0.15);
        border-right: 8px solid rgba(var(--foreground-rgb), 0.15);
    }
    &::before, &::after {
        content: "";
        height: 8px;
        width: 15px;
        background: rgba(var(--foreground-rgb), 0.15);
        border-radius: 8px;
        display: inline-flex;
    }
    &::before {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    &::after {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}
</style>

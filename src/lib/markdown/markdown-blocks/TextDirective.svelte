<script lang="ts">
import type { TextDirective } from "mdast-util-directive"
import Unsupported from "./Unsupported.svelte"
import PhrasingContentArray from "./PhrasingContentArray.svelte"

let {
    block
} : {
    block: TextDirective
} = $props()


</script>
{#if block.name === "note"}
    <hover>
        †
        <note>
            <PhrasingContentArray children={block.children}/>
        </note>
    </hover>
{:else}
    <Unsupported/>
{/if}

<style>

hover {
    display: inline-flex;
    position: relative;
    height: 2.5ch;
    padding: 1px 4px;
    background: rgba(var(--color-rgb, var(--brand-rgb)), 0.2);
    font-size: 16px;
    vertical-align: super;

    &:hover, &:active {
        note {
            display: inline-block;
        }
    }
}

note {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    width: max-content;
    max-width: 320px;
    font-size: 15px;
    display: none;
    --color-rgb: var(--foreground-rgb);
    border: 1px solid rgba(var(--foreground-rgb), 0.1);
    background: var(--background);
    padding:  6px;
    border-radius: 6px;
}
</style>

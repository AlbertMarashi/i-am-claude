<script lang="ts">
import type { LeafDirective } from "mdast-util-directive"
import Unsupported from "./Unsupported.svelte"
import BlocksArray from "./BlocksArray.svelte"
import PhrasingContentArray from "./PhrasingContentArray.svelte"

let {
    block
} : {
    block: LeafDirective
} = $props()


</script>
{#if block.name === "note"}
    <!-- <footnote>
        <PhrasingContentArray children={block.children}/>
    </footnote> -->
{:else if block.name === "youtube"}
    <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        frameborder="0"
        height="100%"
        src={`https://www.youtube.com/embed/${block?.attributes?.id}`}
        title="YouTube video player">
    </iframe>

{:else}
    <Unsupported/>
{/if}

<style>
iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
}
</style>

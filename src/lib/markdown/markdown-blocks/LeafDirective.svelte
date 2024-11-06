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
        height="315"
        src={`https://www.youtube.com/embed/${block?.attributes?.id}`}
        title="YouTube video player"
        width="560">
    </iframe>
{:else}
    <Unsupported/>
{/if}

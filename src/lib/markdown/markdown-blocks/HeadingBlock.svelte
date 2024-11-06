<script lang="ts">
import { get_plain_text } from "$lib/utils/markdown/plain_text"
import type { Heading } from "mdast"
import PhrasingContent from "./PhrasingContentArray.svelte"
import { getContext } from "svelte"

let { block }: {
    block: Heading;
} = $props()

let dedent = getContext<number>("dedent")

</script>
<svelte:element
    this={ "h" + (block.depth + dedent || 0) }
    id={encodeURIComponent(get_plain_text(block.children))}
    class="heading">
    <PhrasingContent children={block.children}/>
</svelte:element>
<style>

.heading {
    scroll-margin-top: 30px;
}
</style>

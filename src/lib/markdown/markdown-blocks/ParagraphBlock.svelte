<script lang="ts">
import type { Paragraph } from "mdast"
import PhrasingContentArray from "./PhrasingContentArray.svelte"

let { block }: {
    block: Paragraph;
} = $props()

</script>
<p>
    <PhrasingContentArray children={block.children}/>
</p>
<style>
p {
    margin: 0;
    width: 100%;
}
</style>

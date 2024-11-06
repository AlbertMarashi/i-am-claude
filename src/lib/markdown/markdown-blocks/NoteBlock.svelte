<script lang="ts">
import Callout from "$lib/display/Callout.svelte"
import type { ContainerDirective } from "mdast-util-directive"
import BlocksArray from "./BlocksArray.svelte"

let {
    block
}: {
    block: ContainerDirective
} = $props()

let type = $derived(block.name as "warning" | "error" | "note" | "success")
</script>
<Callout type={type}>
    <BlocksArray blocks={block.children}/>
</Callout>

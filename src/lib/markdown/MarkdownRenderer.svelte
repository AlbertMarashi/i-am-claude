<script lang="ts">
import BlocksArray from "./markdown-blocks/BlocksArray.svelte"
import { generate_ast } from "$lib/utils/markdown/ast"
import PhrasingContentArray from "./markdown-blocks/PhrasingContentArray.svelte"
import { setContext } from "svelte"

let {
    markdown = "",
    dedent = 0,
} : {
    markdown?: string,
    legal_mode?: boolean,
    dedent?: number,
} = $props()

setContext("dedent", dedent)

let ast = $derived(generate_ast(markdown))

</script>
{#if ast.children.length === 1 && ast.children[0].type === "paragraph"}
    <span>
        <PhrasingContentArray children={ast.children[0].children}/>
    </span>
{:else}
    <BlocksArray blocks={ast.children}/>
{/if}
<style>

</style>

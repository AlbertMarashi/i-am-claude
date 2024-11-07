<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import CheckboxBlank from "svelte-material-icons/CheckboxBlank.svelte"
import CheckboxMarked from "svelte-material-icons/CheckboxMarked.svelte"
import BlocksArray from "./BlocksArray.svelte"
import type { ListItem } from "mdast"

let { block }: {
    block: ListItem;
} = $props()

</script>
<li>
    {#if typeof block.checked === "boolean"}
        <Icon icon={block.checked ? CheckboxMarked : CheckboxBlank}/>
    {/if}
    <BlocksArray blocks={block.children}/>
</li>
<style>
li {
    margin: 0;
    padding-left: 0.5em;
    &::marker {
        font-weight: 600;
    }
}
</style>

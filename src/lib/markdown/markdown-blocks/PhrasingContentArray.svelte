<script lang="ts">
import type { PhrasingContent } from "mdast"
import PhrasingContentComponent from "./PhrasingContent.svelte"

let { children }: {
    children: PhrasingContent[];
} = $props()
</script>
{#each children as block}
    <PhrasingContentComponent {block}/>
{/each}

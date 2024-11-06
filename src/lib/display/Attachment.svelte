<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import FileOutline from "svelte-material-icons/FileDocumentOutline.svelte"

let {
    name,
    icon = true
}: {
    icon?: boolean,
    name: string
} = $props()
</script>
<a
    class="attachment"
    href={`/documents/${name}`}>
    {#if icon}
        <Icon icon={FileOutline}/>
    {/if}
    { name }
</a>
<style>
.attachment {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    --size: 18px;
}
</style>

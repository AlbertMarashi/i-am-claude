<script lang="ts">
import type { ContainerDirective } from "mdast-util-directive"
import type { Paragraph } from "mdast"
import BlocksArray from "./BlocksArray.svelte"
import PhrasingContentArray from "./PhrasingContentArray.svelte"
import Alert from "svelte-material-icons/Alert.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Checkcircle from "svelte-material-icons/CheckCircle.svelte"
import HelpCircle from "svelte-material-icons/HelpCircle.svelte"

import Icon from "$lib/display/Icon.svelte"

let {
    block
}: {
    block: ContainerDirective
} = $props()

let type = $derived(block.name as "red" | "orange" | "green" | "blue" | "purple")

let label = $derived(block.children.find(child => (child.data as { directiveLabel?: boolean })?.directiveLabel === true)) as Paragraph
let children = $derived(block.children.filter(child => !(child.data as { directiveLabel?: boolean })?.directiveLabel))

$inspect(block)

const icons = {
    red: Alert,
    orange: Alert,
    green: Checkcircle,
    blue: Information,
    purple: HelpCircle
}
</script>
<callout class={type}>
    {#if label}
        <callout-title>
            <Icon icon={icons[type]}/>
            <PhrasingContentArray children={label.children}/>
        </callout-title>
    {/if}
    {#if children.length > 0}
        <BlocksArray blocks={children}/>
    {/if}
</callout>

<style>
callout {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
    font-size: 1.2rem;
    font-weight: 500;
    background: rgba(var(--color-rgb), 0.05);
    border-left: 4px solid rgba(var(--color-rgb), 1);
    /* border-radius: 16px; */
    &.red {
        --color-rgb: var(--red-rgb);
    }
    &.orange {
        --color-rgb: var(--orange-rgb);
    }
    &.green {
        --color-rgb: var(--green-rgb);
    }
    &.blue {
        --color-rgb: var(--blue-rgb);
    }
    &.purple {
        --color-rgb: var(--purple-rgb);
    }
    color: color-mix(in srgb, rgba(var(--foreground-rgb), 1) 80%, rgba(var(--color-rgb), 1));
    callout-title {
        color: color-mix(in srgb, rgba(var(--foreground-rgb), 1) 50%, rgba(var(--color-rgb), 1));
        background: rgba(var(--color-rgb), 0.1);
        padding: 0 6px;
        border-radius: 6px;
        align-self: start;
        --size: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 800;
        font-size: 20px;
    }
}

</style>

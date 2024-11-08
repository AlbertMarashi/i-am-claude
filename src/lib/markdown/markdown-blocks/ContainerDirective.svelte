<script lang="ts">
import type { ContainerDirective } from "mdast-util-directive"
import Message from "$lib/ui/ai/Message.svelte"
import Unsupported from "./Unsupported.svelte"
import SpoilerBlock from "./SpoilerBlock.svelte"
import BlocksArray from "./BlocksArray.svelte"
import GenericBlock from "./GenericBlock.svelte"
import NoteBlock from "./NoteBlock.svelte"

let { block }: {
    block: ContainerDirective;
} = $props()

</script>
{#if ["red", "orange", "green", "blue", "purple"].includes(block.name)}
    <NoteBlock block={block}/>
{:else if "spoiler" === block.name}
    <SpoilerBlock block={block}/>
{:else if "user" === block.name}
    <Message role={block.name}>
        <BlocksArray blocks={block.children}/>
    </Message>
{:else if "claude" === block.name || "chatgpt" === block.name}
    <Message role={block.name}>
        <BlocksArray blocks={block.children}/>
    </Message>
{:else if "columns" === block.name}
    <div
        style:padding={ block?.attributes?.padding }
        class="columns">
        {#each block.children as child}
            <GenericBlock block={child}/>
        {/each}
    </div>
{:else if "column" === block.name}
    <div class="column">
        <BlocksArray blocks={block.children}/>
    </div>
{:else if "wide" === block.name}
    <div class="wide">
        <inner>
            <BlocksArray blocks={block.children}/>
        </inner>
    </div>
{:else if "thread" === block.name}
    <thread>
        <!-- <thread-name>Thread</thread-name> -->
        <BlocksArray blocks={block.children}/>
    </thread>
{:else}
    <Unsupported/>
{/if}

<style>
.wide {
    display: flex;
    align-items: center;
    justify-content: center;
    inner {
        min-width: min(70vw, 1200px);
    }
}

.columns {
    display: flex;
    font-size: 0.8em;
    padding: 24px 0;
    gap: 32px;
    flex-direction: row;
    @media (max-width: 800px) {
        flex-direction: column;
        gap: 16px;
    }
}

.column {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
}

thread {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 16px;
    font-size: 1.1rem;
    /* color: white; */
    background: rgba(var(--foreground-rgb), 0.01);
    /* background: linear-gradient(rgba(var(--foreground-rgb), 0.02), rgba(var(--foreground-rgb), 0.1)); */
    border: 1px solid rgba(var(--foreground-rgb), 0.1);
    box-shadow: inset 0 0 8px rgba(var(--foreground-rgb), 0.1);
    /* border-radius: 24px; */
    gap: 16px;
    /* thread-name {
        font-family: "Urbanist", sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: rgba(var(--foreground-rgb), 0.5);
        border: 1px solid rgba(var(--foreground-rgb), 0.1);
        padding: 1px 8px;
        border-radius: 50px;
        align-self: center;
    } */
}
</style>

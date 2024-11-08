<script lang="ts">
import type { PhrasingContent } from "mdast"
import PhrasingContentArray from "./PhrasingContentArray.svelte"
import Unsupported from "./Unsupported.svelte"
import Disallowed from "./Disallowed.svelte"
import TextDirective from "./TextDirective.svelte"

let { block }:  {
    block: PhrasingContent;
} = $props()

</script>
{#if block.type === "text"}
    { block.value }
{:else if block.type === "emphasis"}
    <em>
        <PhrasingContentArray children={block.children}/>
    </em>
{:else if block.type === "strong"}
    <strong>
        <PhrasingContentArray children={block.children}/>
    </strong>
{:else if block.type === "break"}
    <br/>
{:else if block.type === "delete"}
    <del>
        <PhrasingContentArray children={block.children}/>
    </del>
{:else if block.type === "inlineCode"}
    <code class="inline">
        { block.value }
    </code>
{:else if block.type === "link"}
    <a
        href={block.url}
        target="_blank">
        <PhrasingContentArray children={block.children}/>
    </a>
{:else if block.type === "image"}
    <img
        alt={block.alt}
        src={block.url}/>
{:else if block.type === "html"}
    <Disallowed msg="HTML inside of Markdown blocks is not supported."/>
{:else if block.type === "textDirective"}
    <TextDirective {block}/>
{:else}
    <Unsupported/>
{/if}
<style>

code {
    font-family: "Fira Code", monospace;
    font-size: 0.8em;
    line-height: 1.5;
    &.inline {
        display: inline;
        background: rgba(var(--color-rgb, var(--brand-rgb)), 0.1);
        padding: 1px 4px;
        margin: 0 2px;
        border-radius: 4px;
    }
}

a {
    font-weight: 600;
    background: rgba(var(--brand-rgb), 0.1);
    padding: 0 4px;
    border-radius: 8px;
}

strong {
    background: rgba(var(--color-rgb, var(--brand-rgb)), 0.15);
    border-radius: 4px;
    padding: 0 4px;
}

em {
    border: 1px solid rgba(var(--color-rgb, var(--brand-rgb)), 0.2);
    background: rgba(var(--color-rgb, var(--brand-rgb)), 0.05);
    padding: 0 4px;
    border-radius: 4px;
}

img {
    width: 100%;
}
</style>

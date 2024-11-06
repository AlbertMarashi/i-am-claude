<script lang="ts">
import MarkdownRenderer from "$lib/markdown/MarkdownRenderer.svelte"
import type { Snippet } from "svelte"


let {
    content,
    role,
    children
}: {
    content?: string;
    children?: Snippet,
    role: "user" | "claude" | "chatgpt"
} = $props()
</script>
<message
    class:chatgpt={ role === "chatgpt" }
    class:claude={ role === "claude" }
    class:user={ role === "user" }>
    <role>{ role === "user" ? "Me" : role === "claude" ? "Claude" : "ChatGPT" }</role>
    <content>
        {#if content}
            <MarkdownRenderer markdown={content} />
        {:else if children}
            {@render children()}
        {/if}
    </content>
</message>
<style>

message {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 16px;
    font-family: Urbanist;
    font-size: 1rem;
    /* outline: 1px solid rgba(var(--foreground-rgb), 0.1); */
    font-weight: 450;
    outline-offset: -1px;
    min-width: 40%;
    gap: 4px;
    background: var(--background);
    /* box-shadow: 0 4px 8px -4px rgba(var(--foreground-rgb), 0.1); */
    /* border: 1px solid rgba(var(--color-rgb), 0.1); */
    &.claude {
        --color-rgb: 22, 12, 10;
        background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(var(--color-rgb), 0.1));
    }
    &.chatgpt {
        --color-rgb: 0,0,100;
        background-image: linear-gradient(rgba(var(--color-rgb), 0.1), rgba(var(--color-rgb), 0.3));
    }
    &.user {
        --color-rgb: 20, 80, 255;
        background-image: linear-gradient(#E6EBEF, #D7DFE5);
        align-self: start;
    }

    :global {
        em {
            background: none;
            border: none;
            padding: 0;
            opacity: 0.7;
        }
    }
}

role {
    font-size: 0.7em;
    color: rgba(var(--color-rgb));
    text-transform: uppercase;
    font-style: italic;
    opacity: 0.5;
    font-weight: bold;
    margin-bottom: 0.5em;
    border-radius: 50px;
    padding: 2px 8px;
    border: 1px solid rgba(var(--color-rgb), 0.4);
    background: rgba(var(--color-rgb), 0.1);
    align-self: start;
}

content {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}
</style>

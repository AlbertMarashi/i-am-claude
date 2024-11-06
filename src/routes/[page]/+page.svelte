<script lang="ts">
import MarkdownRenderer from "$lib/markdown/MarkdownRenderer.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Icon from "$lib/display/Icon.svelte"
import TableOfContents from "./TableOfContents.svelte"

let {
    data
} = $props()


</script>
<svelte:head>
    <title>{ data.page.title }</title>
</svelte:head>
{#key data.page.slug}
    <scroll-area>
        <main>
            <TableOfContents markdown={data.page.body}/>
            <MarkdownRenderer markdown={data.page.body}/>
        </main>
    </scroll-area>
{/key}
{#if data.next_page}
    <pagination>
        <inner>
            <info>
                <strong>Next Section:</strong>
                <page-title>
                    { data.next_page.title }
                </page-title>
            </info>

            <a
                class="next"
                href="/{data.next_page.slug}">
                Next <Icon icon={ChevronRight} />
            </a>
        </inner>
    </pagination>
{/if}
<style>

scroll-area {
    position: relative;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    width: 100%;
    flex: 1 1 0;
    padding: 60px 24px;
    font-family: "Cormorant", sans-serif;
}

main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.4em;
    width: 100%;
    /* font-family: "Urbanist", sans-serif; */
    :global {
        h1, h2, h3, h4, h5, h6 {
            &:not(:first-child) {
                padding-top: 1em;
            }
            /* font-family: "Cormorant", sans-serif; */
        }
    }
}

pagination {
    display: flex;
    /* position: sticky;
    bottom: 0; */
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(var(--foreground-rgb), 0.1);
    width: 100%;
    inner {
        padding: 16px;
        display: flex;
        width: 100%;
        max-width: 700px;
        gap: 24px;
        justify-content: space-between;
        align-items: center;
        info {
            display: flex;
            flex-direction: column;
            gap: 4px;
            strong {
                font-weight: bold;
            }
            page-title {
                font-weight: 500;
                color: rgba(var(--foreground-rgb), 0.8);
            }
        }

        .next {
            display: flex;
            gap: 8px;
            align-items: center;
            background: rgba(var(--foreground-rgb), 1);
            padding: 12px 18px;
            border-radius: 50px;
            color: rgba(var(--background-rgb), 1);
            font-weight: bold;
            text-decoration: none;
            transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
            &:hover {
                background: color-mix(in srgb, rgba(var(--brand-rgb), 1) 50%, rgba(var(--foreground-rgb), 1));
                /* color: rgba(var(--brand-rgb), 1); */
            }
        }
    }
}
</style>

<script lang="ts">
import { generate_ast } from "$lib/utils/markdown/ast"
import { get_plain_text } from "$lib/utils/markdown/plain_text"


let {
    markdown
}: {
    markdown: string
} = $props()

let ast = $derived(generate_ast(markdown))

let headings = $derived(ast.children.filter(node => node.type === "heading"))

</script>
<table-of-contents>
    <toc-title>In this article</toc-title>
    {#each headings as heading}
        <a
            style:padding-left="{ (heading.depth ) * 16 }px"
            class="heading"
            href="#{encodeURIComponent(get_plain_text(heading.children).toLowerCase())}">
            { get_plain_text(heading.children) }
        </a>
    {/each}
</table-of-contents>
<style>

toc-title {
    font-weight: bold;
    /* font-family: "Urbanist", sans-serif; */
    font-size: 16px;
    opacity: 0.5;
    text-transform: uppercase;
    padding-bottom: 8px;
}

table-of-contents {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 8px;
    background: rgba(var(--background-rgb), 1);
    border: 1px solid rgba(var(--foreground-rgb), 0.1);
    a {
        /* font-family: "Urbanist", sans-serif; */
        font-weight: 700;
        font-size: 16px;
        padding: 6px 8px;
        color: rgba(var(--foreground-rgb), 0.8);
        text-decoration: none;
        border-radius: 4px;
        &:hover {
            background: rgba(var(--brand-rgb), 0.1);
            color: rgba(var(--brand-rgb), 1);
        }
    }
}
</style>

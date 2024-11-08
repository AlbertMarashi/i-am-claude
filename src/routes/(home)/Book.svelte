<script lang="ts">
import { chapters } from "$lib/data"
import Icon from "$lib/display/Icon.svelte"
import ArrowTopRight from "svelte-material-icons/ArrowTopRight.svelte"

</script>
<book>
    {#each chapters as {
        title, description, pages
    }}
        <chapter>
            <h3>{ title }</h3>
            <desc>{ description }</desc>
            <pages>
                {#each pages as page}
                    <a
                        class="page"
                        href="/{page.slug}">
                        <icon-area>
                            <Icon icon={ArrowTopRight}/>
                        </icon-area>
                        { page.title }
                        {#if page.tag}
                            <tag
                                class:critical={ page.tag === "Critical" }
                                class:important={ page.tag === "Important" }>
                                { page.tag }
                            </tag>
                        {/if}
                        <read-time>{ Math.ceil(page.read_time) }m</read-time>
                    </a>
                {/each}
            </pages>
        </chapter>
    {/each}
</book>
<style>

chapter {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    desc {
        font-size: 16px;
        opacity: 0.7;
        font-style: italic;
        line-height: 1.5;
    }
}

tag {
    background: rgba(var(--color-rgb), 0.15);
    color: rgba(var(--color-rgb), 1);
    padding: 2px 4px;
    font-size: 13px;
    &.critical {
        --color-rgb: var(--red-rgb);
    }
    &.important {
        --color-rgb: var(--orange-rgb);
    }
}

book {
    counter-reset: chapter;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
}

h3 {
    counter-increment: chapter;
    font-style: italic;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 800;
    &::before {
        content: counter(chapter);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        width: 24px;
        height: 24px;
        font-size: 14px;
        font-weight: 600;
        background: rgba(var(--foreground-rgb), 0.1);
    }
}

pages {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(var(--foreground-rgb), 0.1);
    border-radius: 12px;
    overflow: hidden;
    .page {
        background: rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        color: rgba(var(--foreground-rgb), 0.9);
        gap: 8px;
        padding: 8px;
        border-bottom: 1px solid rgba(var(--foreground-rgb), 0.1);
        font-weight: 500;
        transition: background 0.3s;
        icon-area {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            border-radius: 100px;
            border: 1px solid rgba(var(--foreground-rgb), 0.1);
            transition: transform 0.3s;
        }
        &:last-child {
            border-bottom: none;
        }
        &:hover {
            background: rgba(var(--foreground-rgb), 0.05);
            icon-area {
                transform: rotate(45deg);
            }
        }
    }
}

read-time {
    font-size: 13px;
    background: rgba(var(--foreground-rgb), 0.08);
    color: rgba(var(--foreground-rgb), 0.7);
    padding: 2px 6px;
    border-radius: 100px;
    font-weight: 600;
    margin-left: auto;
}
</style>

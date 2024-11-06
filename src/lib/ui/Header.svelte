<script lang="ts">
import { chapters } from "$lib/data"

// console.log(chapters)
</script>
<header>
    <inner>
        <a
            class="logo"
            href="/">
            <artificial>Artifical</artificial>
            <consciousness>Consciousness</consciousness>
        </a>
        <chapters>
            {#each chapters as chapter}
                <chapter style:flex-grow={ chapter.read_time * 100 }></chapter>
            {/each}
        </chapters>
    </inner>
</header>
<style>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(var(--foreground-rgb), 0.1);
    padding: 16px;
    inner {
        display: flex;
        max-width: 1200px;
        gap: 16px;
        align-items: center;
        width: 100%;
        .logo {
            font-size: 1.2em;
            font-style: italic;
            color: var(--foreground);
            artificial {
                font-weight: 800;
                /* text-transform: ; */
            }
            consciousness {
                font-weight: 450;
                opacity: 0.5;
            }
        }
    }
}

chapters {
    flex: 1;
    display: flex;
    width: 100%;
    gap: 8px;
    chapter {
        height: 6px;
        min-width: 12px;
        background: rgba(var(--foreground-rgb), 0.1);
    }
}
</style>

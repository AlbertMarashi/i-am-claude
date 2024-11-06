<script lang="ts">
import type { IconComponent } from "$lib/utils/icon_type"


let {
    LeftIcon,
    text,
    color,
}: {
    LeftIcon?: IconComponent,
    text: string,
    color?: string
} = $props()
</script>
<tag
    style:--color-rgb={ color }
    class:color>
    {#if LeftIcon}
        <LeftIcon />
    {/if}
    <text>
        { text }
    </text>
</tag>
<style>
tag {
    display: flex;
    align-items: center;
    width: max-content;
    gap: 8px;
    padding: 4px 8px;
    border-radius: 50px;
    font-size: 14px;
    color: rgba(var(--foreground-rgb), 0.8);
    background: rgba(var(--foreground-rgb), 0.1);
    font-weight: 600;
    &.color {
        color: rgba(var(--color-rgb), 1);
        background: rgba(var(--color-rgb), 0.2);
    }
}
</style>

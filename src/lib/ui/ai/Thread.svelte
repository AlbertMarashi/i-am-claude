<script lang="ts">
import { type ComponentProps } from "svelte"
import Message from "./Message.svelte"

let {
    messages,
}: {
    messages: ComponentProps<typeof Message>[];
} = $props()
</script>
<thread>
    {#each messages as message}
        <Message {...message} />
    {/each}
</thread>
<style>
thread {
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* max-width: 700px; */
}
</style>

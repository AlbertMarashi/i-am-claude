<script lang="ts">

let {
    msg,
}: {
    msg: string
} = $props()
</script>
<disallowed>
    { msg }
</disallowed>
<style>
disallowed {
    background: rgba(var(--red-rgb), 0.1);
    color: var(--red);
    border-radius: 4px;
    border: 1px solid rgba(var(--red-rgb), 0.2);
    font-size: 12px;
    padding: 2px 8px;
    margin: 0 4px;
}
</style>

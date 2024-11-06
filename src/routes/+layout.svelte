<script lang="ts">
import "./global.css"
import "./variables.css"
import "./normalise.css"
import Header from "$lib/ui/Header.svelte"
// import Sidebar from "$lib/ui/Sidebar.svelte"

let { children } = $props()

</script>
<page>
    <Header/>
    <content>
        {@render children()}
    </content>
</page>
<!-- <layout>
    <Sidebar />
</layout> -->
<style>

page {
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 1;
    background: rgba(255, 255, 255, 0.5);
    /* background: rgba(var(--foreground-rgb), 0.05); */
}

content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    overflow-y: auto;
}
</style>

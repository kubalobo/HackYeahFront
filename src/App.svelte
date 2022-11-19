<script>
    import { onMount } from "svelte";
    import svelteLogo from "./assets/svelte.svg";
    import Counter from "./lib/Counter.svelte";
    import Menu from "./Menu.svelte";
</script>

<main>
    <Menu />

    <section class="content">
        <h1>Hello {name}!</h1>
    </section>
</main>

<style lang="scss">
    
    :global(body) {
        margin: 0;
        padding: 0;
    }
    main {
        display: grid;
        grid-template: "nav content" min-content;
        color: $primary;
    }
    .content {
        grid-area: content;
    }

</style>

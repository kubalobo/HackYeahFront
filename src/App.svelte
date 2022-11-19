<script>
    import { onMount } from "svelte";
    import svelteLogo from "./assets/svelte.svg";
    import Counter from "./components/Counter.svelte";
    import Menu from "./components/Menu.svelte";
    import Router from "./components/Router.svelte";
</script>

<main>
    <Menu />

    <section class="content">
        <Router />
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

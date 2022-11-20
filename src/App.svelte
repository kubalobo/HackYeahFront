<script>
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
    display: flex;
    color: $primary;
  }
  .content {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
</style>

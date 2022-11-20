<script>
    import { onMount } from "svelte";
    import Menu from "./components/Menu.svelte";
    import Router from "./components/Router.svelte";
    import ky from "ky";
    import { backendData } from "./stores/stores";
    import Modal from "svelte-simple-modal";

    onMount(async () => {
        const json = await ky
            .get("https://hackyeah-back-xm25a4lxpa-lm.a.run.app/hello/kuba")
            .json();

    backendData.set(json);

        console.log("Data fetched!");
    });
</script>

<main>
    <Modal>
        <Menu />

        <section class="content">
            <Router />
        </section>
    </Modal>
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

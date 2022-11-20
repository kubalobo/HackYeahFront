<script>
    import Searcher from "../components/atom/Searcher.svelte";
    import EntityRecord from "../components/EntityRecord.svelte";
    import Button from "../components/atom/Button.svelte";

    import { getContext, onMount } from "svelte";
    import ky from "ky";
    import ImportModal from "../components/ImportModal.svelte";
    const { open } = getContext("simple-modal");
    const showModal = () => open(ImportModal);

    let visibleEntities;

    onMount(async () => {
        const json = await ky
            .get("https://hackyeah-back-xm25a4lxpa-lm.a.run.app/get/entities")
            .json();

        console.log(json);

        visibleEntities = json;

        console.log("Data fetched!");
    });
</script>

<div class="header">
    <div>
        <Searcher />
        <Button color="orange" text="Import" onClick={showModal} />
    </div>

    <div class="filters">
        <Button text="institutions" filter />
        <Button text="companies" color="violet" filter />
        <Button text="finfluencers" color="orange" filter />
    </div>
</div>

{#if visibleEntities}
    <div class="records">
        {#each visibleEntities as entity}
            <EntityRecord name={entity.name} 
                imgSrc={entity.profile_image_url}
                id={entity.id}
                location={entity.location}
            />
        {/each}
    </div>
{/if}

<style lang="scss">
    div {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    div.header {
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 0;
        background: $white;
        z-index: 10;
        padding: 20px;
    }
    div.filters {
        justify-content: flex-start;
    }

    div.records {
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        padding: 20px;
    }
</style>

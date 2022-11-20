<script>
    import Searcher from "../components/atom/Searcher.svelte";
    import EntityRecord from "../components/EntityRecord.svelte";
    import Button from "../components/atom/Button.svelte";

    import { getContext, onMount } from "svelte";
    import ky from "ky";
    import ImportModal from "../components/ImportModal.svelte";
    import App from "../App.svelte";
    import Card from "../components/atom/Card.svelte";
    const { open } = getContext("simple-modal");
    const showModal = () => open(ImportModal);

    let visibleEntities;
    let searchQuery = "";
    let selectedCategories = [];
    let categoryQuery = "";

    function debounce(callback, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                callback.apply(this, args);
            }, wait);
        };
    }

    window.addEventListener(
        "keyup",
        debounce(() => {
            console.log(searchQuery);
            loadEntites();
        }, 1000)
    );

    $: debounce();

    async function loadEntites() {
        const json = await ky
            .post(
                "https://hackyeah-back-xm25a4lxpa-lm.a.run.app/get/entities",
                { json: { categories: "finfluencer" } }
            )
            .json();


            // text: { "$regex": "searchQuery" }
        console.log(json);

        visibleEntities = json;

        console.log("Data fetched!");
    }

    onMount(async () => {
        loadEntites();
    });
</script>

<div class="header">
    <div>
        <Searcher bind:searchQuery />
        <Button color="orange" text="Import" onClick={showModal} />
    </div>

    <div class="filters">
        <Button
            text="institutions"
            filter={!selectedCategories.includes("institutions")}
            onClick={() => {
                if (selectedCategories.includes("institutions")) {
                    selectedCategories = selectedCategories.filter(
                        (e) => e !== "institutions"
                    );
                } else {
                    selectedCategories = [
                        ...selectedCategories,
                        "institutions",
                    ];
                }
            }}
        />
        <Button
            text="companies"
            color="violet"
            filter={!selectedCategories.includes("companies")}
            onClick={() => {
                if (selectedCategories.includes("companies")) {
                    selectedCategories = selectedCategories.filter(
                        (e) => e !== "companies"
                    );
                } else {
                    selectedCategories = [...selectedCategories, "companies"];
                }
            }}
        />
        <Button
            text="finfluencers"
            color="orange"
            filter={!selectedCategories.includes("finfluencers")}
            onClick={() => {
                if (selectedCategories.includes("finfluencers")) {
                    selectedCategories = selectedCategories.filter(
                        (e) => e !== "finfluencers"
                    );
                } else {
                    selectedCategories = [
                        ...selectedCategories,
                        "finfluencers",
                    ];
                }
            }}
        />
    </div>
</div>

{#if visibleEntities}
    <div class="records">
        {#each visibleEntities as entity}
            <EntityRecord
                name={entity.name}
                imgSrc={entity.profile_image_url}
                id={entity.id}
                location={entity.location}
                username={entity.username}
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

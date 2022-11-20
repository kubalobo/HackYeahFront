<script>
    import { loop_guard } from "svelte/internal";
    import Button from "./atom/Button.svelte";
    import UploadCSV from "./UploadCSV.svelte";
    import ky from "ky";

    let mode = "names";
    let imported = false;
</script>

<h1>Import supervised entities in CSV format</h1>

<div class="filters">
    <Button
        text="Names"
        filter={mode !== "names"}
        onClick={() => {
            mode = "names";
        }}
    />
    <Button
        text="Twitter profiles"
        color="violet"
        filter={mode !== "links"}
        onClick={() => {
            mode = "links";
        }}
    />
</div>

<div class="description">
    Line example:<br />
    {#if mode === "names"}
        entityName;nip;category
    {:else}
        link
    {/if}
</div>

<UploadCSV
    onUpload={async (csvData) => {
        console.log("this is the parsed data converted to CSV: ", csvData);
        imported = true;

        if (mode === "names") {
            const json = await ky
                .post(
                    "https://hackyeah-back-xm25a4lxpa-lm.a.run.app/hello/kuba"
                )
                .json();
        } else {
            console.log("Links!");
            const json = await ky
                .post(
                    "https://hackyeah-back-xm25a4lxpa-lm.a.run.app/hello/kuba"
                )
                .json();
        }
    }}
/>

{#if imported}
    <h1>Success! Data have been sent to the server</h1>
{/if}

<style>
    div {
        margin: 20px;
    }
    .filters {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
    .description {
        text-align: center;
        color: #6f6f6f;
    }
</style>

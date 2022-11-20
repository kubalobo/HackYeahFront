<script>
    import { backendData } from "../stores/stores";

    import { getContext } from "svelte";
    import ImportModal from "../components/ImportModal.svelte";
    const { open } = getContext("simple-modal");
    const showSurprise = () => open(ImportModal);
</script>

Profile

<h1>{$backendData.message}</h1>

<p>
    <button on:click={showSurprise}>Show me a surprise!</button>
</p>

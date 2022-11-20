<script>
    import UploadCSV from "./UploadCSV.svelte";
</script>

<h2>Import supervised entities in CSV format</h2>

<UploadCSV
    onUpload={(csvData) =>
        console.log("this is the parsed data converted to CSV: ", csvData)}
    dataToCSV={[
        ["hello", "nice"],
        ["convert", "to", "csv"],
    ]}
/>

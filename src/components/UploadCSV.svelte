<script>
  import PapaParse from "papaparse";

  export let onUpload;

  export let dataToCSV = [];
  let prevDataToCSV;

  export let allowedFileExtensions = ["csv"];

  let maxFileSize = 3145728;

  // this is the variable that the file gets bound to
  let uploader;

  $: {
    // called on props change
    if (dataToCSV !== prevDataToCSV && dataToCSV.length !== 0) {
      prevDataToCSV = dataToCSV;
      const csvData = PapaParse.unparse(dataToCSV);
      onUpload
        ? onUpload(csvData)
        : console.log(
            "Remember to define an onUpload function as props. CSV Data:",
            csvData
          );
    }
  }

  function uploadFile(event) {
    event.preventDefault();
    const file = uploader.files[0];

    const fileExtensionArray = file.type.split("/");
    const fileExtension = fileExtensionArray[fileExtensionArray.length - 1];

    if (file.size > maxFileSize) {
      console.log("Above the max file size threshold");
      return;
    }
    if (fileExtension.includes("csv") && file.size < maxFileSize) {
      const csvData = PapaParse.parse(file, {
        complete: (results) => {
          onUpload
            ? onUpload(results.data)
            : console.log(
                "Remember to define an onUpload function as props. Parsed CSV:",
                results.data
              );
        },
      });
    } else if (allowedFileExtensions.includes(fileExtension)) {
      onUpload
        ? onUpload(file)
        : console.log(
            "Remember to define an onUpload function as props. Plain file:",
            file
          );
    } else {
      console.log("Not an allowed file type");
    }
  }
</script>

<div>
  <input
    bind:this={uploader}
    on:change={uploadFile}
    name="file"
    id="file"
    type="file"
    class="inputfile"
  />
  <label for="file">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="17"
      viewBox="0 0 20 17"
      ><path
        d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
      /></svg
    >
    <span>Choose a file…</span>
  </label>
</div>

<style>
  div {
    text-align: center;
    margin: 25px;
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    /* color: white; */
    /* background-color: black; */
    display: inline-block;
    cursor: pointer;
    padding: 10px;
  }

  .inputfile:focus + label,
  .inputfile + label:hover {
    filter: invert(50%) sepia(40%) saturate(1702%) hue-rotate(162deg)
      brightness(95%) contrast(104%);
  }
</style>

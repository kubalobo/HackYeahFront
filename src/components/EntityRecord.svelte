<script>
    import searcherIcon from "../assets/icons/searcher.svg";
    import Button from "./atom/Button.svelte";

    export let name = "Name";
    export let location = "Location";
    export let id = "9999999";
    export let username = "username";
    export let imgSrc = searcherIcon;
</script>

<div class="record">
    <div class="logo margin">
        <img src={imgSrc} alt="logo" />
    </div>
    <div class="column margin">
        <h1>{name}</h1>
        <div style="display: flex">
            <div class="column info">
                <h2>Twitter ID: {id}</h2>
                <h2>Location: {location}</h2>
            </div>
            <div class="column info">
                <!-- <h2>Name: value</h2>
        <h2>Name: value</h2>
        <h2>Name: value</h2> -->
            </div>
        </div>
        <div class="buttons">
            <Button
                text="Open twitter profile"
                onClick={() => {
                    window.open("https://twitter.com/" + username, "_blank");
                }}
            />
            <Button text="Go to posts" />
        </div>
    </div>
</div>

<style lang="scss">
    div.record {
        width: 100%;
        border: none;
        border-radius: 20px;
        background: $white;
        outline: inherit;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        display: flex;
        position: relative;
    }

    div.logo {
        width: 160px;
        border: none;
        background: transparent;
        outline: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.margin {
        margin: 20px;
    }

    div.column {
        display: flex;
        flex-direction: column;
        flex: 1;
        row-gap: 10px;
    }

    div.info {
        color: $dark;
        row-gap: 0px;
    }

    div.buttons {
        display: flex;
        justify-content: flex-end;
        gap: 20px;
    }
</style>

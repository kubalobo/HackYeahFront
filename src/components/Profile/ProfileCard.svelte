<script>
    export let name = "Anna Kowalska";
</script>

<div class="record">
    <div class="logo margin">
        <!-- <img src={searcherIcon} alt="logo" /> -->
    </div>
    <div class="column margin">
        <h1>{name}</h1>
        <div style="display: flex">
            <div class="column info">
                <h2>ID: 75116845</h2>
                <h2>Last login: 20.11.2022</h2>
                <!-- <h2>Name: value</h2> -->
            </div>
            <div class="column info">
                <h2>Total incidents handled: 496</h2>
                <!-- <h2>Name: value</h2> -->
                <!-- <h2>Name: value</h2> -->
            </div>
        </div>
        <!-- <div class="buttons">
            <Button text="Go to posts" />
        </div> -->
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
    }
</style>

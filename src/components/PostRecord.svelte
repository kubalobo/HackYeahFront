<script>
    import Button from "./atom/Button.svelte";
    import Post from "./Post.svelte";

    export let data = {
        author: {
            id: 1206024474,
            name: "Urząd KNF",
            username: "uknf",
            url: "https://twitter.com/uknf",
            date: "2014-02-04T12:45:21Z",
        },
        localization: "Warszawa, Polska",
        text: " Stała czy zmienna stopa oprocentowania kredytu mieszkaniowego? Zdecyduj świadomie ‼️\n🔸 Zachęcamy do zapoznania się z materiałem informacyjnym przygotowanym przez @uknf!\n🔸 Materiał dostępny jest tutaj: https://t.co/h1qyIHfXjS\\n🔸 Wersja pdf do pobrania: https://t.co/Rnw8FYi0W8 https://t.co/b5gWtmYFNd",
        imageUrl: "https://pbs.twimg.com/media/Fa1xsEBXEAArlCO.png",
        url: "https://twitter.com/uknf/status/1562045702926204929",
        reactions: {
            retweet_count: 8,
            reply_count: 2,
            like_count: 39,
            quote_count: 1,
        },
        scum: {
            image: 0.5,
            text: 0.8,
            avg: 0.65,
        },
    };

    const parseDate = (date) => {
        let [year, month, day] = date.split("T")[0].split("-");
        let [h, m, s] = date.split("T")[1].split(":");
        return `${day}.${month}.${year} ${h}:${m}`;
    };
</script>

<div class="record">
    <div class="post">
        <Post {data} />
    </div>
    <div class="column">
        <h1 class="dark">{data.author.name}</h1>
        <div class="row">
            <div class="fullWidth">
                <h2>Date: {data.author.date && parseDate(data.author.date)}</h2>
                <h2>Localization: {data.localization}</h2>
            </div>
            <div class="fullWidth">
                <h2>Verified account: Yes</h2>
                <h2>Number of tweet edits: 0</h2>
            </div>
        </div>

        <div class="column">
            <h1 class="dark">Level of suspection</h1>
            <span class={data.scum.image > 0.5 ? "orange" : "green"}>Image</span
            >
            <div class="row">
                <div class="bar">
                    <div
                        id="myBar"
                        class={data.scum.image > 0.5 ? "orangeBg" : "greenBg"}
                        style="width: {data.scum.image * 100}%"
                    />
                </div>
                <span class={data.scum.image > 0.5 ? "orange" : "green"}
                    >{(Math.round(data.scum.image * 100))}%</span
                >
            </div>

            <span class={data.scum.text > 0.5 ? "orange" : "green"}>Text</span>
            <div class="row">
                <div class="bar">
                    <div
                        id="myBar"
                        class={data.scum.text > 0.5 ? "orangeBg" : "greenBg"}
                        style="width: {data.scum.text * 100}%"
                    />
                </div>
                <span class={data.scum.text > 0.5 ? "orange" : "green"}
                    >{(Math.round(data.scum.text * 100))}%</span
                >
            </div>

            <h1 class="dark">Alghorithm confidence </h1>
            <div class="row">
                <div class="bar">
                    <div
                        id="myBar"
                        class={data.scum.avg > 0.5 ? "orangeBg" : "greenBg"}
                        style="width: {data.scum.avg * 100}%"
                    />
                </div>
                <span class={data.scum.avg > 0.5 ? "orange" : "green"}
                    >{(Math.round(data.scum.avg * 100))}%</span
                >
            </div>
        </div>

        <div class="end">
            <Button
                text="See on Twitter"
                onClick={() => window.open(data.url, "_blank")}
            />
            <Button text="Send alert" color="orange" />
        </div>
    </div>
</div>

<style lang="scss">
  div.record {
    border: none;
    border-radius: 20px;
    background: $white;
    outline: inherit;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 30px;
    padding: 20px;
    overflow: auto;
  }

    div.post {
        width: 600px;
        border: none;
        background: transparent;
        outline: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
    }

    div.column {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .dark {
        color: $dark;
    }
    .orange {
        color: $colorThree;
    }
    .orangeBg {
        background-color: $colorThree;
    }
    .green {
        color: $green;
    }
    .greenBg {
        background-color: $green;
    }

    .bar {
        width: 400px;
        height: 10px;
        border-radius: 10px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }

    #myBar {
        height: 10px;
        border-radius: 10px;
    }
    div.row {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        gap: 40px;
    }

    .fullWidth {
        flex: 1;
    }

    div.end {
        display: flex;
        flex: 1;
        align-items: flex-end;
        justify-content: flex-end;
        gap: 20px;
    }
</style>

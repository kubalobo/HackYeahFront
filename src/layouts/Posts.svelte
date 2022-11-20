<script>
    import Searcher from "../components/atom/Searcher.svelte";
    import EntityRecord from "../components/EntityRecord.svelte";
    import Button from "../components/atom/Button.svelte";
    import PostRecord from "../components/PostRecord.svelte";
    import Post from "../components/Post.svelte";

    import RangeSlider from "svelte-range-slider-pips";

    let selectedCategories = ["Pending", "Reliable", "Fraud"];

    let sliderValues = [0, 100];

    import { postsData } from "../assets/example_get_tweets_response";

    function parsePostData(postData) {
        return {
            author: {
                id: postData.id,
                name: postData.author,
                username: "uknf",
                url: "https://twitter.com/uknf",
                date: postData.date,
            },
            localization: "Warszawa, Polska",
            text: postData.text,
            imageUrl: postData.url,
            url: "https://twitter.com/uknf/status/1562045702926204929",
            reactions: {
                retweet_count: postData.retweet_count,
                reply_count: postData.reply_count,
                like_count: postData.like_count,
                quote_count: postData.quote_count,
            },
            scum: {
                image: postData.image_prob,
                text: postData.text_prob,
                avg: postData.summed_prob,
            },
        };
    }
</script>

<div class="slider">
    <span>Algorythm confidence treshold</span>
    <RangeSlider float range pushy bind:values={sliderValues} />
</div>

<div class="filters">
    <Button
        text="Pending"
        filter={!selectedCategories.includes("Pending")}
        onClick={() => {
            if (selectedCategories.includes("Pending")) {
                selectedCategories = selectedCategories.filter(
                    (e) => e !== "Pending"
                );
            } else {
                selectedCategories = [...selectedCategories, "Pending"];
            }
        }}
    />
    <Button
        text="Reliable"
        color="green"
        filter={!selectedCategories.includes("Reliable")}
        onClick={() => {
            if (selectedCategories.includes("Reliable")) {
                selectedCategories = selectedCategories.filter(
                    (e) => e !== "Reliable"
                );
            } else {
                selectedCategories = [...selectedCategories, "Reliable"];
            }
        }}
    />
    <Button
        text="Fraud"
        color="orange"
        filter={!selectedCategories.includes("Fraud")}
        onClick={() => {
            if (selectedCategories.includes("Fraud")) {
                selectedCategories = selectedCategories.filter(
                    (e) => e !== "Fraud"
                );
            } else {
                selectedCategories = [...selectedCategories, "Fraud"];
            }
        }}
    />
</div>

{#if postsData}
    <div class="records">
        {#each postsData as postData}
            <PostRecord data={parsePostData(postData)} />
        {/each}
    </div>
{/if}

<style lang="scss">
    div {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: center;
    }

    div.filters {
        justify-content: flex-start;
        padding: 20px;
    }

    div.slider {
        justify-content: flex-start;
        padding: 20px;
    }
    div.slider > span {
        font-size: 25px;
    }

    :global(.rangeSlider) {
        width: 400px;
    }

    div.records {
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        padding: 20px;
    }
</style>

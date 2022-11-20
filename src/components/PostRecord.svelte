<script>
  import searcherIcon from "../assets/icons/searcher.svg";
  import Button from "./atom/Button.svelte";
  import Post from "./Post.svelte";

  export let data = {
    author: {
      id: 1206024474,
      name: "Urząd KNF",
      username: "uknf",
      url: "https://twitter.com/uknf",
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
      text: 0.7,
      avg: 0.6,
    },
  };
</script>

<div class="record">
  <div class="post">
    <Post {data} />
  </div>
  <div class="column">
    <h1>{data.author.name}</h1>
    <div>
      <h2>Localization: {data.localization}</h2>
      <h2>Verified: Yes</h2>
      <h2>Number of edits: 0</h2>
    </div>

    <div class="row">
      <h1>Level of suspection - image:</h1>
      <div class="statNumber one">
        {data.scum.image}
      </div>
    </div>

    <div class="row">
      <h1>Level of suspection - text:</h1>
      <div class="statNumber one">
        {data.scum.text}
      </div>
    </div>

    <div class="row">
      <h1>Alghorytm decision:</h1>
      <div class="column">
        <div class="statNumber one">
          {data.scum.avg}
        </div>
      </div>
    </div>

    <div class="end">
      <Button
        text="See on Twitter"
        onClick={() => window.open(data.url, "_blank")}
      />
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
    gap: 20px;
    padding: 20px;
  }

  div.post {
    width: 600px;
    border: none;
    background: transparent;
    outline: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .statNumber {
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 80px;
  }

  div.row {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    gap: 40px;
  }

  div.end {
    display: flex;
    flex: 1;
    align-items: flex-end;
    gap: 20px;
  }
</style>

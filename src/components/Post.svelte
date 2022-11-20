<script>
  import Button from "./atom/Button.svelte";

  export let data;
</script>

<div class="post">
  <div class="userData">
    <img src="https://picsum.photos/60" alt="avatar" class="avatar" />
    <div class="user">
      <h2 class="value">{data.author.name}</h2>
      <h2>@{data.author.username}</h2>
    </div>
  </div>
  <h2>{data.text}</h2>
  <img src={data.imageUrl} alt="imageTweet" />
  <hr />
  <div class="reactions">
    <div>
      <span class="value">{data.reactions.reply_count} </span>
      <span>Replies</span>
    </div>
    <div>
      <span class="value">{data.reactions.quote_count} </span>
      <span>Quote tweets</span>
    </div>
    <div>
      <span class="value">{data.reactions.like_count} </span>
      <span>Likes</span>
    </div>
    <div>
      <span class="value">{data.reactions.retweet_count} </span>
      <span>Retweets</span>
    </div>
  </div>
  <hr />
</div>

<style lang="scss">
  div.post {
    width: 100%;
    border: none;
    border-radius: 20px;
    background: $white;
    outline: inherit;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }

  img.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }

  div.userData {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  div.user {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
  }

  div.reactions {
    display: flex;
    gap: 15px;
  }

  .value {
    font-weight: bold;
  }

  hr {
    border-top: 1px solid $grey;
    width: 100%;
    margin: 0;
  }
</style>

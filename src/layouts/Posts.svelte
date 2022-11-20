<script>
  import Searcher from "../components/atom/Searcher.svelte";
  import EntityRecord from "../components/EntityRecord.svelte";
  import Button from "../components/atom/Button.svelte";
  import PostRecord from "../components/PostRecord.svelte";
  import Post from "../components/Post.svelte";
</script>

<div class="records">
  <PostRecord />
  <PostRecord />
  <PostRecord />
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  div.records {
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    padding: 20px;
  }
</style>

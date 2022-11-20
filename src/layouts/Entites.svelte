<script>
  import Searcher from "../components/atom/Searcher.svelte";
  import EntityRecord from "../components/EntityRecord.svelte";
  import Button from "../components/atom/Button.svelte";
</script>

<div class="header">
  <div>
    <Searcher />
    <Button color="orange" text="Import" />
  </div>

  <div class="filters">
    <Button text="institutions" filter />
    <Button text="companies" color="violet" filter />
    <Button text="finfluencers" color="orange" filter />
  </div>
</div>

<div class="records">
  <EntityRecord />
  <EntityRecord name="KGHM" />
  <EntityRecord name="Twitter" />
  <EntityRecord name="Facebook" />
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  div.header {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    background: $white;
    z-index: 10;
    padding: 20px;
  }
  div.filters {
    justify-content: flex-start;
  }

  div.records {
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    padding: 20px;
  }
</style>

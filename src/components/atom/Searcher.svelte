<script>
  import searcherIcon from "../../assets/icons/searcher.svg";
  export let searchQuery = 'valueInChild'

</script>

<div>
  <input bind:value={searchQuery} />
  <img src={searcherIcon} alt="Search" />
</div>

<style lang="scss">
  div {
    width: 500px;
    height: 40px;
    border: none;
    border-radius: 25px;
    background: $white;
    outline: inherit;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);

    position: relative;
  }

  input {
    border: none;
    outline: inherit;
    background: transparent;

    width: 426px;
    height: 40px;
    margin: 0 54px 0 20px;

    color: $dark;
    font: inherit;
    font-size: 16px;
    text-align: left;
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 24px;
    height: 24px;
  }
</style>

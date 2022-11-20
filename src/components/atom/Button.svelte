<script>
  export let text = "text";
  export let onClick = () => {};
  export let color = undefined;
  export let filter = false;
</script>

<button
  on:click={onClick}
  class:orange={color === "orange"}
  class:violet={color === "violet"}
  class:green={color === "green"}
  class:filter
>
  {text}
</button>

<style lang="scss">
  button {
    background: $primary;
    height: 40px;
    width: fit-content;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0 20px;

    color: $white;
    text-align: center;
    font: inherit;
    cursor: pointer;

    transition-duration: 0.4s;
  }

  .orange {
    background: $colorThree;
  }

  .violet {
    background: $colorTwo;
  }

  .green {
    background: $green;
  }

  .filter {
    background: $white;
    color: $primary;
    border: 2px solid $primary;
  }

  .filter.orange {
    background: $white;
    color: $colorThree;
    border-color: $colorThree;
  }

  .filter.violet {
    background: $white;
    color: $colorTwo;
    border-color: $colorTwo;
  }
  .filter.green {
    background: $white;
    color: $green;
    border-color: $green;
  }

  button:hover {
    transform: scale(1.05);
  }
</style>

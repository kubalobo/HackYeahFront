<script>
  import dashboardIcon from "../assets/icons/dashboard.svg";
  import entitiesIcon from "../assets/icons/entities.svg";
  import postsIcon from "../assets/icons/posts.svg";
  import profileIcon from "../assets/icons/profile.svg";
  import arrowsIcon from "../assets/icons/arrows.svg";

  import { route } from "../stores/stores";

  import { fade } from "svelte/transition";

  const fadeIn = {
    delay: 100,
    duration: 200,
  };

  const fadeOut = {
    delay: 0,
    duration: 100,
  };

  let isExpanded = false;
</script>

<nav class:expanded={isExpanded}>
  <ul>
    <button on:click={() => ($route = "dashboard")}>
      <li>
        <img
          src={dashboardIcon}
          alt="Dashboard"
          class:active={$route === "dashboard"}
        />
        {#if isExpanded}
          <span
            in:fade={fadeIn}
            out:fade={fadeOut}
            class:active={$route === "dashboard"}
          >
            System statistics
          </span>
        {/if}
      </li>
    </button>
    <button on:click={() => ($route = "posts")}>
      <li>
        <img src={postsIcon} alt="Posts" class:active={$route === "posts"} />
        {#if isExpanded}
          <span
            in:fade={fadeIn}
            out:fade={fadeOut}
            class:active={$route === "posts"}
          >
            Posts waterfall
          </span>
        {/if}
      </li>
    </button>
    <button on:click={() => ($route = "entities")}>
      <li>
        <img
          src={entitiesIcon}
          alt="Entities"
          class:active={$route === "entities"}
        />
        {#if isExpanded}
          <span
            in:fade={fadeIn}
            out:fade={fadeOut}
            class:active={$route === "entities"}
          >
            Supervised entities
          </span>
        {/if}
      </li>
    </button>
    <button on:click={() => ($route = "profile")}>
      <li>
        <img
          src={profileIcon}
          alt="Profile"
          class:active={$route === "profile"}
        />
        {#if isExpanded}
          <span
            in:fade={fadeIn}
            out:fade={fadeOut}
            class:active={$route === "profile"}
          >
            Profile
          </span>
        {/if}
      </li>
    </button>
  </ul>
  <div>
    {#if isExpanded}
      <img class="logo" src={"public/uknf.png"} alt="uknf" />
    {/if}
    <div class="line" />
    <button on:click={() => (isExpanded = !isExpanded)}>
      <li>
        <img src={arrowsIcon} alt="Entities" class:rotate={isExpanded} />
        {#if isExpanded}
          <span in:fade={fadeIn} out:fade={fadeOut} class:active={true}>
            Collapse menu
          </span>
        {/if}
      </li>
    </button>
  </div>
</nav>

<style lang="scss">
  nav {
    grid-area: nav;
    height: 100vh;
    transition: ease-out 200ms;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(150deg, $primary 0%, $lightBlue 100%);
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
  }

  .expanded {
    transition: ease-out 200ms;
    width: 300px;
  }

  .active {
    filter: invert(83%) sepia(40%) saturate(1702%) hue-rotate(162deg)
      brightness(95%) contrast(104%);
  }

  .logo {
    width: 240px;
  }

  img.rotate {
    transform: rotate(-180deg);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .line {
    border-top: 1px solid $dark;
    margin: 0 10px;
    width: calc(100% - 20px);
  }

  li {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    width: 200px;
    height: 24px;
  }

  img:hover:not(.rotate) {
    transform: scale(1.1);
  }

  span:hover {
    transform: scale(1.05);
  }

  img {
    width: 24px;
    transition: transform;
    transition-duration: 0.2s;
  }
  span {
    color: $white;
    font-size: 16px;
    transition-property: transform;
    transition-duration: 0.2s;
  }

  button {
    border: none;
    background: none;
    text-align: left;
    padding: 20px 18px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
</style>

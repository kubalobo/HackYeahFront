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
                    <span in:fade={fadeIn} out:fade={fadeOut}>Inbox</span>
                {/if}
            </li>
        </button>
        <button on:click={() => ($route = "posts")}>
            <li>
                <img
                    src={postsIcon}
                    alt="Posts"
                    class:active={$route === "posts"}
                />
                {#if isExpanded}
                    <span in:fade={fadeIn} out:fade={fadeOut}>Starred</span>
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
                    <span in:fade={fadeIn} out:fade={fadeOut}>Entities</span>
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
                    <span in:fade={fadeIn} out:fade={fadeOut}>Profile</span>
                {/if}
            </li>
        </button>
    </ul>
    <button on:click={() => (isExpanded = !isExpanded)}>
        <img src={arrowsIcon} alt="Entities" />
        <!-- {#if isExpanded}
            
        {:else}
            
        {/if} -->
    </button>
</nav>

<style>
    nav {
        grid-area: nav;
        height: 100vh;
        background-color: #324754;
        color: #a2b7c4;
        transition: ease-out 200ms;
        width: 60px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .expanded {
        transition: ease-out 200ms;
        width: 200px;
    }

    .active {
        filter: invert(83%) sepia(40%) saturate(1702%) hue-rotate(162deg)
            brightness(95%) contrast(104%);
    }

    ul {
        list-style: none;
        padding: 20px;
        margin: 0;
    }

    li {
        width: 200px;
    }

    button {
        border: none;
        background: none;
        color: #a2b7c4;
        text-transform: uppercase;
        text-align: left;

        background: none;
        color: inherit;
        border: none;
        /* padding: 0; */
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
</style>

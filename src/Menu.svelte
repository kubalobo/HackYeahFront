<script>
    import { fade } from "svelte/transition";

    const fadeIn = {
        delay: 100,
        duration: 200,
    };

    const fadeOut = {
        delay: 0,
        duration: 100,
    };

    let activeIcon = "entites";

    let isExpanded = false;
</script>

<nav class:expanded={isExpanded}>
    <ul>
        <li>
            🚀 {#if isExpanded}<span in:fade={fadeIn} out:fade={fadeOut}
                    >Inbox</span
                >{/if}
        </li>
        <li>
            <img src="./assets/icons/entities.svg" alt="My Happy SVG" />

            {#if isExpanded}<span in:fade={fadeIn} out:fade={fadeOut}
                    >Starred</span
                >{/if}
        </li>
        <li>
            🗑 {#if isExpanded}<span in:fade={fadeIn} out:fade={fadeOut}
                    >Trashed</span
                >{/if}
        </li>
    </ul>
    <button on:click={() => (isExpanded = !isExpanded)}>
        {#if isExpanded}
            Close
        {:else}
            Open
        {/if}
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

    ul {
        list-style: none;
        padding: 20px;
        margin: 0;
    }

    li {
        width: 200px;
    }

    h3 {
        text-transform: uppercase;
        margin: 0;
        padding: 10px 0;
    }

    hr {
        color: white;
        width: 80%;
    }

    button {
        border: none;
        background: none;
        color: #a2b7c4;
        text-transform: uppercase;
    }
</style>

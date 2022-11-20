<script>
    import Profile from "../layouts/Profile.svelte";
    import Entites from "../layouts/Entites.svelte";
    import Posts from "../layouts/Posts.svelte";
    import Dashboard from "../layouts/Dashboard.svelte";

    import { fade } from "svelte/transition";

    import { route } from "../stores/stores";
</script>

{#if $route === "dashboard"}
    <div in:fade><Dashboard /></div>
{:else if $route === "posts"}
    <div in:fade><Posts /></div>
{:else if $route === "entities"}
    <div in:fade><Entites /></div>
{:else if $route === "profile"}
    <div in:fade><Profile /></div>
{/if}

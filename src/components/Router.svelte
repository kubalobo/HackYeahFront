<script>
    import Profile from "../layouts/Profile.svelte";
    import Entites from "../layouts/Entites.svelte";
    import Posts from "../layouts/Posts.svelte";
    import Dashboard from "../layouts/Dashboard.svelte";

    import { route } from "../stores/stores";
</script>

{#if $route === "dashboard"}
    <Dashboard />
{:else if $route === "posts"}
    <Posts />
{:else if $route === "entities"}
    <Entites />
{:else if $route === "profile"}
    <Profile />
{/if}

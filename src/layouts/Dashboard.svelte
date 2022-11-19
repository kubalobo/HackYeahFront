<script>
    import Card from "../components/atom/Card.svelte";
    import MainChart from "../components/Dashboard/MainChart.svelte";
    import TopStats from "../components/Dashboard/TopStats.svelte";
    import { route } from "../stores/stores";
</script>

<div class="dashboard">
    <div class="topStats">
        <TopStats />
    </div>
    <div class="mainChart">
        <MainChart />
    </div>
</div>

<style lang="scss">
    .dashboard {
        display: flex;
        flex-direction: column;
        height: 90vh;
        min-width: 900px;
    }
    .mainChart {
        width: 95%;
        height: 100%;
    }
</style>

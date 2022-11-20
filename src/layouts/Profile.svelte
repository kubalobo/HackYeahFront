<script>
    import ProfileCard from "../components/Profile/ProfileCard.svelte";
    import ProfileChart from "../components/Profile/ProfileChart.svelte";
    import { backendData } from "../stores/stores";
</script>

<div class="dashboard">
    <div class="top">
        <ProfileCard />
        <!-- <h1>{$backendData.message}</h1> -->
    </div>

    <div class="chart">
        <ProfileChart />
    </div>
</div>

<style>
    .dashboard {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 90vh;
        min-width: 900px;
        padding: 20px;
    }
    .top {
        padding: 80px 125px;
        width: 80%;
    }
    .chart {
        width: 80%;
        height: 100%;
    }
</style>

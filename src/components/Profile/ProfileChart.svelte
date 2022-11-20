<script>
    import Chart from "chart.js/auto";
    import { onMount } from "svelte";

    let myChart;
    let canvas;

    onMount(() => {
        const ctx = canvas.getContext("2d");

        myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["2022-11-04", "2022-11-05", "2022-11-06", "2022-11-07", "2022-11-08", "2022-11-09", "2022-11-10", "2022-11-11", "2022-11-12", "2022-11-13", "2022-11-14", "2022-11-15", "2022-11-16", "2022-11-17", "2022-11-18", "2022-11-19", "2022-11-20"],
                datasets: [
                    {
                        label: "Analyzed incidents per day",
                        data: [12, 19, 3, 5, 2, 3, 25, 9, 13, 14, 7, 9, 24, 18, 3, 16, 21],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                maintainAspectRatio: false
            },
        });
    });
</script>

    <canvas id="myChart" bind:this={canvas} />


<style>
    
</style>

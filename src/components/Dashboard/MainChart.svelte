<script>
    import Chart from "chart.js/auto";
    import { onMount } from "svelte";

    let myChart;
    let canvas;

    onMount(() => {
        const ctx = canvas.getContext("2d");

        myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["2022-11-04", "2022-11-05", "2022-11-06", "2022-11-07", "2022-11-08", "2022-11-09", "2022-11-10", "2022-11-11", "2022-11-12", "2022-11-13", "2022-11-14", "2022-11-15", "2022-11-16", "2022-11-17", "2022-11-18", "2022-11-19", "2022-11-20"],
                datasets: [
                    {
                        label: "Complient",
                        data: [53, 43, 73, 42, 61, 34, 75, 82, 61, 55, 66, 69, 58, 72, 95, 64, 62],
                        borderWidth: 3,
                        borderColor: '#3a95e9',
                    },
                    {
                        label: "Fraud",
                        data: [1, 3, 2, 1, 2, 7, 2, 9, 3, 5, 2, 7, 15, 16, 13, 11, 14],
                        borderWidth: 3,
                        borderColor: '#e17141',
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

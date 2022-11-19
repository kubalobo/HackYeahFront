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
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
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

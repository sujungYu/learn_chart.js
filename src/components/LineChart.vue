<template>
  <div>
      <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import Chart from 'chart.js'
export default {
    mounted() {
    // const ctx = document.getElementById('lineChart');
    // const ctx = this.$refs.lineChart
    new this.$_Chart(this.$refs.lineChart, {
    type: 'line',
    data: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
    options: {}
});
  }

}
</script>

<style>

</style>
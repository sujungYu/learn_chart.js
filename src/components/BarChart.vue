<template>
  <div>
      <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import Chart from 'chart.js'
export default {
    props: ['propsdata'],
    mounted() {
    // const ctx = document.getElementById('barChart');
    // const ctx = this.$refs.barChart
    new this.$_Chart(this.$refs.barChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        // onClick: function() {
        //     this.$emit('refresh:chart')
        // }
    }
});
  }

}
</script>

<style>

</style>
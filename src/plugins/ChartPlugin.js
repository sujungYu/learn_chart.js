// 모든 컴포넌트에서 사용하고 싶은 기능을 정의하는게 plugin이다.
import Chart from 'chart.js'

export default {
    install(Vue) {
        //App.vue 나 LineChart같은 컴포넌트에서 this.$_Chart를 쓰면 chart.js에 접근하는 것과 동일한 의미
        Vue.prototype.$_Chart = Chart;
        console.log('chart plugin ');
    }
}
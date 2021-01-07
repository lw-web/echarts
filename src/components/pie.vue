<template>
  <div id="pie">

  </div>
</template>

<script>
const color = ['#00E473', '#40D3FF', '#FFC300', '#FF8700']

const option = {
  backgroundColor: 'transparent',
  color: color,
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    containLabel: false
  },
  yAxis: [{
    type: 'category',
    inverse: true,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    data: []
  }],
  xAxis: [{
    show: false
  }],
  series: []
}

function genOption (chartData) {
  const arrName = []
  const arrValue = []
  let sum = 0
  const pieSeries = []; const lineYAxis = []
  // 数据处理
  chartData.forEach((v, i) => {
    arrName.push(v.name)
    arrValue.push(v.value)
    sum = sum + v.value
  })
  // 图表option整理
  chartData.forEach((v, i) => {
    pieSeries.push({
      name: '学历',
      type: 'pie',
      animationDuration: 2000,
      clockWise: false,
      hoverAnimation: false,
      radius: [75 - i * 15 + '%', 68 - i * 15 + '%'],
      center: ['25%', '37%'],
      label: {
        show: false
      },
      data: [{
        value: v.value,
        name: v.name
      }, {
        value: sum - v.value,
        name: '',
        itemStyle: {
          color: 'rgba(0,0,0,0)'
        }
      }]
    })
    pieSeries.push({
      name: '',
      type: 'pie',
      silent: true,
      animationDuration: 2000,
      z: 1,
      clockWise: false, // 顺时加载
      hoverAnimation: false, // 鼠标移入变大
      radius: [75 - i * 15 + '%', 68 - i * 15 + '%'],
      center: ['25%', '37%'],
      label: {
        show: false
      },
      data: [{
        value: 7.5,
        itemStyle: {
          color: '#1E3257'
        }
      }, {
        value: 2.5,
        name: '',
        itemStyle: {
          color: 'rgba(0,0,0,0)'
        }
      }]
    })
    lineYAxis.push({
      value: i,
      textStyle: {
        rich: {
          circle: {
            color: color[i],
            padding: [0, 5]
          }
        }
      }
    })
  })
  option.yAxis[0].data = lineYAxis
  option.series = pieSeries
}
export default {
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('pie'))
    const option = genOption([])
    this.chart.setOption(option)
  }
}
</script>

<style scoped lang="scss">
#pie {
  width: 100%;
  height: 100%;
}
</style>

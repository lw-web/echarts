<template>
  <div id="guage"></div>
</template>

<script>
function genOption (data, colors) {
  return {
    backgroundColor: 'transparent',
    title: {
      text: '机动车检测合格率',
      bottom: 30,
      x: 'center',
      textStyle: {
        color: '#ccd5ed',
        fontSize: 14,
        fontWeight: 400
      }
    },
    series: [
      {
        type: 'gauge',
        radius: '95%',
        startAngle: '210',
        endAngle: '-30',
        splitNumber: 4,
        detail: {
          offsetCenter: [0, 10],
          formatter: `{a|${data * 100}}{c|%}`,
          rich: {
            a: {
              color: '#fff',
              lineHeight: 35,
              fontSize: 23,
              padding: [0, 0, -40, 0]
            },

            c: {
              color: '#fff',
              fontSize: 18,
              fontWeight: 550,
              padding: [10, 0, -20, 0]
            },
            x: {
              fontSize: 14,
              color: '#e4ecff',
              padding: [0, 0, 20, 0]
            }
          }
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: colors,
            width: 15
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          length: 20,
          lineStyle: {
            color: '#12181f', // #244195
            width: 4
          }
        },

        axisLabel: {
          show: false
        }
      },
      {
        name: '白色圈刻度',
        type: 'gauge',
        radius: '90%',
        startAngle: 210, // 刻度起始
        endAngle: -30, // 刻度结束
        min: 0,
        max: 100,
        splitNumber: 4,
        z: 5,
        axisTick: {
          show: false
        },
        splitLine: {
          length: 16, // 刻度节点线长度
          lineStyle: {
            width: 0,
            color: '#018DFF'
          } // 刻度节点线
        },
        axisLabel: {
          color: '#8391b7',
          fontSize: 12
        }, // 刻度节点文字颜色
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            opacity: 0
          }
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 0,
            name: ''
          }
        ]
      }
    ]
  }
}
export default {
  name: 'guage',
  props: {
    chartData: {
      type: Number,
      default: 0
    },
    colors: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById('guage'))
    const option = genOption(this.chartData, this.colors)
    this.chart.setOption(option)
  }
}
</script>

<style>
  #guage {
    width: 100%;
    height: 100%;
  }
</style>

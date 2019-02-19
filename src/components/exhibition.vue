<template>
 <div class="line1">
     <div id="line1"></div>
 </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/tooltip'

export default {
  mounted () {
    this.myCharts = echarts.init(document.getElementById('line1'))
    this.initDate()
  },
  props: ['sevenDate', 'sevenDay'],
  methods: {
    initDate () {
      const colors = ['#5793f3', '#675bba', '#d14a61']
      const option = {
        color: colors,
        title: {
          text: '走势图'
        },
        tooltip: {trigger: 'axis'},
        legend: {},
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: [
          {
            type: 'value',
            name: '用户',
            min: 0,
            max: 200,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '订单',
            min: 0,
            max: 200,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
        ],
        dataset: [
          {
            source: {
              'product': this.sevenDay,
              '新注册用户': this.sevenDate[0],
              '新增订单': this.sevenDate[1],
              '新增管理员': this.sevenDate[2]
            }
          }
        ],
        series: [
          {
            type: 'line',
            yAxisIndex: 1,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            }
          },
          {
            type: 'line',
            yAxisIndex: 1,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            }
          },
          {
            type: 'line',
            yAxisIndex: 1,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            }
          }
        ]
      }
      this.myCharts.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.line1{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
#line1{
    width: 90%;
    height: 450px;
}
</style>

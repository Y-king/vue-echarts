/**
 * 作者 :carrie
 *
 * 日期 ：2017-11-10
 *
 * 描述 ：ECharts驱动类
 */
'use strict' // 定义为严格模式编码要求

import echarts from 'echarts'
import 'echarts/map/js/china' // 3.0

function getDom (id) {
  return document.getElementById(id)
}
export default (id, option) => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(getDom(id))

  // 绘制图表
  myChart.setOption(option)

  return myChart
}

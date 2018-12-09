/**
 * 作者 ：carrie
 *
 * 日期 ：2017-11-10
 *
 * 描述 ：图表工厂类
 */
// "use strict" // 定义为严格模式编码要求

import echarts from './echarts'

class ChartsFactory {
  constructor ({ type, id, options }) {
    this.type = type
    this.id = id
    this.options = options
    this.init()
  }
  init () {
    switch (this.type) {
      case 'echarts': {
        this.chartsInstance = echarts(this.id, this.options)
        break
      }
      default: {
        this.chartsInstance = echarts(this.id, this.options)
        break
      }
    }
  }
  getChartsInstance () {
    return this.chartsInstance
  }
}

export default {
  newInstance: (config) => {
    return new ChartsFactory(config)
  }
}

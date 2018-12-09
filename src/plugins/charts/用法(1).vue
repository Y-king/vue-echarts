<template>
  <el-container class="is-vertical">
    <div id="map" style="width: 100%;height: 1000px;"></div>
  </el-container>
</template>
<script>
import chartsFactory from './chartsFactory'
export default {
  name: '用法',
  data () {
    return {
      mapOptions: {
        id: 'map',
        options: {
          'tooltip': {
            'show': true,
            'padding': 0,
            'backgroundColor': 'rgba(255,255,255,0)'
          },
          'series': [
            {
              'name': '中国',
              'type': 'map',
              'mapType': 'china',
              'zoom': 1.2,
              'selectedMode': false,
              'itemStyle': {
                'normal': {
                  'areaColor': '#103a65',
                  'borderWidth': 1.5,
                  'borderColor': '#1f5c94',
                  'label': {
                    'show': true
                  }
                },
                'emphasis': {
                  'areaColor': '#74c0ed',
                  'label': {
                    'show': true
                  }
                }
              },
              'label': {
                'normal': {
                  'show': false
                },
                'emphasis': {
                  'show': false
                }
              },
              'data': [
                {
                  'value': 3102814,
                  'name': '湖南',
                  'itemStyle': {
                    'normal': {
                      'color': '#8985d2',
                      'label': {
                        'show': true,
                        'textStyle': {
                          'color': '#000',
                          'fontSize': 12
                        }
                      }
                    }
                  }
                },
                {
                  'value': 1610236,
                  'name': '江西',
                  'itemStyle': {
                    'normal': {
                      'color': '#9baded',
                      'label': {
                        'show': true,
                        'textStyle': {
                          'color': '#000',
                          'fontSize': 12
                        }
                      }
                    }
                  }
                },
                {
                  'value': 1239130,
                  'name': '湖北',
                  'itemStyle': {
                    'normal': {
                      'color': '#88d2df',
                      'label': {
                        'show': true,
                        'textStyle': {
                          'color': '#000',
                          'fontSize': 12
                        }
                      }
                    }
                  }
                },
                {
                  'value': 1238579,
                  'name': '河南',
                  'itemStyle': {
                    'normal': {
                      'color': '#7ccaa2',
                      'label': {
                        'show': true,
                        'textStyle': {
                          'color': '#000',
                          'fontSize': 12

                        }
                      }
                    }
                  }
                }
              ],
              'markPoint': {
                'symbol': 'pin',
                'symbolSize': 80,
                'label': {
                  'normal': {
                    'show': true
                  }
                },
                'data': [
                  {
                    'name': '武汉',
                    'coord': [
                      114.3896,
                      30.6628
                    ]
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  mounted: function () {
    chartsFactory.newInstance({ type: 'echarts', id: this.mapOptions.id, options: this.mapOptions.options })
  }
}
</script>
<style>
</style>

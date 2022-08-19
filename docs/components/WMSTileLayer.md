### 网络地图服务 dqyt-wms-tile-layer
#### 何时使用
用于在地图上将WMS服务显示为切片图层
#### 代码演示

<WMSTileLayer-index></WMSTileLayer-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50" :config="map.config" :options="map.options">
    <dqyt-wms-tile-layer :url="WMSTileLayer.url" :options="WMSTileLayer.options"></dqyt-wms-tile-layer>
  </dqyt-map>
</template>
<script>
  export default {
    name: "index",
    data() {
      return {
        map: {
          options: {
            center: [41.7, 248],
            zoom: 8
          },
        },
        WMSTileLayer: {
          url: 'http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi',
          options: {
            layers: 'nexrad-n0r-900913',
            format: 'image/png',
            transparent: true,
            attribution: "Weather data © 2012 IEM Nexrad"
          }
        },
      }
    }
  }
</script>
```
:::

#### API
| 属性       | 类型   | 默认值   | 说明        |
|:------------- |:-------------|:-----|:----|
| url | String | '' | 图层的url|
| options | Object | {} | 状态选项  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| layers | String | '' | 要显示的 WMS 图层的逗号分隔列表 |
| styles | String | '' | 样式的逗号分隔列表 |
| format | String | 'image/jpeg' | WMS 图像格式（'image/png'用于具有透明度的图层） |
| crs | CRS | null | 默认为地图的 |
| transparent | Boolean | false | 如果true，WMS 服务将返回具有透明度的图像。 |
| version | String | '1.1.1'	| 要使用的 WMS 服务版本 |

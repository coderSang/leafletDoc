### 瓦片图层 dqyt-tile-layer
#### 何时使用
用于在地图上加载和显示切片图层。
#### 代码演示


<tileLayer-index></tileLayer-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50" :config="map.config" :options="map.options">
    <dqyt-tile-layer :url="tileLayer.url" :options="tileLayer.options"></dqyt-tile-layer>
  </dqyt-map>
</template>
<script>
  export default {
    name: "index",
    data() {
      return {
        map: {
          options: {
            center: [30.52, 119.98],
            zoom: 14
          }
        },
        tileLayer: {
          url: 'GaoDe.Normal.Map',
          options: {
            foo: 'bar',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
| url | String | 'GaoDe.Normal.Map' | 图层的url，内置图层分别有:  <br>高德地图 <br> GaoDe.Normal.Map (高德行政图，包含注解) <br> GaoDe.Satellite.Map（高德卫星图） <br> GaoDe.Satellite.Annotion（高德卫星图 注解图层）<br> OSM地图 <br> OSM.Normal.Map（OSM行政图） <br> 百度地图 <br> Baidu.Normal.Map（百度行政图） <br> Baidu.Satellite.Map （百度卫星图，不包干注解） <br> Baidu.Satellite.Annotion（百度卫星图注解） |
| options | Object | {} | 状态选项  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| minZoom | Number |0| 此图层将显示的最小缩放级别 |
| maxZoom | Number |18| 此图层将显示的最大缩放级别 |
| errorTileUrl | String | '' | 用于代替加载失败的图块显示的图块图像的 UR |

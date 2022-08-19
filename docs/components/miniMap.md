### 鹰眼控件 dqyt-control-mini-map
#### 何时使用
比例控件，可以以公制 (m/km) 和英制 (mi/ft) 显示当前的比例
#### 代码演示

<miniMap-index></miniMap-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-control-mini-map :url="miniMap.url" :options="miniMap.options"></dqyt-control-mini-map>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        miniMap: {
          url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          options: {},
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
| attribution | String | '' | 属性值 |

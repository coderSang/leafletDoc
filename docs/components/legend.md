### 图例控件 dqyt-control-legend
#### 何时使用
作为地图上的图层的图例使用，可以用于控制图层的显隐
#### 代码演示

<legend-index></legend-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-marker @ready="ready" :data="marker.data" :options="marker.options" :config="marker.config">
    </dqyt-marker>
    <dqyt-control-legend :options="legend.options"></dqyt-control-legend>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        legend: {
          options:{
            // position: "topright",
            selfDefinePosition: {
              left: '10vw',
              top: '10vw'
            },
            // vw, vh级别
            symbolWidth: 2,
            symbolHeight: 3,
            opacity: 1,
            column: 2,
            legends: [{
              label: "Marker1",
              type: "image",
              url: require("../../assets/logo.png"),
              inactive: false,
              layers: ['']
            },{
              label: "Marker2",
              type: "image",
              url: require("../../assets/logo.png"),
              inactive: true,
            },{
              label: "Marker1",
              type: "image",
              url: require("../../assets/logo.png"),
              inactive: true,
            }]
          }
        },
        marker: {
          data: [30.52, 119.98],
          options: {
            icon: {
              iconUrl: require("../../assets/markerUser.png"),
              iconSize: [38, 38],
              iconAnchor: [22, 38],
            }
          }
        },
      }
    },
    methods: {
      ready(e) {
        this.legend.options.legends[0].layers[0] = e
      }
    },
  }
</script>

```
:::

#### API
| 属性       | 类型   | 默认值   | 说明        |
|:------------- |:-------------|:-----|:----|
| options | Object | {} | 状态选项  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| position | String | '' | 属性值 |
| selfDefinePosition | Object | { <br> left: '', <br> top: '' <br>}| 自定义位置，left，top需要根据position来确定，如果position为topright，那selfDefinePosition对象格式为{ <br> right: '1vw', <br> top: '1vh' <br>}类型 |
| symbolWidth | Number | * | 图标宽度 |
| symbolHeight | Number | * | 图标高度 |
| opacity | Number | 1.0 | 透明度 |
| column | Number | 1 | 列数 |
| legends | Array | [{ <br> label: "",//图例名称 <br> type: "",// 图例类型image <br> url: require("@/assets/logo.png"),//图例图标 <br> inactive: false,//是否不激活 <br> layers: [''] // 包含的图层<br> }], | legends数组 |

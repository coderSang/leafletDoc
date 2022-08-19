### 矢量图层 dqyt-vector-layer
#### 何时使用
用于在地图上加载和显示矢量图层。
#### 代码演示

<vectorLayer-index></vectorLayer-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-vector-layer :data="vector.data" :options="vector.options" :config="vector.config"></dqyt-vector-layer>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        vector: {
          data: [[
            [30.52, 119.98],
            [30.53, 119.98],
            [30.54, 119.98],
          ],[
            [30.52, 119.99],
            [30.53, 119.99],
            [30.54, 119.99],
          ]],
          options: {
            type: 'polyline',
            color: 'red',
            fitBounds: true,
          },
          config: {
            'click': function (event) {
              console.log(event)
            }
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
| data | Array | [] | 数据数组  |
| options | Object | {} | 状态选项  |
| config| Object | {} | 事件  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| type | String |*| 矢量图形类型polyline、polygon、rectangle、circle、circleMarker |
| color | String |'#3388ff'| 描边颜色 |
| weight | Number |3| 笔画宽度（以像素为单位） |
| opacity | Number |1.0| 描边不透明度 |
| fill | Boolean |depends| 是否用颜色填充路径。将其设置false为禁用填充多边形或圆形。 |
| fillColor | String | * | 填色。默认为color选项的值 |
| fillOpacity | Number |0.2| 填充不透明度 |
| radius | Number |*| type为circle、circleMarker 的半径 |
#### 常用事件 config
| 事件          | 数据   | 描述   |
|:------------- |:-------------|:----|
| click | MouseEvent |当用户点击地图时触发|


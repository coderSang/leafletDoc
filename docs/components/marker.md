### 标记 dqyt-marker
#### 何时使用
需要在地图上添加Marker图标
#### 代码演示

<marker-index></marker-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-marker :data="marker.data" :options="marker.options" :config="marker.config"></dqyt-marker>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        marker: {
          data: [30.52, 119.98],
          // data: [[30.52, 119.98], [30.53, 120]],
          // data: { lat: 30.52, lng: 119.98, icon: {
          //     iconUrl: require("@/assets/images/markerIconDefault.png"),
          //     iconSize: [38, 38],
          //     iconAnchor: [22, 38],
          //   }},
          // data: [{ lat: 30.52, lng: 119.98, icon: {
          //     iconUrl: require("@/assets/images/markerIconDefault.png"),
          //     iconSize: [38, 38],
          //     iconAnchor: [22, 38],
          //   }},{ lat: 30.53, lng: 119.99, icon: {
          //     iconUrl: require("@/assets/images/markerUser.png"),
          //     iconSize: [38, 38],
          //     iconAnchor: [22, 38],
          //   }}],
          config: {
            'dragend': function (event) {
              console.log(event)
            }
          },
          options: {
            draggable: true,
            icon: {
              iconUrl: require("../../assets/markerUser.png"),
              iconSize: [38, 38],
              iconAnchor: [22, 38],
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
| 属性       | 类型   | 默认值   | 说明 |
|:------------- |:-------------|:-----|:----|
| data | Object、Array | [] | 点位数据，支持格式[lat,lng]、[[lat,lng]...]、{lat: '',lng:'',icon:{}}、[{lat: '',lng:'',icon:{}}...] |
| config| Object | {} | 事件 |
| options | Object | {} | 状态选项  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| draggable | Boolean | false | 标记是否可以用鼠标拖动 |
| icon | Icon | * | 用于渲染标记的图标实例 |
| title | String | '' | 出现在标记悬停上的浏览器工具提示的文本 |
| opacity | Number | 1.0 | 标记的不透明度 |
#### 常用事件
| 事件          | 数据   | 描述   |
|:------------- |:-------------|:----|
| click | MouseEvent |当用户点击地图时触发|
| move | Event |通过拖动移动标记时触发|
| dragstart | Event |当用户开始拖动标记时触发|
| dragend | Event |当用户停止拖动标记时触发|
| drag | Event |在用户拖动标记时重复触发|
| movestart | Event |当标记开始移动时触发|
| moveend | Event |当标记停止移动时触发|

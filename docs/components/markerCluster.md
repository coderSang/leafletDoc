### 标记群/海量标记 dqyt-marker-cluster
#### 何时使用
需要在地图上添加Marker图标过多时，采取合并标记点的策略
#### 代码演示

<markerCluster-index></markerCluster-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-marker-cluster :data="markerCluster.data" :options="markerCluster.options" :config="markerCluster.config"></dqyt-marker-cluster>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        markerCluster: {
          // data: [[30.52, 119.97],[30.52, 119.98]],
          data: [
            {lat: '30.52', lng: '119.97', icon: {
                iconUrl: require("../../assets/markerIconDefault.png"),
                iconSize: [38, 38],
                iconAnchor: [22, 38],
              }},
            {lat: '30.52', lng: '119.98'}
          ],
          options: {
            draggable: true,
            icon: {
              iconUrl: require("../../assets/markerUser.png"),
              iconSize: [38, 38],
              iconAnchor: [22, 38],
            }
          },
          config: {
            'click': function (event) {
              console.log(event)
            }
          },
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
| data | Object、Array | [] | 点位数据，支持格式[[lat,lng]...]、[{lat: '',lng:'',icon:{}}...] |
| config| Object | {} | 事件 |
| options | Object | {} | 状态选项  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| icon | Icon | * | 用于渲染标记的图标实例 |
#### 常用事件
| 事件          | 数据   | 描述   |
|:------------- |:-------------|:----|
| click | MouseEvent |当用户点击地图时触发|

### 地图容器 dqyt-map
#### 何时使用
中心类，用于在页面上创建地图并对其进行操作，地图上的任何组件都是基于Map创建的
#### 代码演示


<map-index></map-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50" :config="map.config" :options="map.options"></dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        map: {
          config: {
            'click': function (event) {
              console.log(event)
            }
          },
          options: {
            center: [30.52, 119.98],
            zoom: 14
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
| width | String/Number | 100 | 地图宽度，值表显为占据屏幕百分比 |
| height | String/Number | 100 | 地图高度，值表显为占据屏幕百分比  |
| config| Object | {} | 事件  |
| options | Object | {} | 状态选项  |
#### 常用状态选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| crs | CRS | L.CRS.EPSG3857 | 要使用的坐标参考系  |
| center | LatLng | [30.52, 119.98] | 初始地图缩放级别  |
| zoom | Number | 13 | 缩放等级  |
| minZoom | Number | * | 地图的最小缩放级别，如果未定义，则会使用图层中最小的minZoom  |
| maxZoom | Number | * | 地图的最大缩放级别，如果未定义，则会使用图层中最大的maxZoom  |
| maxBounds | LatLngBounds | null | 设置此选项后，地图会将视图限制在给定的地理范围内，如果用户试图在视图之外平移，则将用户弹回。要动态设置限制，请使用 setMaxBounds方法。 |
#### 常用控件选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| attributionControl | Boolean |true| 是否将属性控件添加到地图中 |
| zoomControl | Boolean |true| 是否将缩放控件添加到地图中 |

#### 常用事件
| 事件          | 数据   | 描述   |
|:------------- |:-------------|:----|
| click | MouseEvent |当用户点击地图时触发|
| dblclick | MouseEvent |当用户双击地图时触发|
| zoomstart | Event |当地图缩放即将改变时触发|
| zoomend | Event |当地图缩放发生变化后触发|
| movestart | Event |当地图的视图开始改变时触发|
| moveend | Event |当地图中心停止变化时触发|
| move | Event |在地图的任何移动过程中重复触发，包括平移和飞行动画。|
| zoom | Event |在缩放级别发生任何变化期间重复触发，包括缩放和飞行动画。|

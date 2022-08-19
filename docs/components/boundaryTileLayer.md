### 多边形图层 dqyt-boundary-tile-layer
#### 何时使用
用于绘制任意便捷的图层,注意多边形不可有重叠
#### 代码演示

<boundaryTileLayer-index></boundaryTileLayer-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-boundary-tile-layer :url="tileBoundaryLayer.url" :options="tileBoundaryLayer.options"></dqyt-boundary-tile-layer>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        tileBoundaryLayer: {
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
          options: {
            boundary: {
              "type":"MultiPolygon",
              "coordinates":[
                [
                  [
                    [119,30], [123,31],
                    [124,31], [119,31],
                    [119,30],
                  ]
                ],
                [
                  [[119.1,30.1], [120,30.5],
                    [121,30.5], [119.1,30.1],
                  ],
                ]
              ]
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
| url | String | '' | 图层地址  |
| options | Object | {} | 状态选项  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| type | String | '' | Polygon([])或者MultiPolygon([[]]) |
| coordinates | Array | [] | 组成多边形的点位 |

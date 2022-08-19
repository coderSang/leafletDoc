### 热力图图层 dqyt-heat-layer
#### 何时使用
用于在地图上加载和显示热力图
#### 代码演示


<heatLayer-index></heatLayer-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-heat-layer :data="heat.data" :options="heat.options"></dqyt-heat-layer>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        heat: {
          data: [
            [30.52, 119.98, 1.2], // lat, lng, intensity
            [30.52, 119.99, 111.5],
          ],
          options: {
            radius: 25
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
| data | Array | [] | 热力点位数组，点位格式 [lat, lng, intensity] |
| options | Object | {} | 状态选项  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| radius | Number |0| 热力点影响半径（px） |

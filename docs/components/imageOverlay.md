### 图片图层 dqyt-image-overlay
#### 何时使用
用于在地图上加载和显示图片。
#### 代码演示

<imageOverlay-index></imageOverlay-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer :url="tileLayer.url" :options="tileLayer.options"></dqyt-tile-layer>
    <dqyt-image-overlay :url="imageOverlay.url" :options="imageOverlay.options"></dqyt-image-overlay>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        tileLayer: {
          url: 'GaoDe.Normal.Map',
        },
        imageOverlay: {
          url: require("../../assets/imageLayer.png"),
          options: {
            imageBounds: [[30.52, 119.98], [30.55, 120]],
          },
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
| url | String | '' | 展示图片 |
| options | Object | {} | 状态选项  |
#### 选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| imageBounds | LatLngBounds | [] | 图片显示范围 |
| opacity | Number |1.0| 图像叠加层的不透明度 |
| alt | String |''| 图像属性的文本alt |
| interactive | Boolean |false| 决定图像叠加层是否在单击或悬停时发出鼠标事件 |
| zIndex | Number |1| 层级 |
| errorOverlayUrl | String | '' | 用于代替加载失败的覆盖图像 |

### 视频图层 dqyt-video-overlay
#### 何时使用
用于在地图上加载和显示视频。
#### 代码演示

<videoOverlay-index></videoOverlay-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-video-overlay :url="videoOverlay.url" :options="videoOverlay.options"></dqyt-video-overlay>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        videoOverlay: {
          url: 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
          options: {
            videoBounds: [[30.52, 119.98], [30.55, 120]],
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
| url | String | '' | 视频地址 |
| options | Object | {} | 状态选项  |
#### 选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| imageBounds | LatLngBounds | [] | 视频显示范围 |
| opacity | Number |1.0| 图像叠加层的不透明度 |
| muted | Boolean | false | 加载时视频是否以静音启动 |

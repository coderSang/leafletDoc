### 缩放控件 dqyt-control-zoom
#### 何时使用
用于修改地图缩放控件
#### 代码演示

<zoom-index></zoom-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer :url="tileLayer.url" :options="tileLayer.options"></dqyt-tile-layer>
    <dqyt-control-zoom :options="zoom.options"></dqyt-control-zoom>
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
        zoom: {
          options: {
            zoomInText: 'add'
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
| options | Object | {} | 状态选项  |
#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
| zoomInText | String | '+' | 在“放大”按钮上设置的文本 |
| zoomOutText | String |'&#x2212'| ' 在“缩小”按钮上设置的文本。 |

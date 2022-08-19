### 属性控件 dqyt-control-attribution
#### 何时使用
用于修改地图归属属性
#### 代码演示

<attribution-index></attribution-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-control-attribution :options="attribution.options"></dqyt-control-attribution>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        attribution: {
          options: {
            prefix: 'dqyt'
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
| prefix | String | 'Leaflet' | 设置归属属性 |

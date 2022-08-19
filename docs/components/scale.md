### 比例控件 dqyt-control-scale
#### 何时使用
比例控件，可以以公制 (m/km) 和英制 (mi/ft) 显示当前的比例
#### 代码演示

<scale-index></scale-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-control-scale :options="scale.options"></dqyt-control-scale>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        scale: {
          options: {
            maxWidth:200,
            metric:true,
            imperial:false
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
| maxWidth | Number | 100 | 控件的最大宽度（以像素为单位） |
| metric | Boolean | True | 是否显示公制比例线（m/km） |
| imperial | Boolean | True | 是否显示英制刻度线 |

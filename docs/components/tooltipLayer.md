### 提示层 dqyt-tooltip
#### 何时使用
用于在地图上加载和显示悬浮提示层
#### 代码演示

<tooltipLayer-index></tooltipLayer-index>
::: details 点击查看代码
```vue
<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer ></dqyt-tile-layer>
    <dqyt-marker :data="marker.data" :options="marker.options">
      <dqyt-tooltip>
        <p>ssss</p>
      </dqyt-tooltip>
    </dqyt-marker>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        marker: {
          data: [30.52, 119.98],
          options: {
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
| 属性 | 类型 | 默认值 | 说明 |
|:------------- |:-------------|:-----|:----|
| data | Object、Array | [] | 提示层点位，若不赋值则将采取父元素的点位  |
| options | Object | {} | 状态选项  |
| config | Object | {} | 事件  |

#### 常用选项 options
| 选项          | 类型   | 默认值 | 说明  |
|:------------- |:-------------|:-----|:----|
|content |String| '' | html字符串 |
#### 常用事件
| 事件          | 数据   | 描述   |
|:------------- |:-------------|:----|

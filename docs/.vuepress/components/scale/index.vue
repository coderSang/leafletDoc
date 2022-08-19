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

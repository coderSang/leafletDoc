<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-control-mini-map :url="miniMap.url" :options="miniMap.options"></dqyt-control-mini-map>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        miniMap: {
          url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          options: {},
        },
      }
    }
  }
</script>

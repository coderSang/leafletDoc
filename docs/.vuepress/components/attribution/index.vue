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

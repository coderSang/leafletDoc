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

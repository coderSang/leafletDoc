<template>
  <dqyt-map :width="60" :height="50" :config="map.config" :options="map.options">
    <dqyt-tile-layer :url="tileLayer.url" :options="tileLayer.options"></dqyt-tile-layer>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        map: {
          options: {
            center: [30.52, 119.98],
            zoom: 14,
          }
        },
        tileLayer: {
          url: 'GaoDe.Normal.Map',
          options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
        },
      }
    }
  }
</script>

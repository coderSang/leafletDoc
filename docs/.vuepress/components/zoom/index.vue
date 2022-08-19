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

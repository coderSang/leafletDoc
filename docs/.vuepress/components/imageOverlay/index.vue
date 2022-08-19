<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer :url="tileLayer.url" :options="tileLayer.options"></dqyt-tile-layer>
    <dqyt-image-overlay :url="imageOverlay.url" :options="imageOverlay.options"></dqyt-image-overlay>
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
        imageOverlay: {
          url: require("../../assets/imageLayer.png"),
          options: {
            imageBounds: [[30.52, 119.98], [30.55, 120]],
          },
        },
      }
    }
  }
</script>

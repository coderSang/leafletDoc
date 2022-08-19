<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-video-overlay :url="videoOverlay.url" :options="videoOverlay.options"></dqyt-video-overlay>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        videoOverlay: {
          url: 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
          options: {
            videoBounds: [[30.52, 119.98], [30.55, 120]],
          },
        },
      }
    }
  }
</script>

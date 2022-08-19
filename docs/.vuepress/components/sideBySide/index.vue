<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-control-side-by-side :urls="sideBySide.urls" :options="sideBySide.options"></dqyt-control-side-by-side>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        sideBySide: {
          urls: {
            url1: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            url2: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
          },
          options: {
            options1: {},
            options2:{},
          },
          configs: {
            config1: {},
            config2:{},
          },
        }
      }
    }
  }
</script>

<template>
  <dqyt-map :width="60" :height="50" :config="map.config" :options="map.options"></dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        map: {
          config: {
            'click': function (event) {
              console.log(event)
            },
          },
          options: {
            center: [30.52, 119.98],
            zoom: 14
          }
        },
      }
    }
  }
</script>

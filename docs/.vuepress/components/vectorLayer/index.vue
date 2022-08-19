<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-vector-layer :data="vector.data" :options="vector.options" :config="vector.config"></dqyt-vector-layer>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        vector: {
          data: [[
            [30.52, 119.98],
            [30.53, 119.98],
            [30.54, 119.98],
          ],[
            [30.52, 119.99],
            [30.53, 119.99],
            [30.54, 119.99],
          ]],
          options: {
            type: 'polyline',
            color: 'red',
            fitBounds: true,
          },
          config: {
            'click': function (event) {
              console.log(event)
            }
          }
        },
      }
    }
  }
</script>

<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-boundary-tile-layer :url="tileBoundaryLayer.url" :options="tileBoundaryLayer.options"></dqyt-boundary-tile-layer>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        tileBoundaryLayer: {
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
          options: {
            boundary: {
              type:"MultiPolygon",
              coordinates:[
                [
                  [
                    [119,30], [123,31],
                    [124,31], [119,31],
                    [119,30],
                  ]
                ],
                [
                  [[119.1,30.1], [120,30.5],
                    [121,30.5], [119.1,30.1],
                  ],
                ]
              ]
            }
          }
        },
      }
    }
  }
</script>

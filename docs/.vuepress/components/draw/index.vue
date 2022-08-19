<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-control-draw :options="draw.options" :config="draw.config"></dqyt-control-draw>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        draw: {
          options: {
            position: 'topright',
            draw: {
              polyline: {
                shapeOptions: {
                  color: '#f357a1',
                  weight: 10
                }
              },
              polygon: {
                allowIntersection: false, // Restricts shapes to simple polygons
                shapeOptions: {
                  color: '#bada55'
                }
              },
              circle: false, // Turns off this drawing tool
              rectangle: {
                shapeOptions: {
                  clickable: false
                }
              },
            },
          },
          config: {
            'created': function (layer) {
              console.log(layer)
            }
          }
        },
      }
    }
  }
</script>

<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-marker @ready="ready" :data="marker.data" :options="marker.options" :config="marker.config">
    </dqyt-marker>
    <dqyt-control-legend :options="legend.options"></dqyt-control-legend>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        legend: {
          options:{
            // position: "topright",
            selfDefinePosition: {
              left: '10vw',
              top: '10vw'
            },
            // vw, vh级别
            symbolWidth: 2,
            symbolHeight: 3,
            opacity: 1,
            column: 2,
            legends: [{
              label: "Marker1",
              type: "image",
              url: require("../../assets/logo.png"),
              inactive: false,
              layers: ['']
            },{
              label: "Marker2",
              type: "image",
              url: require("../../assets/logo.png"),
              inactive: true,
            },{
              label: "Marker1",
              type: "image",
              url: require("../../assets/logo.png"),
              inactive: true,
            }]
          }
        },
        marker: {
          data: [30.52, 119.98],
          options: {
            icon: {
              iconUrl: require("../../assets/markerUser.png"),
              iconSize: [38, 38],
              iconAnchor: [22, 38],
            }
          }
        },
      }
    },
    methods: {
      ready(e) {
        this.legend.options.legends[0].layers[0] = e
      }
    },
  }
</script>

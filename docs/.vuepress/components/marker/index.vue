<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-marker :data="marker.data" :options="marker.options" :config="marker.config"></dqyt-marker>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        marker: {
          data: [30.52, 119.98],
          // data: [[30.52, 119.98], [30.53, 120]],
          // data: { lat: 30.52, lng: 119.98, icon: {
          //     iconUrl: require("@/assets/images/markerIconDefault.png"),
          //     iconSize: [38, 38],
          //     iconAnchor: [22, 38],
          //   }},
          // data: [{ lat: 30.52, lng: 119.98, icon: {
          //     iconUrl: require("@/assets/images/markerIconDefault.png"),
          //     iconSize: [38, 38],
          //     iconAnchor: [22, 38],
          //   }},{ lat: 30.53, lng: 119.99, icon: {
          //     iconUrl: require("@/assets/images/markerUser.png"),
          //     iconSize: [38, 38],
          //     iconAnchor: [22, 38],
          //   }}],
          config: {
            'dragend': function (event) {
              console.log(event)
            }
          },
          options: {
            draggable: true,
            icon: {
              iconUrl: require("../../assets/markerUser.png"),
              iconSize: [38, 38],
              iconAnchor: [22, 38],
            }
          }
        },
      }
    }
  }
</script>

<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer></dqyt-tile-layer>
    <dqyt-marker-cluster :data="markerCluster.data" :options="markerCluster.options" :config="markerCluster.config"></dqyt-marker-cluster>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        markerCluster: {
          // data: [[30.52, 119.97],[30.52, 119.98]],
          data: [
            {lat: '30.52', lng: '119.97', icon: {
                iconUrl: require("../../assets/markerIconDefault.png"),
                iconSize: [38, 38],
                iconAnchor: [22, 38],
              }},
            {lat: '30.52', lng: '119.98'}
          ],
          options: {
            draggable: true,
            icon: {
              iconUrl: require("../../assets/markerUser.png"),
              iconSize: [38, 38],
              iconAnchor: [22, 38],
            }
          },
          config: {
            'click': function (event) {
              console.log(event)
            }
          },
        },
      }
    }
  }
</script>

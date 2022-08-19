<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer ></dqyt-tile-layer>
    <dqyt-marker :data="marker.data" :options="marker.options">
      <dqyt-tooltip>
        <p>ssss</p>
      </dqyt-tooltip>
    </dqyt-marker>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
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
    }
  }
</script>

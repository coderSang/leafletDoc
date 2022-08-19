<template>
  <dqyt-map :width="60" :height="50">
    <dqyt-tile-layer ></dqyt-tile-layer>
    <dqyt-marker :data="marker.data" :options="marker.options" :config="marker.config">
      <dqyt-popup>
        <p>ssss</p>
      </dqyt-popup>
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

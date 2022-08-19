<template>
  <dqyt-map :width="60" :height="50" :config="map.config" :options="map.options">
    <dqyt-wms-tile-layer :url="WMSTileLayer.url" :options="WMSTileLayer.options"></dqyt-wms-tile-layer>
  </dqyt-map>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        map: {
          options: {
            center: [41.7, 248],
            zoom: 8
          },
        },
        WMSTileLayer: {
          url: 'http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi',
          options: {
            layers: 'nexrad-n0r-900913',
            format: 'image/png',
            transparent: true,
            attribution: "Weather data © 2012 IEM Nexrad"
          }
        },
      }
    }
  }
</script>

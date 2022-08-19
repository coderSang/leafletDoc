module.exports = {
  title: 'dqyt-map-components',
  description: '德清移通map组件库',
  base: '/docs/',
  port: 1234,
  dest: './dist',
  themeConfig: {
    nav: [{
      text: '指南',
      link: '/guide/home'
    }, {
      text: '组件',
      link: '/components/home'
    }, {
      text: '了解更多',
      link: '/more/index'
    }],
    sidebar: {
      '/guide/': [{
        title: '组件',
        collapsable: true,
        children: [
          'home',
        ]
      }],
      '/components/': [{
        title: '组件',
        collapsable: true,
        children: [
          'home',
          'map',
          'tileLayer',
          'WMSTileLayer',
          'imageOverlay',
          'videoOverlay',
          'boundaryTileLayer',
          'heatLayer',
          'vectorLayer',
          'popUpLayer',
          'tooltipLayer',
          'zoom',
          'attribution',
          'scale',
          'sideBySide',
          'miniMap',
          'draw',
          'legend',
          'marker',
          'markerCluster',
        ]
      }]
    }
  }
}

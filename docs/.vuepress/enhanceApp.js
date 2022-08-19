// 整个项目的入口
import Vue from 'vue';

import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';
import 'dqyt-map-component/dist/dqyt-map-components.css';
Vue.directive('highlight', function(el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((ele) => {
        hljs.highlightBlock(ele);
    })
})
export default ({
    Vue,
    Options,
    router,
    sideData
}) => {
    Vue.mixin({
        mounted() {
            import('dqyt-map-component').then((m) => {
              Vue.use(m.default);
            });
        }
    })

}

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'animate.css';

Vue.use(VueResource);
Vue.use(ElementUI);
// Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    VueResource,
    store,
    template: '<App/>',
    components: { App }
});
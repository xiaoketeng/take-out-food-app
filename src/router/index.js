import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods.vue';
import assess from '../components/assess/assess.vue';
import business from '../components/business/business.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/static',
            name: 'goods',
            component: goods,
            meta: { scrollToTop: true }
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods,
            meta: { scrollToTop: true }
        },
        {
            path: '/assess',
            name: 'assess',
            component: assess
        },
        {
            path: '/business',
            name: 'business',
            component: business
        }
    ]

});
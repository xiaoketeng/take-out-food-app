import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

//定义单一状态树
const state = {
    goodNum: 0,
    foodNum: 0,
    isShow: false,
    totalPrice: 0,
    shoppingNum: 0
};
let store = new Vuex.Store({
    state
});

export default store;
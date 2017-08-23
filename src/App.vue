<template>
  <div id="app">
    <v-header></v-header>
     <router-view></router-view>
     <dialogInfo v-if="isShow"></dialogInfo>
  </div>
</template>

<script>
import VHeader from './components/header/header.vue';
import dialogInfo from './components/dialog/dialog.vue';
import {mapState} from 'Vuex';
export default {
  name:'app',
   computed:{
   ...mapState({
      isShow(state){
        return state.isShow;
      }
   })
  },
   components:{
    VHeader,
    dialogInfo
  }
};
</script>

<style>
body,ul,ul,li,h3{
  margin:0;
  padding:0;
}
 a{
    text-decoration: none;
    color:#0c0c0c;
  }
</style>

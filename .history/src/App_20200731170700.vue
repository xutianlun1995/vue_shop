<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {regFoodTypes} from './api'
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  async mounted:{
    regFoodTypes
  },
  components: {
    FooterGuide,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>

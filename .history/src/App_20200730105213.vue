<template>
  <div id="app">
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item on">
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </a>
      <a href="javascript:;" class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </a>
      <a href="javascript:;" class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a href="javascript:;" class="guide_item">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
      </a>
    </footer>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
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

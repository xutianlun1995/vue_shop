<template>
  <header class="header">
    <slot name=""></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot></slot>
  </header>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>

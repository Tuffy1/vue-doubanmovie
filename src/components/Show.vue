<template>
  <div class="show">
    <div class="header">
      <router-link class="onshow" to="/show/onshow">热映中</router-link>
      <router-link class="toshow" to="/show/toshow">待上映</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  font-size: 0;
  padding-top: 15px;
  background-color: #3c3c3c;
  z-index: 10;
  .onshow, .toshow {
    display: inline-block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ffcd32;
    background-color: #444;
    color: #ffcd32;
    border-radius: 3px 0 0 3px;
    font-size: 14px;
  }
  .toshow {
    border-radius: 0 3px 3px 0;
  }
}
.router-link-active {
  background-color: #ffcd32!important;
  color: #444!important;
}
</style>

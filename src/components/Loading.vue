<template>
  <div class="loading">
    <img src="../assets/img/loading.gif">
    <span>正在载入...</span>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.loading {
  width: 100%;
  text-align: center;
  img {
    display: block;
    width: 25px;
    height: 25px;
    margin: 10px auto;
  }
  span {
    font-size: 12px;
  }
}
</style>

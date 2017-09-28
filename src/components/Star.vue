<template>
  <div class="star">
  	<i v-for="n in count" class="iconfont icon-shoucang full"></i>
  	<i v-for="n in (5 - count)" class="iconfont icon-shoucang empty"></i>
  	<span class="number" v-if="shownum">{{number}}分</span>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 4
    },
    shownum: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    count () {
      let count = this.number
      if (count > 5) {
        count = count / 2
      }
      return Math.round(count)
    }
  }
}
</script>

<style lang="less" scoped>
.star {
  font-size: 0;
  height: 18px;
  line-height: 18px;
  .iconfont{
    font-size: 12px;
    margin-right: 3px;
    &.full {
      color: #ffcd32;
    }
    &.empty {
      color: #999;
    }
  }
  .number {
    display: inline-block;
    margin-left: 5px;
    font-size: 12px;
  }
}
</style>

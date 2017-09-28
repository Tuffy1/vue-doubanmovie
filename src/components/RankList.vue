<template>
  <div class="ranklist">
    <div class="cover_wrapper">
      <img :src="formatlist[0].images.small">
      <div class="top_bar">
        <div class="goback" @click="goback">返回</div>
        <div class="title">{{ranktype}}</div>
      </div>
      <div class="layer"></div>
    </div>
    <div class="list_wrapper">
      <div class="item_detail" v-for="(item, index) in formatlist" @click="godetail(item.id)">
        <div class="left">
          <img :src="item.images.small">
        </div>
        <div class="right">
          <div class="m_title">{{item.title}}</div>
          <star :number="item.rating.average" :shownum="true"></star>
          <div class="m_director">导演：<span v-for="i in item.directors">{{i.name}}</span></div>
          <div class="m_cast">主演：<span v-for="i in item.casts">{{i.name}}</span></div>
          <div class="m_type">类型：<span v-for="i in item.genres">{{i}}</span></div>
          <div class="m_year">年份：{{item.year}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/Star'
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['ranktype', 'ranklist']),
    formatlist () {
      if (!this.ranklist[0].subject) {
        return this.ranklist
      }
      return this.ranklist.map((item) => {
        return item.subject
      })
    }
  },
  methods: {
    ...mapActions(['set_selectshow']),
    goback () {
      this.$router.go(-1)
    },
    godetail (id) {
      this.set_selectshow(id)
      this.$router.push('/detail')
    }
  },
  components: {
    star
  }
}
</script>

<style lang="less" scoped>
.ranklist {
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100%;
  background-color: #444;
  z-index: 1;
  .cover_wrapper {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
    .layer {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
    img {
      width: 100%;
      height: 180px;
      filter: blur(10px);
    }
    .top_bar {
      position: absolute;
      top: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      z-index: 1;
      .goback {
        float: left;
        width: 60px;
        height: 30px;
        line-height: 30px;
        margin: 10px 0 0 10px;
        text-align: center;
        color: rgba(255, 205, 50, 0.8);
        background-color: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 205, 50, 0.2);
        border-radius: 5px;
      }
      .title {
        font-size: 18px;
        color: rgba(255, 205, 50, 0.8);
        text-align: center;
        text-indent: -60px;
      }
    }
  }
  .list_wrapper{
    .item_detail {
      display: flex;
      width: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(150, 150, 150, 0.1);
      .left {
        margin-right: 10px;
        img {
          width: 65px;
          height: 100px;
        }
      }
      .right {
        overflow: hidden;
        .m_title {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }
        .m_director, .m_cast, .m_type, .m_year {
          height: 18px;
          line-height: 18px;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            padding-right: 5px;
          }
        }
      }
    }
  }
}
</style>

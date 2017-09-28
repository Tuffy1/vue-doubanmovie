<template>
  <div class="onshow">
    <div class="movie_list" v-if="onshowlist">
      <div class="movie_detail" v-for="item in onshowlist">
        <div class="movie_pic">
          <img :src="item.images.medium">
        </div>
        <div class="movie_info">
          <div class="m_title">{{item.title}}</div>
          <star :number="item.rating.average" :shownum="true" v-if="item.rating.average"></star>
          <div class="m_rating" v-if="!item.rating.average">暂无评分</div>
          <div class="m_director">导演：{{item.directors[0].name}}</div>
          <div class="m_length">时长：{{item.durations[0]}}</div>
          <div class="m_seen">{{item.collect_count}}人看过</div>
          <div class="m_type"><span v-for="genres in item.genres">{{genres}}</span></div>
        </div>
        <div class="todetail" @click="todetail(item.id)">详情</div>
      </div>
    </div>
    <loading v-else></loading>
  </div>
</template>

<script>
import router from '@/router'
import loading from '@/components/Loading'
import star from '@/components/Star'
import {getonshow} from '@/api/show'
import {mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['onshowlist', 'selected_show'])
  },
  created () {
    this._getonshow()
  },
  methods: {
    ...mapActions(['set_onshowlist', 'set_selectshow']),
    _getonshow () {
      getonshow().then((res) => {
        this.set_onshowlist(res.subjects)
      })
    },
    todetail (id) {
      this.set_selectshow(id)
      router.push('/detail')
    }
  },
  components: {
    loading,
    star
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.movie_list {
  margin-top: 60px;
  margin-bottom: 60px;
  .movie_detail {
    position: relative;
    display: flex;
    width: 100%;
    padding: 15px 0 15px 15px;
    border-bottom: 1px solid #666;
    box-sizing: border-box;  
    .movie_pic {
      display: inline-block;
      width: 85px;
      height: 115px;
      img {
        width: 85px;
        height: 115px;
      }
    }
    .movie_info {
      display: inline-block;
      margin-left: 15px;
      font-size: 12px;
      .m_title {
        height: 25px;
        line-height: 25px;
        font-size: 16px;
        font-weight: bold;
        color: #ddd;
      }
      .m_director {
        margin-top: 20px;
      }
      .m_type span {
        margin-right: 5px;
      }
      .m_rating, .m_director, .m_length, .m_seen, .m_type {
        height: 20px;
        line-height: 20px;
      }
      .m_seen, .m_type {
        display: inline-block;
      }
    }
    .todetail {
      position: absolute;
      right: 20px;
      bottom: 20px;
      color: #ffcd32;
      border: 1px solid #ffcd32;
      width: 50px;
      height: 25px;
      font-size: 14px;
      line-height: 25px;
      border-radius: 5px;
      text-align: center;
    }
  }
}
.loading {
  position: absolute;
  top: 40%;
}
</style>

<template>
  <div class="rank">
    <div class="main_title">
    	<span>排行榜</span>
      <div class="ranktpye_wrapper">
        <transition name="show" enter-active-class="animated fadeIn">
          <div class="rank_wrapper" v-if="toprank" @click="toranklist('评分榜', toprank)">
            <div class="left">
              <img :src="toprank[0].images.small">
              <span class="left_text">评分榜</span>
            </div>
            <div class="right">
              <div v-for="(item, index) in topthree" class="movie">
                {{index + 1}}.{{item.title}}-{{item.directors[0].name}}
              </div>
            </div>
          </div>
        </transition>
        <transition name="show" enter-active-class="animated fadeIn">
          <div class="rank_wrapper" v-if="usrank" @click="toranklist('北美票房榜', usrank)">
            <div class="left">
              <img :src="usrank[0].subject.images.small">
              <span class="left_text">北美票房榜</span>
            </div>
            <div class="right">
              <div v-for="(item, index) in usthree" class="movie">
                {{index + 1}}.{{item.title}}-{{item.subject.directors[0].name}}
              </div>
            </div>
          </div>
        </transition>
        <transition name="show" enter-active-class="animated fadeIn">
          <div class="rank_wrapper" v-if="weeklyrank" @click="toranklist('口碑榜', weeklyrank)">
            <div class="left">
              <img :src="weeklyrank[0].subject.images.small">
              <span class="left_text">口碑榜</span>
            </div>
            <div class="right">
              <div v-for="(item, index) in weeklythree" class="movie">
                {{index + 1}}.{{item.title}}-{{item.subject.directors[0].name}}
              </div>
            </div>
          </div>
        </transition>
        <transition name="show" enter-active-class="animated fadeIn">
          <div class="rank_wrapper" v-if="newrank" @click="toranklist('新片榜', newrank)">
            <div class="left">
              <img :src="newrank[0].images.small">
              <span class="left_text">新片榜</span>
            </div>
            <div class="right">
              <div v-for="(item,index) in newthree" class="movie">
                {{index + 1}}.{{item.title}}-{{item.directors[0].name}}
              </div>
            </div>
          </div>
        </transition>
      </div>
      <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import * as rank from '@/api/rank'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      toprank: '',
      usrank: '',
      weeklyrank: '',
      newrank: ''
    }
  },
  created () {
    this._getrank()
  },
  computed: {
    topthree () {
      if (this.toprank === '') {
        return
      }
      return this.pickthree(this.toprank)
    },
    usthree () {
      if (this.usrank === '') {
        return
      }
      return this.pickthree(this.usrank)
    },
    weeklythree () {
      if (this.weeklyrank === '') {
        return
      }
      return this.pickthree(this.weeklyrank)
    },
    newthree () {
      if (this.newrank === '') {
        return
      }
      return this.pickthree(this.newrank)
    }
  },
  methods: {
    ...mapActions(['set_ranktype', 'set_ranklist']),
    _getrank () {
      rank.toprank().then((res) => {
        this.toprank = res.subjects
      })
      rank.usrank().then((res) => {
        this.usrank = res.subjects
      })
      rank.weeklyrank().then((res) => {
        this.weeklyrank = res.subjects
      })
      rank.newrank().then((res) => {
        this.newrank = res.subjects
      })
    },
    pickthree (list) {
      let newlist = []
      for (let i = 0; i < 3; i++) {
        newlist.push(list[i])
      }
      return newlist
    },
    toranklist (type, list) {
      this.set_ranktype(type)
      this.set_ranklist(list)
      this.$router.push('/rank/ranklist')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.rank {
  position: relative;
  .main_title {
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    text-align: center;
    color: #ffcd23;
    background-color: #3c3c3c;
  }
  .ranktpye_wrapper {
    width: 100%;
    padding: 60px 0;
    .rank_wrapper {
      display: flex;
      height: 100px;
      margin: 0 20px;
      padding-top: 20px;
      .left {
        flex: 0 0 100px;
        position: relative;
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
        .left_text {
          position: absolute;
          top: 0;
          display: block;
          width: 100%;
          height: 100px;
          line-height: 100px;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.8);
          background-color: rgba(0, 0, 0, 0.7);
        }
      }
      .right {
        flex: 1;
        height: 100px;
        box-sizing: border-box;
        padding: 12px 0 12px 20px;
        background-color: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        .movie {
          height: 25px;
          line-height: 25px;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>

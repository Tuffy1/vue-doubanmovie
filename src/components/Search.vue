<template>
  <div class="search">
    <div class="main_title">
    	<span>搜索</span>
    </div>
    <div class="search_wrapper">
      <div class="search_box">
        <i class="iconfont icon-sousuo"></i>
        <input type="" name="" placeholder="搜索电影" v-model="search_text">
        <i class="iconfont icon-cuowu clear" @click="resetsearch()" v-show="search_text"></i>
      </div>
    </div>
    <div class="search_result" ref="search_result">
      <div class="item_wrapper" v-for="item in search_result" @click="todetail(item.id)">
        <i class="iconfont icon-jingxuan"></i>
        <span>{{item.title}}--{{item.directors[0]?item.directors[0].name:''}}--{{item.year}}</span>
      </div>
    </div>   
  </div>
</template>

<script>
import search from '@/api/search'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      search_text: '',
      search_result: ''
    }
  },
  mounted () {
    // console.log(this.$refs.search.offsetHeight)
    // this.$refs.search_result.style.height = this.$refs.search.offsetHeight - 140 + 'px'
  },
  methods: {
    ...mapActions(['set_selectshow']),
    resetsearch () {
      this.search_text = ''
    },
    search (query) {
      search(query).then((res) => {
        this.search_result = res.subjects
      })
    },
    todetail (id) {
      this.set_selectshow(id)
      this.$router.push('/detail')
    }
  },
  watch: {
    search_text (query) {
      if (this.search_text === '') {
        this.search_result = ''
        return
      }
      search(query).then((res) => {
        if (this.search_text !== '') {
          this.search_result = res.subjects
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.search {
  position: absolute;
  width: 100%;
  height: 100%;
  .main_title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    text-align: center;
    color: #ffcd23;
    background-color: #3c3c3c;
  }
  .search_wrapper {
    width: 100%;
    .search_box {
      position: relative;
      display: flex;
      height: 40px;
      margin: 20px;
      padding: 10px 20px;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: #555;
      i {
        flex: 0 0 20px;
        height: 20px;
        line-height: 20px;
        margin-right: 10px;
      }
      input {
        flex: 1;
        height: 20px;
        line-height: 20px;
        background-color: #555;
        color: rgba(255, 255, 255, 0.8);
        border: none;
        outline: none;
      }
      .clear {
        position: absolute;
        right: 10px;
      }
    }
  }
  .search_result {
    width: 100%;
    padding: 10px 30px 60px 30px;
    box-sizing: border-box;
    overflow: scroll;
    .item_wrapper {
      display: flex;
      height: 20px;
      line-height: 20px;
      padding-bottom: 10px;
      i {
        flex: 0 0 30px;
        font-size: 14px;
      }
      span {
        flex: 1;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>

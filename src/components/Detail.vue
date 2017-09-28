<template>
  <div class="detail_wrapper">
    <div class="detail" v-if="movie">
      <div class="basic_info">
        <div class="info_bg">
          <img :src="movie.images.large">
        </div>
        <div class="info_wrapper">
          <div class="m_cover">
            <img :src="movie.images.large">
          </div>
          <div class="m_info">
            <div class="m_name">{{movie.title}}</div>
            <star class="m_rating"></star>
            <div class="m_durations">时长：{{movie.durations[0]}}</div>
            <div class="m_type">类型：<span v-for="genres in movie.genres">{{genres}}</span></div>
            <div class="m_lang">语言：<span v-for="genres in movie.languages">{{genres}}</span></div>
            <div class="m_count">{{movie.wish_count}}人想看</div>
            <div class="m_pub">{{movie.pubdate}} 在{{movie.countries[0]}}上映</div>
          </div>
        </div>
        <div class="info_like">
          <div class="like_action">
          	<i class="iconfont"></i>
          	<span>想看</span>
          </div>
          <div class="star_action">
            <i class="iconfont"></i>
            <span>评分</span>
          </div>
          <div class="comment_action">
            <i class="iconfont"></i>
            <span>评论</span>
          </div>
        </div>
        <span class="toback" @click="goback">返回</span>
      </div>
      <div class="movie_desc">
        <span class="desc">{{movie.summary}}</span>
        <div class="open">展开</div>
        <div class="close">收起</div>
      </div>
      <div class="cast_wrapper">
        <div class="cast_title">演职人员</div>
        <div class="cast_list">
          <ul>
            <li class="cast_item" v-for="item in movie.casts">
              <div class="cast_avatar"><img :src="item.avatars.medium"></div>
              <div class="cast_name">{{item.name}}</div>
            </li>
          </ul>
        </div>
        <div class="show_all_cast">查看全部演职人员</div>
      </div>
      <div class="photo_wrapper">
        <div class="photo_title">影片剧照</div>
        <div class="photo_list">
          <ul>
            <li class="photo_item" v-for="item in movie.photos">
              <div class="photo_img"><img :src="movie.images.medium"></div>
              <div></div>
            </li>
          </ul>
        </div>
        <div class="show_all_photo">查看全部剧照</div>
      </div>
      <div class="data_wrapper">
        <div class="data_title"></div>
        <div class="data_content">
          <div class="data_rating">
            <div class="num">{{movie.rating.average}}<span>分</span></div>
            <div class="text">评分</div>
          </div>
          <div class="data_wish">
            <div class="num">{{movie.wish_count}}<span>人</span></div>
            <div class="text">想看人数</div>
          </div>
          <div class="data_comment">
            <div class="num">{{movie.reviews_count}}<span>条</span></div>
            <div class="text">评论数量</div>
          </div>
        </div>
      </div>
      <div class="comment_wrapper">
        <div class="comment_title">热门影评</div>
        <div class="comment_list">
          <div class="comment_detail" v-for="item in movie.popular_comments">
            <div class="avatar"><img :src="item.author.avatar"></div>
            <div class="name">{{item.author.name}}</div>
            <div class="rate"><star :number="item.rating.value" :shownum="true"></star></div>
            <div class="content">{{item.content}}</div>
            <div class="date">{{item.created_at}}</div>
            <div class="usefull"><i class="iconfont icon-zan"></i>{{item.useful_count}}</div>
          </div>
        </div>
        <div class="show_all_comment">查看全部评论</div>
      </div>
    </div>
    <loading class="loading" v-else></loading>
  </div>
</template>

<script>
import loading from '@/components/Loading'
import star from '@/components/Star'
import {getdetail} from '@/api/show'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      movie: ''
    }
  },
  computed: {
    ...mapGetters(['selected_show'])
  },
  created () {
    this._getdetail(this.selected_show)
  },
  methods: {
    _getdetail (id) {
      getdetail(id).then((res) => {
        this.movie = res
      })
    },
    goback () {
      this.$router.go(-1)
    }
  },
  components: {
    loading,
    star
  }
}
</script>

<style lang="less" scoped>
.detail_wrapper {
  .loading {
    position: absolute;
    top: 40%;
    background: #444;
  }
  .detail {
    position: absolute;
    width: 100%;
    background: #444;
    z-index: 100;
    .basic_info {
      position: relative;
      overflow: hidden;
      .info_bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(30px);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info_wrapper {
        padding: 30px 0 0 15px;
        display: flex;
        .m_cover {
          width: 130px;
          height: 180px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .m_info {
          margin-left: 20px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 13px;
          height: 20px;
          line-height: 20px;
          .m_name {
            color: #eee;
            font-size: 18px;
            font-weight: bold;
            height: 30px;
            line-height: 30px;
          }
          .m_rating {
            margin-top: 5px;
            margin-bottom: 30px;
          }
          .m_type, .m_lang {
            span {
              margin-right: 5px;
            }
          }
        }
      }
      .info_like {
        display: flex;
        margin: 20px 0 10px 20px;
        .like_action, .star_action, .comment_action {
          flex: 1;
          margin-right: 20px;
          background: rgba(255, 255, 255, 0.1);
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #eee;
          font-size: 14px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          .iconfont {
            font-size: 14px;
            margin-right: 5px;
          }
          .icon-xihuan, .icon-shoucang {
            color: #f55;
          }
        }
      }
      .toback {
        position: absolute;
        display: block;
        top: 30px;
        right: 20px;
        width: 50px;
        height: 25px;
        line-height: 25px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        font-size: 12px;
      }
    }
    .movie_desc {
      position: relative;
      padding-bottom: 50px;
      span {
        display: block;
        box-sizing: border-box;
        padding: 10px 20px 0 20px;
        font-size: 14px;
        line-height: 18px;
        height: 82px;
        overflow: hidden;
      }
      .open, .close {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: #ffcd32;
        font-size: 16px;
        text-align: center;
      }
    }
    .cast_wrapper {
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      .cast_title {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #eee;
      }
      .cast_list {
        overflow: hidden;
        ul {
          display: flex;
          .cast_item {
            flex: 1;
            margin-right: 10px;
            width: 80px;
            text-align: center;
            .cast_avatar img {
              width: 80px;
              height: 115px;
            }
            .cast_name {
              margin-top: 10px;
              font-size: 12px;
              color: #ccc;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
      .show_all_cast {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #ffcd32;
        font-size: 16px;
      }
    }
    .photo_wrapper {
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      .photo_title {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #eee;
      }
      .photo_list {
        overflow: hidden;
        ul {
          display: flex;
          .photo_item {
            flex: 1;
            margin-right: 10px;
            width: 200px;
            text-align: center;
            .photo_img {
              overflow: hidden;
              img {
                width: 200px;
                height: 100px;
                filter: blur(10px);
              }
            }
          }
        }
      }
      .show_all_photo {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #ffcd32;
        font-size: 16px;
      }
    }
    .data_wrapper {
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      margin-bottom: 20px;
      .data_title {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #eee;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      .data_content {
        display: flex;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        .data_rating, .data_wish, .data_comment {
          flex: 1;
          margin: 10px 0;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          .num {
            height: 50px;
            line-height: 50px;
            font-size: 30px;
            color: #fff;
            span{
              font-size: 12px;
            }
          }
          .text {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #ffcd32;
          }
        }
        .data_comment {
          border-right: none;
        }
      }
    }
    .comment_wrapper {
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      .comment_title {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #eee;
      }
      .comment_detail {
        position: relative;
        margin-left: 60px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        .avatar {
          position: absolute;
          left: -60px;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
        .name {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #ccc;
        }
        .content {
          padding: 10px 0;
          line-height: 18px;
          font-size: 14px;
          color: #bbb;
        }
        .date {
          font-size: 14px;
        }
        .usefull {
          position: absolute;
          right: 0;
          bottom: 10px;
          font-size: 12px;
          i {
            margin-right: 5px;
          }
        }
      }
      .show_all_comment {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #ffcd32;
        font-size: 16px;
      }
    }
  }
}

</style>

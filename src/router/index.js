import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/Show'
import Rank from '@/components/Rank'
import Search from '@/components/Search'
import User from '@/components/User'
import OnShow from '@/components/OnShow'
import ToShow from '@/components/ToShow'
import Detail from '@/components/Detail'
import RankList from '@/components/RankList'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/show'
    },
    {
      path: '/show',
      name: 'Show',
      component: Show,
      redirect: '/show/onshow',
      children: [
        {
          path: 'onshow',
          // components: {
          //   v1: About,
          //   v2: Slide
          // }
          component: OnShow
        },
        {
          path: 'toshow',
          component: ToShow
        }
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      children: [
        {
          path: 'ranklist',
          component: RankList
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})

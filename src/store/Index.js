import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  onshowlist: [],
  toshowlist: [],
  selected_show: 0,
  ranktype: '',
  ranklist: ''
}

const mutations = {
  set_onshowlist (state, list) {
    state.onshowlist = list
  },
  set_toshowlist (state, list) {
    state.toshowlist = list
  },
  set_selectshow (state, id) {
    state.selected_show = id
  },
  set_ranktype (state, type) {
    state.ranktype = type
  },
  set_ranklist (state, list) {
    state.ranklist = list
  }
}

const actions = {
  set_onshowlist ({commit}, list) {
    commit('set_onshowlist', list)
  },
  set_toshowlist ({commit}, list) {
    commit('set_toshowlist', list)
  },
  set_selectshow ({commit}, id) {
    commit('set_selectshow', id)
  },
  set_ranktype ({commit}, type) {
    commit('set_ranktype', type)
  },
  set_ranklist ({commit}, list) {
    commit('set_ranklist', list)
  }
}

const getters = {
  onshowlist (state) {
    return state.onshowlist
  },
  toshowlist (state) {
    return state.toshowlist
  },
  selected_show (state) {
    return state.selected_show
  },
  ranktype (state) {
    return state.ranktype
  },
  ranklist (state) {
    return state.ranklist
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

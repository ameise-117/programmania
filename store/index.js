import Vue from 'vue'
import draggable from 'vuedraggable'
Vue.component('draggable', draggable)

export const strict = false

export const state = () => ({
  isDummyHover: false
})

export const mutations = {
  setIsDummyHover(state, value) {
    state.isDummyHover = value
  }
}

export const actions = {
  isDummyHover(context, value) {
    context.commit('setIsDummyHover', value)
  }
}

import Vue from 'vue'
import draggable from 'vuedraggable'
Vue.component('draggable', draggable)

export const strict = false

export const state = () => ({
  isDummyHover: false,
  isDragEnd: false
})

export const mutations = {
  setIsDummyHover(state, value) {
    state.isDummyHover = value
  },
  setIsDragEnd(state, value) {
    state.isDragEnd = value
  }
}

export const actions = {
  isDummyHover(context, value) {
    context.commit('setIsDummyHover', value)
  },
  isDragEnd(context, value) {
    context.commit('setIsDragEnd', value)
  }
}

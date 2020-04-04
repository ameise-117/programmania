import Vue from 'vue'
import draggable from 'vuedraggable'
import SlideUpDown from 'vue-slide-up-down'
Vue.component('draggable', draggable)
Vue.component('slide-up-down', SlideUpDown)

export const strict = false

export const state = () => ({
  targetEl: null,
  isDummyHover: false,
  isDragEnd: false
})

export const mutations = {
  setTargetEl(state, value) {
    state.targetEl = value
  },
  setIsDummyHover(state, value) {
    state.isDummyHover = value
  },
  setIsDragEnd(state, value) {
    state.isDragEnd = value
  }
}

export const actions = {
  targetEl(context, value) {
    context.commit('setTargetEl', value)
  },
  isDummyHover(context, value) {
    context.commit('setIsDummyHover', value)
  },
  isDragEnd(context, value) {
    context.commit('setIsDragEnd', value)
  }
}

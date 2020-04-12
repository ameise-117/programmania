import Vue from 'vue'
import draggable from 'vuedraggable'
import SlideUpDown from 'vue-slide-up-down'
Vue.component('draggable', draggable)
Vue.component('slide-up-down', SlideUpDown)

export const strict = false

export const state = () => ({
  targetEl: null,
  startPoint: null,
  endPoint: null,
  isDummyHover: false,
  isDragEnd: false,
  isComplete: false
})

export const mutations = {
  setTargetEl(state, value) {
    state.targetEl = value
  },
  setStartPoint(state, value) {
    state.startPoint = value
  },
  setEndPoint(state, value) {
    state.endPoint = value
  },
  setIsDummyHover(state, value) {
    state.isDummyHover = value
  },
  setIsDragEnd(state, value) {
    state.isDragEnd = value
  },
  setIsComplete(state, value) {
    state.isComplete = value
  }
}

export const actions = {
  targetEl(context, value) {
    context.commit('setTargetEl', value)
  },
  startPoint(context, value) {
    context.commit('setStartPoint', value)
  },
  endPoint(context, value) {
    context.commit('setEndPoint', value)
  },
  isDummyHover(context, value) {
    context.commit('setIsDummyHover', value)
  },
  isDragEnd(context, value) {
    context.commit('setIsDragEnd', value)
  },
  isComplete(context, value) {
    context.commit('setIsComplete', value)
  }
}

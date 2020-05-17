import Vue from 'vue'
import draggable from 'vuedraggable'
import SlideUpDown from 'vue-slide-up-down'
Vue.component('draggable', draggable)
Vue.component('slide-up-down', SlideUpDown)

export const strict = false

export const state = () => ({
  targetEl: null,
  goalEl: null,
  startPointX: 0,
  startPointY: 0,
  isDummyHover: false,
  isDragEnd: false,
  isComplete: false
})

export const mutations = {
  setTargetEl(state, value) {
    state.targetEl = value
  },
  setGoalEl(state, value) {
    state.goalEl = value
  },
  setStartPointX(state, value) {
    state.startPointX = value
  },
  setStartPointY(state, value) {
    state.startPointY = value
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
  goalEl(context, value) {
    context.commit('setGoalEl', value)
  },
  startPointX(context, value) {
    context.commit('setStartPointX', value)
  },
  startPointY(context, value) {
    context.commit('setStartPointY', value)
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

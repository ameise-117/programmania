import Vue from 'vue'
import draggable from 'vuedraggable'
import SlideUpDown from 'vue-slide-up-down'
Vue.component('draggable', draggable)
Vue.component('slide-up-down', SlideUpDown)

export const strict = false

export const state = () => ({
  targetEl: null,
  goalEl: null,
  routeEls: null,
  startPointX: 0,
  startPointY: 0,
  startDegree: 0,
  startDirection: 1,
  isDummyHover: false,
  isDragEnd: false,
  isComplete: false,
  checkRotate: false,
  rotateStep: 0,
  rotateDegree: [],
  countSecond: 0
})

export const mutations = {
  setTargetEl(state, value) {
    state.targetEl = value
  },
  setGoalEl(state, value) {
    state.goalEl = value
  },
  setRouteEls(state, value) {
    state.routeEls = value
  },
  setStartPointX(state, value) {
    state.startPointX = value
  },
  setStartPointY(state, value) {
    state.startPointY = value
  },
  setStartDegree(state, value) {
    state.startDegree = value
  },
  setStartDirection(state, value) {
    state.startDirection = value
  },
  setIsDummyHover(state, value) {
    state.isDummyHover = value
  },
  setIsDragEnd(state, value) {
    state.isDragEnd = value
  },
  setIsComplete(state, value) {
    state.isComplete = value
  },
  setCheckRotate(state, value) {
    state.checkRotate = value
  },
  setRotateStep(state, value) {
    state.rotateStep = value
  },
  setRotateDegree(state, value) {
    state.rotateDegree = value
  },
  setCountSecond(state, value) {
    state.countSecond = value
  }
}

export const actions = {
  targetEl(context, value) {
    context.commit('setTargetEl', value)
  },
  goalEl(context, value) {
    context.commit('setGoalEl', value)
  },
  routeEls(context, value) {
    context.commit('setRouteEls', value)
  },
  startPointX(context, value) {
    context.commit('setStartPointX', value)
  },
  startPointY(context, value) {
    context.commit('setStartPointY', value)
  },
  startDegree(context, value) {
    context.commit('setStartDegree', value)
  },
  startDirection(context, value) {
    context.commit('setStartDirection', value)
  },
  isDummyHover(context, value) {
    context.commit('setIsDummyHover', value)
  },
  isDragEnd(context, value) {
    context.commit('setIsDragEnd', value)
  },
  isComplete(context, value) {
    context.commit('setIsComplete', value)
  },
  checkRotate(context, value) {
    context.commit('setCheckRotate', value)
  },
  rotateStep(context, value) {
    context.commit('setRotateStep', value)
  },
  rotateDegree(context, value) {
    context.commit('setRotateDegree', value)
  },
  countSecond(context, value) {
    context.commit('setCountSecond', value)
  }
}

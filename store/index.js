import Vue from 'vue'
import draggable from 'vuedraggable'
import SlideUpDown from 'vue-slide-up-down'
Vue.component('draggable', draggable)
Vue.component('slide-up-down', SlideUpDown)

export const strict = false
export const patternHalfNum = /^[1-9]+$/
export const patternFullfNum = /^[１-９]+$/
export const patternHalfDegree = /^[-|‐|－|―|ー|−]?([1-9]+(0)*)+$/
export const patternFullDegree = /^[-|‐|－|―|ー|−]?([１-９]+(０)*)+$/

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
  countSecond: 0,
  commandLimit: 0
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
  },
  setCommandLimit(state, value) {
    state.commandLimit = value
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
  },
  commandLimit(context, value) {
    context.commit('setCommandLimit', value)
  },
  inputNum(context, inputText) {
    // 半角数字の場合
    if (inputText.match(patternHalfNum)) {
      return inputText
    }

    // 全角数字の場合
    if (inputText.match(patternFullfNum)) {
      return inputText.replace(/[１-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
      })

    // その他の文字列の場合
    } else {
      return ''
    }
  },
  inputDegree(context, inputText) {
    // 角度の場合
    if (inputText.match(patternHalfDegree) || inputText.match(patternFullDegree)) {
      inputText = inputText.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
      }).replace(/[‐－―ー−]/g, '-')

      // ハイフンのみの場合
      if (inputText === '-') {
        inputText = ''

      // 4桁の数字の場合
      } else if (inputText.indexOf('-') === -1 && inputText.length > 3) {
        inputText = inputText.slice(0, -1)
      }

      return inputText

    // その他の文字列の場合
    } else {
      return ''
    }
  }
}

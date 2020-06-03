<template lang="pug">
  .main-block
    .practice
      ul.step
        li.item(@click="changeTask(1, $refs.task1)", :class="{ active: (taskNo == 1) }") STEP1
        li.item(@click="changeTask(2, $refs.task2)", :class="{ active: (taskNo == 2) }") STEP2
        li.item(@click="changeTask(3, $refs.task3)", :class="{ active: (taskNo == 3) }") STEP3
      .contents
        p.note
          | 実行ボタンをクリックするとハリネズミが動き出します
          br.br
          | 何秒後に回転するとゴールまでたどり着くでしょう？
        .wrap
          transition(:name="slideType")
            Task1(v-show="taskNo == 1", ref="task1")
          transition(:name="slideType")
            Task2(v-show="taskNo == 2", ref="task2")
          transition(:name="slideType")
            Task3(v-show="taskNo == 3", ref="task3")
        .countdown
          ul.flip
            li.item 0
            li.item {{ countSecond }}
          p.unit 秒
      li.icon-list
        ul.item.icon-hint(v-if="$store.state.isTouchDevice", @click="openModal()", :class="{ 'hover': isHintHover }", v-on:touchstart="isHintHover = true", v-on:touchend="isHintHover = false") ?
        ul.item.icon-hint(v-else, @click="openModal()", :class="{ 'hover': isHintHover }", v-on:mouseover="isHintHover = true", v-on:mouseleave="isHintHover = false") ?
        ul.item.icon-answer(v-if="$store.state.isTouchDevice", @click="setAnswer()", :class="{ 'hover': isAnswerHover }", v-on:touchstart="isAnswerHover = true", v-on:touchend="isAnswerHover = false") A
        ul.item.icon-answer(v-else, @click="setAnswer()", :class="{ 'hover': isAnswerHover }", v-on:mouseover="isAnswerHover = true", v-on:mouseleave="isAnswerHover = false") A
      img.complete(src="~/assets/images/practice/complete.png", :class="{ visible: $store.state.isComplete }")
    palet(:dragItems="dragItems")
    transition(name="modal")
      hint(v-show="isShowModal", v-on:close-modal="closeModal")
</template>

<script>
import Palet from '~/components/section/Palet.vue'
import Hint from '~/components/partial/modal/Hint2.vue'
import Task1 from '~/components/partial/practice/no_3/Task1.vue'
import Task2 from '~/components/partial/practice/no_3/Task2.vue'
import Task3 from '~/components/partial/practice/no_3/Task3.vue'

export default {
	components: {
    Palet,
    Hint,
    Task1,
    Task2,
    Task3
  },
  data() {
  	return {
  		taskNo: 1,
      isHintHover: false,
      isAnswerHover: false,
      slideType: 'next',
      dragItems: {
        'motion': [ false, true, true ],
        'figures': [ false, false, false, false, false, true, true ],
        'other': [ false, false ]
      },
      isShowModal: false
  	}
  },
  mounted() {
    // 起点設定
    this.$refs.task1.setTargetEl()
    // 回転チェックフラグ設定
    this.$store.dispatch('checkRotate', true)
  },
  computed: {
    countSecond() {
      return this.$store.state.countSecond
    }
  },
  methods: {
  	changeTask(num, task) {
      // アニメーション設定
      if (this.taskNo < num) {
        this.slideType = 'next'
      } else {
        this.slideType = 'prev'
      }

      // 起点設定
      task.setTargetEl()
      // タスクNo設定
	  	this.taskNo = num
      this.$store.dispatch('activeTab', num)
      // 完了フラグ初期状態設定
      this.$store.dispatch('isComplete', false)
      // 秒数カウント初期状態設定
      this.$store.dispatch('countSecond', 0)
	  },
    openModal() {
      this.isShowModal = true
    },
    closeModal() {
      this.isShowModal = false
    },
    setAnswer() {
      this.$store.dispatch('isSetAnswer', true)
    }
  }
}
</script>
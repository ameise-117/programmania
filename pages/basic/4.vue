<template lang="pug">
  .main-block
    .practice
      ul.step
        li.item(@click="changeTask(1, $refs.task1)", :class="{ active: (taskNo == 1) }") STEP1
        li.item(@click="changeTask(2, $refs.task2)", :class="{ active: (taskNo == 2) }") STEP2
        li.item(@click="changeTask(3, $refs.task3)", :class="{ active: (taskNo == 3) }") STEP3
      .contents
        .wrap
          transition(:name="slideType")
            Task1(v-show="taskNo == 1", ref="task1")
          transition(:name="slideType")
            Task2(v-show="taskNo == 2", ref="task2")
          transition(:name="slideType")
            Task3(v-show="taskNo == 3", ref="task3")
      li.icon-list
        ul.item.icon-answer(v-if="$store.state.isTouchDevice", @click="setAnswer()", :class="{ 'hover': isAnswerHover }", v-on:touchstart="isAnswerHover = true", v-on:touchend="isAnswerHover = false") A
        ul.item.icon-answer(v-else, @click="setAnswer()", :class="{ 'hover': isAnswerHover }", v-on:mouseover="isAnswerHover = true", v-on:mouseleave="isAnswerHover = false") A
      img.complete(src="~/assets/images/practice/complete.png", :class="{ visible: $store.state.isComplete }")
    palet(:dragItems="dragItems")
</template>

<script>
import Palet from '~/components/section/Palet.vue'
import Task1 from '~/components/partial/practice/no_4/Task1.vue'
import Task2 from '~/components/partial/practice/no_4/Task2.vue'
import Task3 from '~/components/partial/practice/no_4/Task3.vue'

export default {
	components: {
    Palet,
    Task1,
    Task2,
    Task3
  },
  data() {
  	return {
  		taskNo: 1,
      isAnswerHover: false,
      slideType: 'next',
      dragItems: {
        'motion': [ true, true, false ],
        'figures': [ false, false, false, false, true, true, false ],
        'other': [ true, true ]
      }
  	}
  },
  mounted() {
    // 起点設定
    this.$refs.task1.setTargetEl()
    // 回転チェックフラグ設定
    this.$store.dispatch('checkRotate', false)
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
	  },
    setAnswer() {
      this.$store.dispatch('isSetAnswer', true)
    }
  }
}
</script>
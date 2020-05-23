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
        .countdown
          ul.flip
            li.item 0
            li.item {{ countSecond }}
          p.unit 秒
      li.icon-list
        ul.item.icon-hint ?
        ul.item.icon-answer A
      img.complete(src="~/assets/images/practice/complete.png", :class="{ visible: $store.state.isComplete }")
    palet(:dragItems="dragItems")
</template>

<script>
import Palet from '~/components/section/Palet.vue'
import Task1 from '~/components/partial/practice/no_3/Task1.vue'
import Task2 from '~/components/partial/practice/no_3/Task2.vue'
import Task3 from '~/components/partial/practice/no_3/Task3.vue'

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
      slideType: 'next',
      dragItems: {
        'motion': [ false, true, true ],
        'figures': [ false, false, false, false, false, true, true ],
        'other': [ false, false ]
      }
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
      // 完了フラグ初期状態設定
      this.$store.dispatch('isComplete', false)
	  }
  }
}
</script>
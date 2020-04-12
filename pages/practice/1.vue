<template lang="pug">
  .practice
    ul.step
      li.item(@click="changeTask(1, $refs.task1)", :class="{ active: (taskNo == 1) }") STEP1
      li.item(@click="changeTask(2, $refs.task2)", :class="{ active: (taskNo == 2) }") STEP2
    .contents
      transition(:name="slideType")
        Task1(v-show="taskNo == 1", ref="task1")
      transition(:name="slideType")
        Task2(v-show="taskNo == 2", ref="task2")
    img.complete(src="~/assets/images/practice/complete.gif", :class="{ visible: $store.state.isComplete }")
</template>

<script>
import Task1 from '~/components/partial/practice/no_1/Task1.vue'
import Task2 from '~/components/partial/practice/no_1/Task2.vue'

export default {
	components: {
    Task1,
    Task2
  },
  data() {
  	return {
  		taskNo: 1,
      slideType: 'next'
  	}
  },
  mounted() {
    // 起点設定
    this.$refs.task1.setTargetEl()
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
	  }
  }
}
</script>
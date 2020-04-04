<template lang="pug">
  .practice
    ul.step
      li.item(@click="changeTask(1)", :class="{ active: (taskNo == 1) }") STEP1
      li.item(@click="changeTask(2)", :class="{ active: (taskNo == 2) }") STEP2
      li.item(@click="changeTask(3)", :class="{ active: (taskNo == 3) }") STEP3
    .contents
      transition(:name="slideType")
        Task1(v-if="taskNo == 1")
        Task2(v-if="taskNo == 2")
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
  methods: {
  	changeTask(num) {
      if (this.taskNo < num) {
        this.slideType = 'next'
      } else {
        this.slideType = 'prev'
      }
	  	this.taskNo = num
	  }
  }
}
</script>
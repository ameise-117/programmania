<template lang="pug">
	.task
		table.table
			tbody
				tr.tr.left
					td.td
					td.td.end.line.left
						.point
					td.td
				tr.tr.left
					td.td
					td.td.line.left
					td.td
				tr.tr.left
					td.td
					td.td.start.line.left
						.point
						.target(ref="targetEl")
					td.td
</template>

<script>
export default {
  methods: {
  	setTargetEl() {
      // 動作対象を設定
    	this.$store.dispatch('targetEl', this.$refs.targetEl)
	  }
  }
}
</script>
<template lang="pug">
	.task
		table.table
			tbody
				tr.tr
					td.td
					td.td
					td.td
				tr.tr
					td.td
					td.td
					td.td
				tr.tr
					td.td.start.line.bottom
						.point
						.target.right(ref="targetEl")
					td.td.line.bottom
					td.td.end.line.bottom
						.point
						.target(ref="endPoint")
</template>

<script>
export default {
  methods: {
  	setTargetEl() {
      // 動作対象を設定
    	this.$store.dispatch('targetEl', this.$refs.targetEl)
    	this.$store.dispatch('endPoint', this.$refs.endPoint)
	  }
  }
}
</script>
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
						.target(ref="targetEl")
					td.td.line.bottom
					td.td.end.line.bottom
						.point
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
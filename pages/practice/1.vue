<template lang="pug">
	.practice
		ul.step
			li.item.active STEP1
			li.item STEP2
			li.item STEP3
		.contents
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
							.target(ref="targetEl")
						td.td.line.bottom
						td.td.end.line.bottom
</template>

<script>
export default {
  mounted() {
    // 動作対象を設定
    this.$store.dispatch('targetEl', this.$refs.targetEl)
  }
}
</script>
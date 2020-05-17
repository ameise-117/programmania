<template lang="pug">
	.task
		svg(width="81" height="241" viewBox="0 0 81 241")
			g(transform="translate(-505 -600)")
				g(transform="translate(1012 104) rotate(90)")
					rect(width="200" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(533 733) rotate(90)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(517 825)" fill="#707070")
				g(transform="translate(517 625)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(562 840)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(556 638)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				image(ref="targetEl" width="40" height="33.333" :transform="startPosition" xlink:href="~/assets/images/practice/target_center.png")
				rect(ref="goalEl" width="40" height="33.33" transform="translate(505 600)" fill="none")
</template>

<script>
export default {
	computed: {
		startPosition() {
			const x = this.$store.state.startPointX
			const y = this.$store.state.startPointY
      return `translate(${x}, ${y})`
		}
	},
  methods: {
  	setTargetEl() {
      // 動作対象を設定
    	this.$store.dispatch('targetEl', this.$refs.targetEl)
    	this.$store.dispatch('goalEl', this.$refs.goalEl)
    	this.$store.dispatch('startPointX', 505)
    	this.$store.dispatch('startPointY', 800)
	  }
  }
}
</script>

<style scoped>
.task {
}
</style>
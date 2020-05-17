<template lang="pug">
	.task
		svg(width="344" height="63" viewBox="0 0 344 63")
			g(transform="translate(-505 -447)")
				g
					rect(width="300" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(629.5 479.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				line(y2="17" transform="translate(729.5 479.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(521 479)" fill="#707070")
				g(transform="translate(821 479)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(529 509)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(829 509)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				image(ref="targetEl" width="40" height="38.621" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="goalEl" width="40" height="38.62" transform="translate(809 447)" fill="none")
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
    	this.$store.dispatch('startPointX', 509)
    	this.$store.dispatch('startPointY', 447)
	  }
  }
}
</script>

<style scoped>
.task {
	padding-top: 50px;
}
</style>
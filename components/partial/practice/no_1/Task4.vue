<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="344" height="247" viewBox="0 0 344 247")
			g(transform="translate(-775 -383)")
				g(transform="translate(266 -69)")
					rect(width="300" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(895.5 410.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				line(y2="17" transform="translate(995.5 410.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(1087 410)" fill="#707070")
				text(transform="translate(1095 440)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				g(transform="translate(1282 -115) rotate(90)")
					rect(width="204" height="8" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(787 614)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(826 627)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				line(y2="17" transform="translate(803 522) rotate(90)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				image(ref="targetEl" width="40" height="38.621" :transform="startPosition" xlink:href="~/assets/images/practice/target_left.png")
				rect(ref="routeEl1" width="40" height="38.62" transform="translate(975 383)" fill="none")
				rect(ref="routeEl2" width="40" height="38.62" transform="translate(875 383)" fill="none")
				rect(ref="routeEl3" width="40" height="38.62" transform="translate(775 383)" fill="none")
				rect(ref="routeEl4" width="40" height="38.62" transform="translate(775 483)" fill="none")
				rect(ref="goalEl" width="40" height="38.62" transform="translate(775 583)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 4
		}
	},
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
    	this.$store.dispatch('startPointX', 1075)
    	this.$store.dispatch('startPointY', 383)

    	// チェックポイントを格納
    	let routeEls = []
    	for (var i = 1; i <= this.checkPoint; i++) {
    		routeEls.push(this.$refs['routeEl' + i])
    	}
    	this.$store.dispatch('routeEls', routeEls)
	  }
  }
}
</script>
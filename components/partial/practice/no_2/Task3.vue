<template lang="pug">
	.task
		svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="273" height="252" viewBox="0 0 273 252")
			g(transform="translate(-381 -487)")
				g(transform="translate(-124 229)")
					rect(width="200" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(505.5 708.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(397 708)" fill="#707070")
				text(transform="translate(405 738)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				g(transform="translate(1092 -13.317) rotate(90)")
					rect(width="204" height="8" transform="translate(529.317 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(613 616) rotate(90)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				g(transform="translate(597 508)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(636 521)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="routeEl1" width="40" height="28.85" transform="translate(485 687)" fill="none")
				rect(ref="routeEl2" width="40" height="28.85" transform="translate(585 687)" fill="none")
				rect(ref="routeEl3" width="40" height="28.85" transform="translate(585 587)" fill="none")
				rect(ref="goalEl" width="40" height="28.85" transform="translate(585 487)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 3
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
    	this.$store.dispatch('startPointX', 385)
    	this.$store.dispatch('startPointY', 687)

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
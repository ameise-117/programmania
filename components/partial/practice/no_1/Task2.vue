<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81" height="241" viewBox="0 0 81 241")
			g(transform="translate(-121 -355)")
				g(transform="translate(628 -141) rotate(90)")
					rect(width="200" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(149 488) rotate(90)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(133 580)" fill="#707070")
				g(transform="translate(133 380)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(178 595)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(172 393)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				image(ref="targetEl" width="40" height="33.333" :transform="startPosition" xlink:href="~/assets/images/practice/target_center.png")
				rect(ref="routeEl1" width="40" height="33.33" transform="translate(121 455)" fill="none")
				rect(ref="goalEl" width="40" height="33.33" transform="translate(121 355)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 1,
			startDegree: 0
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
    	this.$store.dispatch('startPointX', 121)
    	this.$store.dispatch('startPointY', 555)

    	// チェックポイントを格納
    	let routeEls = []
    	for (var i = 1; i <= this.checkPoint; i++) {
    		routeEls.push(this.$refs['routeEl' + i])
    	}
    	this.$store.dispatch('routeEls', routeEls)

    	// 起点角度を設定
    	this.$store.dispatch('startDegree', this.startDegree)
	  }
  }
}
</script>
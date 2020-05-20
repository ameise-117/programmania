<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="348" height="87.778" viewBox="0 0 348 87.778")
			g(transform="translate(-1480 -306)")
				g(transform="translate(975 -152)")
					rect(width="300" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(1604.5 327.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				line(y2="17" transform="translate(1704.5 327.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(1496 327)" fill="#707070")
				g(transform="translate(1796 327)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(1504 357)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(1804 357)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") 折り返し
				circle(cx="5" cy="5" r="5" transform="translate(1799 383)" fill="#d4d4d4")
				circle(cx="5" cy="5" r="5" transform="translate(1799 370)" fill="#d4d4d4")
				circle(cx="5" cy="5" r="5" transform="translate(1499 383)" fill="#d4d4d4")
				circle(cx="5" cy="5" r="5" transform="translate(1499 370)" fill="#d4d4d4")
				text(transform="translate(1654 390)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-15.337" y="0") 2
					tspan(y="0" font-family="HiraginoSans-W3, Hiragino Sans") 往復
				line(x2="98" transform="translate(1534.5 386)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1534.5 386) rotate(45)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1534.5 386.071) rotate(-45)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="98" transform="translate(1773.5 386.071) rotate(180)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1773.5 386.071) rotate(-135)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1773.5 386) rotate(135)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="routeEl6" width="40" height="28.85" transform="translate(1484 306)" fill="none")
				rect(ref="goalEl" width="40" height="28.85" transform="translate(1484 306)" fill="none")
				rect(ref="routeEl1" width="40" height="28.85" transform="translate(1584 306)" fill="none")
				rect(ref="routeEl5" width="40" height="28.85" transform="translate(1584 306)" fill="none")
				rect(ref="routeEl7" width="40" height="28.85" transform="translate(1584 306)" fill="none")
				rect(ref="routeEl11" width="40" height="28.85" transform="translate(1584 306)" fill="none")
				rect(ref="routeEl2" width="40" height="28.85" transform="translate(1684 306)" fill="none")
				rect(ref="routeEl4" width="40" height="28.85" transform="translate(1684 306)" fill="none")
				rect(ref="routeEl8" width="40" height="28.85" transform="translate(1684 306)" fill="none")
				rect(ref="routeEl10" width="40" height="28.85" transform="translate(1684 306)" fill="none")
				rect(ref="routeEl3" width="40" height="28.85" transform="translate(1784 306)" fill="none")
				rect(ref="routeEl9" width="40" height="28.85" transform="translate(1784 306)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 11
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
    	this.$store.dispatch('goalEl', null)
    	this.$store.dispatch('startPointX', 1484)
    	this.$store.dispatch('startPointY', 306)

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
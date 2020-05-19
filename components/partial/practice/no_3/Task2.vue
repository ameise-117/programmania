<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="364" height="114.818" viewBox="0 0 364 114.818")
			g(transform="translate(-423 -1573.182)")
				g(transform="translate(337.573 1474)" fill="none")
					path(d="M177.427,195a49.763,49.763,0,0,1,8.478-27.864l41.521,23.972V195Z" stroke="none")
					path(d="M 226.4264068603516 193.9994049072266 L 226.4264068603516 191.6848754882812 L 186.2213287353516 168.4724578857422 C 181.2989044189453 176.1009216308594 178.6196746826172 184.8872222900391 178.4369354248047 193.9994049072266 L 226.4264068603516 193.9994049072266 M 227.4264068603516 194.9994049072266 L 177.4269104003906 194.9994049072266 C 177.4269104003906 184.6829986572266 180.5506744384766 175.097412109375 185.9049224853516 167.1350860595703 L 227.4264068603516 191.1075286865234 L 227.4264068603516 194.9994049072266 Z" stroke="none" fill="#c1c1bd")
				text(transform="translate(763 1687)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				g(transform="translate(34 1178)")
					rect(width="200" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(663.5 1657.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(755 1657)" fill="#707070")
				text(transform="translate(441 1615)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				text(transform="translate(507 1658)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 30°
				line(x2="94" transform="translate(469.5 1668.5)" fill="none" stroke="#c1c1bd" stroke-width="1")
				g(transform="translate(257.675 924.682) rotate(30)")
					rect(width="109.185" height="8" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(467.962 1598.725) rotate(30)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				image(ref="targetEl" width="40" height="38.621" :transform="startPosition" xlink:href="~/assets/images/practice/target_left.png")
				rect(ref="routeEl1" width="40" height="38.62" transform="translate(643 1630)" fill="none")
				rect(ref="routeEl2" width="40" height="38.62" transform="translate(543 1630)" fill="none")
				rect(ref="goalEl" width="40" height="38.62" transform="matrix(0.86603,0.5,-0.5,0.86603,468.73215,1572.58703)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 2
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
    	this.$store.dispatch('startPointX', 743)
    	this.$store.dispatch('startPointY', 1630)

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
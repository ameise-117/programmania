<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="258.5" height="180.306" viewBox="0 0 258.5 180.306")
			g(transform="translate(-197 -1231.012)")
				g(transform="translate(310.665 987.651) rotate(45)" fill="none")
					path(d="M 200.4981536865234 228.1000061035156 L 152.0462036132812 228.1000061035156 L 186.2743072509766 193.8719177246094 C 190.6766967773438 198.3416900634766 194.1455230712891 203.5231323242188 196.5883026123047 209.2797546386719 C 199.1196746826172 215.2451629638672 200.4342651367188 221.5746002197266 200.4981536865234 228.1000061035156 Z" stroke="none")
					path(d="M 199.9907073974609 227.6000061035156 C 199.8663330078125 221.3184967041016 198.5684356689453 215.2261352539062 196.1280212402344 209.4750518798828 C 193.775390625 203.9308776855469 190.4611968994141 198.9255065917969 186.2698364257812 194.5835113525391 L 153.2533111572266 227.6000061035156 L 199.9907073974609 227.6000061035156 M 201.0006103515625 228.6000061035156 L 151.1613006591797 228.6000061035156 L 151.0001983642578 228.4389038085938 L 186.2752532958984 193.1638641357422 C 195.3702850341797 202.2183227539062 201.0006103515625 214.752197265625 201.0006103515625 228.6000061035156 Z" stroke="none" fill="#c1c1bd")
				line(x2="200" transform="translate(255.5 1256.5)" fill="none" stroke="#c1c1bd" stroke-width="1")
				text(transform="translate(221 1262)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(369 1404)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				text(transform="translate(313 1281)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 45°
				g(transform="translate(226.931 536.733) rotate(45)")
					rect(width="200" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(332.793 1320.207) rotate(45)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				g(transform="translate(397.847 1385.968) rotate(45)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				circle(cx="8" cy="8" r="8" transform="translate(255.718 1245.254) rotate(45)" fill="#707070")
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="routeEl1" width="40" height="28.85" transform="matrix(0.70711,0.70711,-0.70711,0.70711,332.79227,1292.62973)" fill="none")
				rect(ref="goalEl" width="40" height="28.85" transform="matrix(0.70711,0.70711,-0.70711,0.70711,403.50297,1363.34043)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 1
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
    	this.$store.dispatch('startPointX', 246.023)
    	this.$store.dispatch('startPointY', 1231.836)

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
<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="415.84" height="129.9" viewBox="0 0 415.84 129.9")
			g(transform="translate(-1894 -1408.4)")
				g(transform="translate(1814.5 1339.791)" fill="none")
					path(d="M251,198.455H151a49.807,49.807,0,0,1,8.05-27.218l41.45,24.218,42.173-24.64A49.777,49.777,0,0,1,251,198.454Z" stroke="none")
					path(d="M 249.9900665283203 197.4545135498047 C 249.8088531494141 188.4392852783203 247.1808776855469 179.7329864501953 242.3544311523438 172.1589965820312 L 201.0046844482422 196.3182373046875 L 200.5002136230469 196.6129760742188 L 199.9957427978516 196.3182373046875 L 159.3770904541016 172.5856781005859 C 154.72314453125 180.0575714111328 152.1882476806641 188.61572265625 152.0102691650391 197.4545135498047 L 249.9900665283203 197.4545135498047 M 251.0001068115234 198.4545135498047 L 151.0001983642578 198.4545135498047 C 151.0001983642578 188.7477264404297 153.7842559814453 179.3362731933594 159.0503997802734 171.2366027832031 L 200.5002136230469 195.4548034667969 L 242.6727142333984 170.8148651123047 C 248.1206665039062 179.0126800537109 250.999755859375 188.5698699951172 251.0001068115234 198.4535064697266 L 251.0001068115234 198.4545135498047 Z" stroke="none" fill="#c1c1bd")
				line(x2="263" transform="translate(1923.5 1537.8)" fill="none" stroke="#c1c1bd" stroke-width="1")
				g(transform="translate(1717.115 799.241) rotate(30)")
					rect(width="96.309" height="8" transform="translate(529 483)" fill="#dcdcd9")
				circle(cx="8" cy="8" r="8" transform="translate(1923.743 1477.495)" fill="#707070")
				text(transform="translate(1918 1507)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(2290 1456.26)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				path(d="M161.242,202.25h0l-2.222-1.283-2.889-5L332.258,94.276l4,6.928L161.242,202.25Z" transform="translate(1853.8 1335.951)" fill="#dcdcd9")
				g(transform="translate(1657 947.26)")
					rect(width="104" height="8" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(2282 1426.26)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(1957 1529)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 30°
				text(transform="translate(2076 1529)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 30°
				line(y2="17" transform="translate(2099.099 1476.4) rotate(-30)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="goalEl" width="40" height="28.85" transform="matrix(1,0,0,1,2268.0436,1409.144)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			rotateStep: 4,
			rotateDegree: [ 30, -60, 30 ],
			startDegree: 0,
			startDirection: 1
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
			this.$store.dispatch('startPointX', 1908.236)
			this.$store.dispatch('startPointY', 1459.144)

			// チェックポイントを格納
    	this.$store.dispatch('rotateStep', this.rotateStep)
    	this.$store.dispatch('rotateDegree', this.rotateDegree)
    	
    	// 起点角度を設定
    	this.$store.dispatch('startDegree', this.startDegree)

    	// 起点方向を設定
    	this.$store.dispatch('startDirection', this.startDirection)
		}
	}
}
</script>
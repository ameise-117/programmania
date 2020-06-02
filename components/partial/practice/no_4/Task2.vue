<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="264.479" height="274.87" viewBox="0 0 264.479 274.87")
			g(transform="translate(-1949.221 -265)")
				g(transform="translate(1973 319)" fill="none")
					path(d="M176,181V156h25v25Z" stroke="none")
					path(d="M 199.9997100830078 179.9999084472656 L 199.9997100830078 156.9997100830078 L 177.0003967285156 156.9997100830078 L 177.0003967285156 179.9999084472656 L 199.9997100830078 179.9999084472656 M 200.9997100830078 180.9999084472656 L 176.0003967285156 180.9999084472656 L 176.0003967285156 155.9997100830078 L 200.9997100830078 155.9997100830078 L 200.9997100830078 180.9999084472656 Z" stroke="none" fill="#c1c1bd")
				g(transform="translate(2483 -210) rotate(90)")
					rect(width="185" height="8" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(1463 13)")
					rect(width="186" height="8" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(2661 -210) rotate(90)")
					rect(width="185" height="8" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(1463 -164)")
					rect(width="186" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(2085.5 315.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(1988 315)" fill="#707070")
				text(transform="translate(2028 342)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				line(x1="216.5" transform="translate(1996.5 283.071)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(y1="257.3" transform="translate(2213.2 282.57)" fill="none" stroke="#c1c1bd" stroke-width="1")
				line(y1="216" transform="translate(1957 323.5)" fill="none" stroke="#c1c1bd" stroke-width="1")
				line(x1="257" transform="translate(1956.5 539.37)" fill="none" stroke="#c1c1bd" stroke-width="1")
				text(transform="translate(2213 276)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-18.674" y="0") 2
					tspan(y="0" font-family="HiraginoSans-W3, Hiragino Sans") 周
				line(x2="10" transform="translate(1956.999 323.497) rotate(135)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1956.928 323.497) rotate(45)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(y2="17" transform="translate(2085.5 492.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				line(y2="17" transform="translate(2181.5 412) rotate(90)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				line(y2="17" transform="translate(2003.5 412) rotate(90)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="routeEl1" width="40" height="28.85" transform="translate(2065 297)" fill="none")
				rect(ref="routeEl2" width="40" height="28.85" transform="translate(2165 297)" fill="none")
				rect(ref="routeEl3" width="40" height="28.85" transform="translate(2199.425 391.425) rotate(90)" fill="none")
				rect(ref="routeEl4" width="40" height="28.85" transform="translate(2199.425 491.425) rotate(90)" fill="none")
				rect(ref="routeEl5" width="40" height="28.85" transform="translate(2065 497)" fill="none")
				rect(ref="routeEl6" width="40" height="28.85" transform="translate(1965 497)" fill="none")
				rect(ref="routeEl7" width="40" height="28.85" transform="translate(1999.425 391.425) rotate(90)" fill="none")
				rect(ref="routeEl8" width="40" height="28.85" transform="translate(1999.425 291.425) rotate(90)" fill="none")
				rect(ref="routeEl9" width="40" height="28.85" transform="translate(2065 297)" fill="none")
				rect(ref="routeEl10" width="40" height="28.85" transform="translate(2165 297)" fill="none")
				rect(ref="routeEl11" width="40" height="28.85" transform="translate(2199.425 391.425) rotate(90)" fill="none")
				rect(ref="routeEl12" width="40" height="28.85" transform="translate(2199.425 491.425) rotate(90)" fill="none")
				rect(ref="routeEl13" width="40" height="28.85" transform="translate(2065 497)" fill="none")
				rect(ref="routeEl14" width="40" height="28.85" transform="translate(1965 497)" fill="none")
				rect(ref="routeEl15" width="40" height="28.85" transform="translate(1999.425 391.425) rotate(90)" fill="none")
				rect(ref="goalEl" width="40" height="28.85" transform="translate(1965 297)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 15,
			startDegree: 0,
			startDirection: 1,
			commandLimit: 6,
			answer: [
				{ 'el': 'elRoopStart', 'val': 8 },
				{ 'el': 'elDirForward', 'val': 2 },
				{ 'el': 'elMotGo' },
				{ 'el': 'elCalcDegree', 'val': 90 },
				{ 'el': 'elMotRolate' },
				{ 'el': 'elRoopEnd' }
			]
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
			this.$store.dispatch('startPointX', 1965)
			this.$store.dispatch('startPointY', 297)

			// チェックポイントを格納
			let routeEls = []
			for (var i = 1; i <= this.checkPoint; i++) {
				routeEls.push(this.$refs['routeEl' + i])
			}
			this.$store.dispatch('routeEls', routeEls)

			// 起点角度を設定
			this.$store.dispatch('startDegree', this.startDegree)

			// 起点方向を設定
			this.$store.dispatch('startDirection', this.startDirection)

			// コマンド上限を設定
    	this.$store.dispatch('commandLimit', this.commandLimit)

    	// 解答を設定
    	this.$store.dispatch('answer', this.answer)
		}
	}
}
</script>
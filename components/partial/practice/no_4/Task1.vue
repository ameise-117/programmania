<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="344" height="78.778" viewBox="0 0 344 78.778")
			g(transform="translate(-1484 -531)")
				g(transform="translate(979 54)")
					rect(width="300" height="8" rx="4" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(979 64)")
					rect(width="300" height="8" rx="4" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="21" transform="translate(1608.5 535.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				line(y2="21" transform="translate(1708.5 535.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(1500 538)" fill="#707070")
				g(transform="translate(1800 538)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(1508 576)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(1808 576)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.46" y="0") ターン
				rect(width="40" height="28.85" transform="translate(1588 531)" fill="none")
				rect(width="40" height="28.85" transform="translate(1688 531)" fill="none")
				rect(width="40" height="28.85" transform="translate(1788 531)" fill="none")
				text(transform="translate(1658 606)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-15.337" y="0") 1
					tspan(y="0" font-family="HiraginoSans-W3, Hiragino Sans") 往復
				line(x2="120" transform="translate(1508.5 602)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1508.5 602) rotate(45)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1508.5 602.071) rotate(-45)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x1="120" transform="translate(1687.5 602.071)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1807.5 602.071) rotate(-135)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="translate(1807.5 602) rotate(135)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="routeEl1" width="40" height="28.85" transform="translate(1588 531)" fill="none")
				rect(ref="routeEl2" width="40" height="28.85" transform="translate(1688 531)" fill="none")
				rect(ref="routeEl3" width="40" height="28.85" transform="translate(1788 531)" fill="none")
				rect(ref="routeEl4" width="40" height="28.85" transform="translate(1688 531)" fill="none")
				rect(ref="routeEl5" width="40" height="28.85" transform="translate(1588 531)" fill="none")
				rect(ref="goalEl" width="40" height="28.85" transform="translate(1488 531)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 5,
			startDegree: 0,
			startDirection: 1,
			commandLimit: 6,
			answer: [
				{ 'el': 'elRoopStart', 'val': 2 },
				{ 'el': 'elDirForward', 'val': 3 },
				{ 'el': 'elMotGo' },
				{ 'el': 'elCalcDegree', 'val': 180 },
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
			this.$store.dispatch('startPointX', 1488)
			this.$store.dispatch('startPointY', 531)

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
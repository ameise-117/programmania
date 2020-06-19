<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="330.518" height="160.805" viewBox="0 0 330.518 160.805")
			g(transform="translate(-2232.488 -969.195)")
				g(transform="translate(2387.358 740.063) rotate(45)" fill="none")
					path(d="M176,181V156h25v25Z" stroke="none")
					path(d="M 199.9997100830078 179.9999084472656 L 199.9997100830078 156.9997100830078 L 177.0003967285156 156.9997100830078 L 177.0003967285156 179.9999084472656 L 199.9997100830078 179.9999084472656 M 200.9997100830078 180.9999084472656 L 176.0003967285156 180.9999084472656 L 176.0003967285156 155.9997100830078 L 200.9997100830078 155.9997100830078 L 200.9997100830078 180.9999084472656 Z" stroke="none" fill="#c1c1bd")
				g(transform="translate(2369.083 253.603) rotate(45)")
					rect(width="190.53" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(2468.452 1030.381) rotate(45)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(2533.506 1095.435) rotate(45)" fill="#707070")
				text(transform="translate(2534 1129)" fill="#707070" font-size="12")
					tspan(x="-24" y="0") スタート
				text(transform="translate(2270 1129)" fill="#707070" font-size="12")
					tspan(x="-17.58" y="0") ゴール
				g(transform="translate(1551.56 1136.193) rotate(-45)")
					rect(width="187.958" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(2335.339 1030.432) rotate(-45)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				g(transform="translate(2258.667 1106.496) rotate(-45)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				image(ref="targetEl" width="40" height="38.621" :transform="startPosition" xlink:href="~/assets/images/task/target_left.png")
				rect(ref="goalEl" width="40" height="38.62" transform="matrix(0.70711,-0.70711,0.70711,0.70711,2232.36645,1097.79205)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			rotateStep: 4,
			rotateDegree: [ 45, -90 ],
			startDegree: 0,
			startDirection: -1,
			commandLimit: 6,
			answer: [
				{ 'el': 'elCalcDegree', 'val': 45 },
				{ 'el': 'elMotRolate' },
				{ 'el': 'elCalcTime', 'val': 2 },
				{ 'el': 'elMotWait' },
				{ 'el': 'elCalcDegree', 'val': -90 },
				{ 'el': 'elMotRolate' }
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
			this.$store.dispatch('startPointX', 2523.006)
			this.$store.dispatch('startPointY', 1077.994)

			// チェックポイントを格納
    	this.$store.dispatch('rotateStep', this.rotateStep)
    	this.$store.dispatch('rotateDegree', this.rotateDegree)
    	
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
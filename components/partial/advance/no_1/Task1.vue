<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="203.185" height="200.621" viewBox="0 0 203.185 200.621")
			g(transform="translate(-144 -326)")
				path(d="M101.593,0,203.185,73.719,164.38,193H38.8L0,73.719Z" transform="translate(144 326)" fill="#dcdcd9")
				g#trackEl
					line.track(v-for="item in $store.state.tracks" :x1="item.startx" :x2="item.startx" :y1="item.starty" :y2="item.starty" :stroke="item.stroke" stroke-width="2" stroke-linecap="round")
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/task/target_pen_left.png")
</template>

<script>
export default {
	data() {
		return {
			startDegree: 0,
			startDirection: -1,
			commandLimit: 8,
			answer: [
				{ 'el': 'elCalcDegree', 'val': 108 },
				{ 'el': 'elMotRolate' },
				{ 'el': 'elRoopStart', 'val': 5 },
				{ 'el': 'elDirForward', 'val': 1 },
				{ 'el': 'elMotGo' },
				{ 'el': 'elCalcDegree', 'val': -72 },
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
			this.$store.dispatch('startPointX', 291)
			this.$store.dispatch('startPointY', 488)

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
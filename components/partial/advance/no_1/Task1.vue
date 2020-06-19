<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="344" height="52" viewBox="0 -50 344 52")
			g(transform="translate(-121 -282)")
				g(transform="translate(-384 -176)")
					rect(width="300" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(245.5 303.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				line(y2="17" transform="translate(345.5 303.5)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(137 303)" fill="#707070")
				g(transform="translate(437 303)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(145 333)" fill="#707070" font-size="12")
					tspan(x="-24" y="0") スタート
				text(transform="translate(445 333)" fill="#707070" font-size="12")
					tspan(x="-17.58" y="0") ゴール
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="routeEl1" width="40" height="28.85" transform="translate(225 282)" fill="none")
				rect(ref="routeEl2" width="40" height="28.85" transform="translate(325 282)" fill="none")
				rect(ref="goalEl" width="40" height="28.85" transform="translate(425 282)" fill="none")
				g(id="trackEl")
					line.track(v-for="item in $store.state.tracks" :x1="item.startx" :x2="item.startx" :y1="item.starty" :y2="item.starty" :stroke="item.stroke" stroke-width="2" stroke-linecap="round")
</template>

<script>
export default {
	data() {
		return {
			startDegree: 0,
			commandLimit: 8,
			answer: [
				{ 'el': 'elCalcDegree', 'val': -108 },
				{ 'el': 'elMotRolate' },
				{ 'el': 'elRoopStart', 'val': 5 },
				{ 'el': 'elDirForward', 'val': 1 },
				{ 'el': 'elMotGo' },
				{ 'el': 'elCalcDegree', 'val': 72 },
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
    	this.$store.dispatch('startPointX', 125)
    	this.$store.dispatch('startPointY', 282)

    	// 起点角度を設定
    	this.$store.dispatch('startDegree', this.startDegree)

    	// コマンド上限を設定
    	this.$store.dispatch('commandLimit', this.commandLimit)

    	// 解答を設定
    	this.$store.dispatch('answer', this.answer)
	  }
  }
}
</script>
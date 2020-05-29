<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="192" height="251.574" viewBox="0 0 192 251.574")
			g(transform="translate(-1420 -884.426)")
				g(transform="translate(1303 932)" fill="none")
					path(d="M176,181V156h25v25Z" stroke="none")
					path(d="M 199.9997100830078 179.9999084472656 L 199.9997100830078 156.9997100830078 L 177.0003967285156 156.9997100830078 L 177.0003967285156 179.9999084472656 L 199.9997100830078 179.9999084472656 M 200.9997100830078 180.9999084472656 L 176.0003967285156 180.9999084472656 L 176.0003967285156 155.9997100830078 L 200.9997100830078 155.9997100830078 L 200.9997100830078 180.9999084472656 Z" stroke="none" fill="#c1c1bd")
				g(transform="translate(950 626)")
					rect(width="112" height="8" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(1966 384) rotate(90)")
					rect(width="204" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(1486.5 1015) rotate(90)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				g(transform="translate(1471 905)" fill="#707070" stroke="#707070" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				text(transform="translate(1444 918)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(1594 1135)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				g(transform="translate(1586 1105)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="goalEl" width="40" height="28.85" transform="matrix(1,0,0,1,1573,1090)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			rotateStep: 3,
			rotateDegree: [ -90 ],
			startDegree: 90,
			startDirection: 1,
			commandLimit: 4
		}
	},
	computed: {
		startPosition() {
			const x = this.$store.state.startPointX
			const y = this.$store.state.startPointY
      return `translate(${x}, ${y}) rotate(90)`
		}
	},
  methods: {
  	setTargetEl() {
      // 動作対象を設定
    	this.$store.dispatch('targetEl', this.$refs.targetEl)
    	this.$store.dispatch('goalEl', this.$refs.goalEl)
    	this.$store.dispatch('startPointX', 1507.426)
    	this.$store.dispatch('startPointY', 884.426)

    	// チェックポイントを格納
    	this.$store.dispatch('rotateStep', this.rotateStep)
    	this.$store.dispatch('rotateDegree', this.rotateDegree)
    	
    	// 起点角度を設定
    	this.$store.dispatch('startDegree', this.startDegree)

    	// 起点方向を設定
    	this.$store.dispatch('startDirection', this.startDirection)

    	// コマンド上限を設定
    	this.$store.dispatch('commandLimit', this.commandLimit)
	  }
  }
}
</script>
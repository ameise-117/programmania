<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="327.178" height="196.431" viewBox="0 0 327.178 196.431")
			g(transform="translate(-1167.327 -1425.569)")
				g(transform="translate(1106 1269)" fill="none")
					path(d="M173,195H273a50,50,0,0,1-100,0Z" stroke="none")
					path(d="M 174.0097045898438 196.0003051757812 C 174.1337890625 202.2622375488281 175.4241943359375 208.3373870849609 177.8500671386719 214.0727386474609 C 180.3179626464844 219.9074401855469 183.8511962890625 225.1477508544922 188.3515930175781 229.6481170654297 C 192.8520202636719 234.1484680175781 198.0924224853516 237.6816711425781 203.9272308349609 240.1495513916016 C 209.9676208496094 242.7043762207031 216.3846893310547 243.9998016357422 223.0001983642578 243.9998016357422 C 229.6154937744141 243.9998016357422 236.0323791503906 242.7043914794922 242.0726318359375 240.1495513916016 C 247.9073486328125 237.6816711425781 253.1476440429688 234.1484680175781 257.6480102539062 229.6481170654297 C 262.1483764648438 225.1477508544922 265.6815795898438 219.9074401855469 268.1494750976562 214.0727386474609 C 270.5753173828125 208.3373718261719 271.86572265625 202.2622375488281 271.9898071289062 196.0003051757812 L 174.0097045898438 196.0003051757812 M 172.9998168945312 195.0003051757812 L 272.9996948242188 195.0003051757812 C 272.9996948242188 222.6141052246094 250.614013671875 244.9998016357422 223.0001983642578 244.9998016357422 C 195.385498046875 244.9998016357422 172.9998168945312 222.6141052246094 172.9998168945312 195.0003051757812 Z" stroke="none" fill="#c1c1bd")
				g(transform="translate(478.604 1630.743) rotate(-45)")
					rect(width="190.29" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(1262.786 1524.677) rotate(-45)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(1185.711 1601.045) rotate(-45)" fill="#707070")
				text(transform="translate(1197 1621)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(1459 1621)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				g(transform="translate(1297.647 749.549) rotate(45)")
					rect(width="188.24" height="8" transform="translate(529 483)" fill="#dcdcd9")
				line(y2="17" transform="translate(1395.398 1525.415) rotate(45)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				g(transform="translate(1451.101 1592.897)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				line(x2="262" transform="translate(1197.5 1464.5)" fill="none" stroke="#c1c1bd" stroke-width="1")
				text(transform="translate(1386 1490)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 45°
				text(transform="translate(1271 1490)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 45°
				text(transform="translate(1331 1526)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 90°
				image(ref="targetEl" width="40" height="28.852" :transform="startPosition" xlink:href="~/assets/images/practice/target_right.png")
				rect(ref="routeEl1" width="40" height="28.85" transform="matrix(0.70711,-0.70711,0.70711,0.70711,1233.69473,1524.54473)" fill="none")
				rect(ref="routeEl2" width="40" height="28.85" transform="matrix(0.70711,-0.70711,0.70711,0.70711,1304.40543,1453.83403)" fill="none")
				rect(ref="routeEl3" width="40" height="28.85" transform="matrix(0.70711,0.70711,-0.70711,0.70711,1395.51757,1496.26033)" fill="none")
				rect(ref="goalEl" width="40" height="28.85" transform="matrix(0.70711,0.70711,-0.70711,0.70711,1466.22827,1566.97103)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 3,
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
			this.$store.dispatch('startPointX', 1167.327)
			this.$store.dispatch('startPointY', 1576.888)

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
		}
	}
}
</script>
<template lang="pug">
	.task
		svg.svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="379.499" height="272.929" viewBox="0 0 379.499 272.929")
			g(transform="translate(-2432.842 -317.863)")
				g(transform="translate(2303 334)" fill="none")
					path(d="M203,221l19.437-33.534A37.638,37.638,0,0,1,243,221Z" stroke="none")
					path(d="M 241.9860534667969 220.0001983642578 C 241.8092803955078 213.4749603271484 239.9039154052734 207.1397857666016 236.4486846923828 201.6181793212891 C 233.0829467773438 196.2396087646484 228.3846282958984 191.8235473632812 222.8212280273438 188.7985229492188 L 204.7358703613281 220.0001983642578 L 241.9860534667969 220.0001983642578 M 242.9996032714844 221.0001983642578 L 203.0003967285156 221.0001983642578 L 222.437744140625 187.4660186767578 C 234.6449890136719 193.7015075683594 242.9996032714844 206.3769989013672 242.9996032714844 221.0001983642578 Z" stroke="none" fill="#c1c1bd")
				g(transform="translate(2885.371 341.226) rotate(120)" fill="none")
					path(d="M203,221l19.437-33.534A37.638,37.638,0,0,1,243,221Z" stroke="none")
					path(d="M 241.9860534667969 220.0001983642578 C 241.8092803955078 213.4749603271484 239.9039154052734 207.1397857666016 236.4486846923828 201.6181793212891 C 233.0829467773438 196.2396087646484 228.3846282958984 191.8235473632812 222.8212280273438 188.7985229492188 L 204.7358703613281 220.0001983642578 L 241.9860534667969 220.0001983642578 M 242.9996032714844 221.0001983642578 L 203.0003967285156 221.0001983642578 L 222.437744140625 187.4660186767578 C 234.6449890136719 193.7015075683594 242.9996032714844 206.3769989013672 242.9996032714844 221.0001983642578 Z" stroke="none" fill="#c1c1bd")
				g(transform="translate(2146.066 66.9)")
					rect(width="116.934" height="8" transform="translate(529 483)" fill="#dcdcd9")
				g(transform="translate(2500.8 399.8)" fill="none")
					path(d="M92,0l92,158H0Z" stroke="none")
					path(d="M 92 15.8985595703125 L 13.91561889648438 150 L 170.0843811035156 150 L 92 15.8985595703125 M 92 0 L 184 158 L 0 158 L 92 0 Z" stroke="none" fill="#dcdcd9")
				line(y2="17" transform="translate(2639.222 473.5) rotate(60)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				circle(cx="8" cy="8" r="8" transform="translate(2679.652 542.558) rotate(60)" fill="#707070")
				text(transform="translate(2640 547)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-24" y="0") スタート
				text(transform="translate(2792 576)" fill="#707070" font-size="12" font-family="HiraginoSans-W3, Hiragino Sans")
					tspan(x="-17.58" y="0") ゴール
				g(transform="translate(2783.98 545.496)" fill="#fff" stroke="#d4d4d4" stroke-width="1.5")
					circle(cx="8" cy="8" r="8" stroke="none")
					circle(cx="8" cy="8" r="7.25" fill="none")
				line(y2="17" transform="translate(2545.864 473.793) rotate(-60)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				path(d="M0,0H40V38.62H0Z" transform="translate(2515.741 478.393) rotate(-60)" fill="none")
				line(y2="17" transform="translate(2592.623 546.4)" fill="none" stroke="#4e4e4e" stroke-width="1.5" stroke-dasharray="3")
				text(transform="translate(2553 538)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 60°
				text(transform="translate(2595 458)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-9.073" y="0") 60°
				path(d="M2610.772,685.785,2483.323,467.854,2324.713,739.292l317.174-.034-13.735-23.8" transform="translate(109 -149)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="matrix(-0.259, 0.966, -0.966, -0.259, 2736.588, 565.4)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				line(x2="10" transform="matrix(0.966, 0.259, -0.259, 0.966, 2736.526, 565.436)" fill="none" stroke="#c1c1bd" stroke-linecap="round" stroke-width="1")
				text(transform="translate(2631 337)" fill="#c1c1bd" font-size="12" font-family="Helvetica")
					tspan(x="-18.674" y="0") 3
					tspan(y="0" font-family="HiraginoSans-W3, Hiragino Sans") 周
				image(ref="targetEl" width="40" height="38.621" :transform="startPosition" xlink:href="~/assets/images/practice/target_left.png")
				rect(ref="routeEl1" width="40" height="38.62" transform="translate(2649.068 443.247) rotate(60)" fill="none")
				rect(ref="routeEl2" width="40" height="38.62" transform="translate(2599.068 356.645) rotate(60)" fill="none")
				rect(ref="routeEl3" width="40" height="38.62" transform="matrix(0.5,-0.86603,0.86603,0.5,2515.62006,477.8857)" fill="none")
				rect(ref="routeEl4" width="40" height="38.62" transform="matrix(0.5,-0.86603,0.86603,0.5,2465.62006,564.4882)" fill="none")
				rect(ref="routeEl5" width="40" height="38.62" transform="matrix(-1,0,0,-1,2612.34353,576.13335)" fill="none")
				rect(ref="routeEl6" width="40" height="38.62" transform="matrix(-1,0,0,-1,2712.34353,576.13335)" fill="none")
				rect(ref="routeEl7" width="40" height="38.62" transform="translate(2649.068 443.247) rotate(60)" fill="none")
				rect(ref="routeEl8" width="40" height="38.62" transform="translate(2599.068 356.645) rotate(60)" fill="none")
				rect(ref="routeEl9" width="40" height="38.62" transform="matrix(0.5,-0.86603,0.86603,0.5,2515.62006,477.8857)" fill="none")
				rect(ref="routeEl10" width="40" height="38.62" transform="matrix(0.5,-0.86603,0.86603,0.5,2465.62006,564.4882)" fill="none")
				rect(ref="routeEl11" width="40" height="38.62" transform="matrix(-1,0,0,-1,2612.34353,576.13335)" fill="none")
				rect(ref="routeEl12" width="40" height="38.62" transform="matrix(-1,0,0,-1,2712.34353,576.13335)" fill="none")
				rect(ref="routeEl13" width="40" height="38.62" transform="translate(2649.068 443.247) rotate(60)" fill="none")
				rect(ref="routeEl14" width="40" height="38.62" transform="translate(2599.068 356.645) rotate(60)" fill="none")
				rect(ref="routeEl15" width="40" height="38.62" transform="matrix(0.5,-0.86603,0.86603,0.5,2515.62006,477.8857)" fill="none")
				rect(ref="routeEl16" width="40" height="38.62" transform="matrix(0.5,-0.86603,0.86603,0.5,2465.62006,564.4882)" fill="none")
				rect(ref="routeEl17" width="40" height="38.62" transform="matrix(-1,0,0,-1,2612.34353,576.13335)" fill="none")
				rect(ref="routeEl18" width="40" height="38.62" transform="matrix(-1,0,0,-1,2712.34353,576.13335)" fill="none")
				rect(ref="goalEl" width="40" height="38.62" transform="matrix(-1,0,0,-1,2812.34353,576.13335)" fill="none")
</template>

<script>
export default {
	data() {
		return {
			checkPoint: 18,
			startDegree: 60,
			startDirection: -1
		}
	},
	computed: {
		startPosition() {
			const x = this.$store.state.startPointX
			const y = this.$store.state.startPointY
			return `translate(${x}, ${y}) rotate(60)`
		}
	},
	methods: {
		setTargetEl() {
			// 動作対象を設定
			this.$store.dispatch('targetEl', this.$refs.targetEl)
			this.$store.dispatch('goalEl', this.$refs.goalEl)
			this.$store.dispatch('startPointX', 2699.067)
			this.$store.dispatch('startPointY', 529.847)

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
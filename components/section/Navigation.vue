<template lang="pug">
	.navigation(:class="{ close: !isMenuActive }")
		.title(@click="toggleMenu")
			.menu-trigger
				span.line
				span.line
				span.line
			p.text(v-if="isMenuActive") Menu
		ul.list(v-if="isMenuActive")
			li.item
				p.head(@click="isG1Active = !isG1Active", :class="{ close: !isG1Active }") 基礎編
				slide-up-down(:active="isG1Active", :duration="300")
					ul.contents
						li.item
							nuxt-link.link(to="/basic/1", :class="{ hover: $route.path == '/basic/1' }") 直線を引く
						li.item
							nuxt-link.link(to="/basic/2", :class="{ hover: $route.path == '/basic/2' }") 回転する
						li.item
							nuxt-link.link(to="/basic/3", :class="{ hover: $route.path == '/basic/3' }") 時間を設定する
						li.item
							nuxt-link.link(to="/basic/4", :class="{ hover: $route.path == '/basic/4' }") 繰り返しを行う
			li.item
				p.head(@click="isG2Active = !isG2Active", :class="{ close: !isG2Active }") 発展編
				slide-up-down(:active="isG2Active", :duration="300")
					ul.contents
						li.item
							nuxt-link.link.disabled(to="/advance/1", :class="{ hover: $route.path == '/advance/1' }") 準備中...
						//- li.item
						//- 	nuxt-link.link(to="/practice/advance/1") 正多角形を描く
						//- li.item
						//- 	nuxt-link.link(to="/practice/advance/1") UFOキャッチャー
						//- li.item
						//- 	nuxt-link.link(to="/practice/advance/2") 星座を見つける
						//- li.item
						//- 	nuxt-link.link(to="/practice/advance/3") かけっこする
						//- li.item
						//- 	nuxt-link.link(to="/practice/advance/4") 料理を作る
						//- li.item
						//- 	nuxt-link.link(to="/practice/advance/5") 迷路に挑戦
</template>

<script>
export default {
	data() {
		return {
			isMenuActive: true,
			isG1Active: true,
			isG2Active: true
		}
	},
  methods: {
  	toggleMenu() {
  		this.isMenuActive = !this.isMenuActive
  	}
  }
}
</script>

<style scoped>
.navigation {
	width: 250px;
	height: 100%;
	background-color: #FBFBFA;
	box-shadow: 3px 3px 5px rgba(49,100,160,.1), -3px 0 5px rgba(49,100,160,.1);
	z-index: 1;
	transition: all .3s;
}

.title {
	background-color: var(--color-key-1);
	color: var(--color-text-2);
	font-weight: bold;
	height: 40px;
	display: flex;
	align-items: center;
	font-size: 2rem;
	padding-left: 15px;
	cursor: pointer;

	& .text {
		margin-left: 8px;
	}

	&:hover {
		& .menu-trigger {
			& .line {
				&:nth-of-type(1) {
					width: 10px;
				  transform: translate(-1px, 4px) rotate(-45deg);
				}

				&:nth-of-type(3) {
					width: 10px;
				  transform: translate(-1px, -4px) rotate(45deg);
				}
			}
		}
	}
}

.list {
	& > .item {
		padding-bottom: 1px;
	}
}

.menu-trigger {
	display: inline-block;
  transition: all .3s;
  box-sizing: border-box;
  position: relative;
  width: 20px;
  height: 16px;

  & .line {
  	display: inline-block;
	  transition: all .3s;
	  box-sizing: border-box;
	  position: absolute;
	  left: 0;
	  width: 100%;
	  height: 2px;
	  background-color: var(--color-text-2);
	  border-radius: 2px;

	  &:nth-of-type(1) {
		  top: 0;
		}

		&:nth-of-type(2) {
		  top: 7px;
		}

		&:nth-of-type(3) {
		  bottom: 0;
		}
  }
}

.head {
	background-color: #D2DFDC;
	height: 35px;
	display: flex;
	align-items: center;
	font-size: 1.8rem;
	color: var(--color-key-1);
	font-weight: bold;
	padding-left: 15px;
	position: relative;
	cursor: pointer;

	&::before {
		content: "";
		position: absolute;
		width: 20px;
		height: 10px;
		right: 15px;
		top: calc(50% - 5px);
		margin: auto;
		cursor: pointer;
		background-image: url("../../assets/images/navigation/arrow_b.png");
		background-size: contain;
		background-position: center;
		transition: var(--transition-link);
		transition: all .3s;
	}

	&:hover,
	&.close {
		&::before {
			transform: rotate(180deg);
		}
	}

	&.close {
		&:hover {
			&::before {
				transform: rotate(0deg);
			}
		}
	}
}

.contents {
	font-size: 1.6rem;
	padding-bottom: 30px;

	& .item {
		position: relative;

		& + .item {
			border-top: 1px solid rgba(74, 111, 84, 0.1);
		}

		& .link {
			color: var(--color-key-1);
			text-decoration: none;
			padding-left: 30px;
			height: 35px;
			display: flex;
			align-items: center;
			transition: var(--transition-link);

			&:hover,
			&.hover {
				background-color: #f9f9ed;
			}
		}

		& .disabled {
			pointer-events: none;
		}

		&.star {
			&::before {
				position: absolute;
				left: 10px;
				top: 0;
				bottom: 2px;
				margin: auto;
				content: "";
				mask-image: url("../../assets/images/navigation/icon_star.svg");
				background-color: #879D54;
				display: inline-block;
				width: 15px;
				height: 15px;
				transition: all .3s;
			}
		}
	}
}

.close {
	&.navigation {
		width: 50px;
		background-color: var(--color-key-1);

		& .title {
			&:hover {
				& .menu-trigger {
					& .line {
						&:nth-of-type(1) {
							width: 10px;
						  transform: translate(11px, 4px) rotate(45deg);
						}

						&:nth-of-type(3) {
							width: 10px;
						  transform: translate(11px, -4px) rotate(-45deg);
						}
					}
				}
			}
		}
	}
}
</style>

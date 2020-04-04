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
				p.head(@click="toggleHead", :class="{ close: !isG1Active }") 基礎編
				slide-up-down(:active="isG1Active", :duration="300")
					ul.contents
						li.item
							nuxt-link.link(to="/practice/1") 直線を描く
						li.item
							nuxt-link.link(to="/practice/2") 回転させる
						li.item
							nuxt-link.link(to="/practice/3") 星座を見つける
						li.item.star
							nuxt-link.link(to="/practice/4") 星座を見つける
</template>

<script>
export default {
	data() {
		return {
			isMenuActive: true,
			isG1Active: true
		}
	},
  methods: {
  	toggleMenu() {
  		this.isMenuActive = !this.isMenuActive
  	},
  	toggleHead() {
  		this.isG1Active = !this.isG1Active
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
	height: 40px;
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

	& .item {
		position: relative;

		& + .item {
			border-top: 1px solid rgba(74, 111, 84, 0.1);
		}

		& .link {
			color: var(--color-key-1);
			text-decoration: none;
			padding-left: 30px;
			height: 40px;
			display: flex;
			align-items: center;
			transition: var(--transition-link);

			&:hover {
				background-color: #f9f9ed;
			}
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

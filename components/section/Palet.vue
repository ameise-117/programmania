<template lang="pug">
	.palet
		.title コマンド
		.list
			.item.blue
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
					li.item.blue(:key="1", data-command-type="motion", data-command-val="go", v-if="dragItems.motion[0]")
						p.text 進む
						.icon.icon-close(@click="deleteItem($event)")
					li.item.blue(:key="2", data-command-type="motion", data-command-val="rolate", v-if="dragItems.motion[1]")
						p.text 回る
						.icon.icon-close(@click="deleteItem($event)")
					li.item.blue(:key="3", data-command-type="motion", data-command-val="wait", v-if="dragItems.motion[2]")
						p.text 待つ
						.icon.icon-close(@click="deleteItem($event)")
			.item.green
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
					li.item.green(:key="1", data-command-type="direction", data-command-val="right", v-if="dragItems.figures[0]")
						p.text
							span 右に
							input.input.narrow(maxlength="1")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
					li.item.green(:key="2", data-command-type="direction", data-command-val="left", v-if="dragItems.figures[1]")
						p.text
							span 左に
							input.input.narrow(maxlength="1")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
					li.item.green(:key="3", data-command-type="direction", data-command-val="top", v-if="dragItems.figures[2]")
						p.text
							span 上に
							input.input.narrow(maxlength="1")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
					li.item.green(:key="4", data-command-type="direction", data-command-val="bottom", v-if="dragItems.figures[3]")
						p.text
							span 下に
							input.input.narrow(maxlength="1")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
					li.item.green(:key="5", data-command-type="direction", data-command-val="forward", v-if="dragItems.figures[4]")
						p.text
							span 前に
							input.input.narrow(maxlength="1")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
					li.item.green(:key="1", data-command-type="calculation", data-command-val="degree", v-if="dragItems.figures[5]")
						p.text
							input.input.wide(maxlength="4")
							span 度
						.icon.icon-close(@click="deleteItem($event)")
					li.item.green(:key="2", data-command-type="calculation", data-command-val="time", v-if="dragItems.figures[6]")
						p.text
							input.input.narrow(maxlength="1")
							span 秒
						.icon.icon-close(@click="deleteItem($event)")
			.item.yellow
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
					li.item.yellow(:key="4", data-command-type="other", data-command-val="roopStart", v-if="dragItems.other[0]")
						p.text
							| くり返し&nbsp;
							span.small.bold 開始&nbsp;&nbsp;
							span.operator ×
							input.input.narrow(maxlength="1")
							span 回
						.icon.icon-close(@click="deleteItem($event)")
					li.item.yellow(:key="5", data-command-type="other", data-command-val="roopEnd", v-if="dragItems.other[1]")
						p.text
							| くり返し&nbsp;
							span.small.bold 終了
						.icon.icon-close(@click="deleteItem($event)")
</template>

<script>
export default {
	props: ['dragItems'],
  methods: {
  	onStart() {
  		this.$store.dispatch('isDummyHover', true)
  	},
    onEnd(target) {
      this.$store.dispatch('isDummyHover', false)
      this.$store.dispatch('isDragEnd', true)
      if (target.clone) {
      	let closeEl = target.clone.getElementsByClassName('icon-close')
      	if (closeEl && closeEl.length > 0) {
      		closeEl[0].addEventListener('click', this.deleteItem)
      	}
      }
    },
    deleteItem(event) {
    	event.currentTarget.parentNode.remove()
    	this.$store.dispatch('isDragEnd', true)
    }
  }
}
</script>

<style scoped>
.palet {
	height: 230px;
	display: flex;
  background-color: var(--color-bg-1);
  border: 1px solid #D4D4D4;
  margin: 0 10px 10px;
  border-radius: 3px;
  box-shadow: 1px 5px 10px rgba(49,100,160,.1), -1px 0 10px rgba(49,100,160,.1);
  z-index: 3;
  overflow: hidden;

  & .list {
  	display: flex;
  	flex: 1;
  	padding: 20px 0;
  	min-width: 480px;

  	& > .item {
  		flex: 1;
			position: relative;
			padding: 0 20px;

			& + .item {
				&::before {
					content: "";
					background-size: 6px 12px;
					background-image: linear-gradient(to bottom, #D4D4D4, #D4D4D4 6px, transparent 6px, transparent 12px);
					background-repeat: repeat-y;
					position: absolute;
					top: 0;
					bottom: 0;
					margin: auto;
					left: -0.5px;
					width: 1px;
					height: 100%;
					z-index: 2;
				}
			}

			& .icon-close {
				display: none;
			}
		}
  }
}

.title {
	width: 35px;
	background-color: #F7F7F4;
	height: 100%;
	writing-mode: vertical-lr;
	display: flex;
	align-items: center;
	padding-top: 20px;
	letter-spacing: .25em;
}

.body {
	height: 100%;

	& .item {
		padding: 0 15px;
		border: 1px solid #c7c7c7;
		cursor: pointer;
		transition: var(--transition-link);
		border-radius: 5px;
		height: 30px;
		width: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		box-shadow: 0 2px 2px rgba(49,100,160,.1);
		width: max-content;

		& .text {
			display: flex;
			align-items: center;

			& .small {
				font-size: 11px;
			}

			& .bold {
				font-weight: bold;
			}
		}

		& .input {
			background-color: var(--color-bg-1);
			outline: none;
			margin: 0 5px;
			padding: 0 5px;
			text-align: right;
			color: var(--color-text-1);

			&.narrow {
				width: 30px;
			}

			&.wide {
				width: 40px;
			}
		}

		&:hover {
			transform: translateY(-1px);
			box-shadow: 0px 5px 10px rgba(49,100,160,.1);
		}

		& + .item {
			margin-top: 10px;
		}

		&.blue {
			background-color: var(--color-key-8);
			color: var(--color-key-5);
		}

		&.green {
			background-color: var(--color-key-10);
			color: var(--color-key-7);
		}

		&.yellow {
			background-color: var(--color-key-12);
			color: var(--color-key-11);
		}
	}
}

.operator {
	font-size: 15px;
}

.command-line {
	& .item {
		border-radius: 5px 5px 5px 0;

		&::before,
		&::after {
			content: "";
			position: absolute;
			border: 1px solid;
		}

		&::before {
			bottom: -1px;
			left: -14px;
		  border-style: solid;
		  border-width: 0 0 7px 14px;
		  border-color: transparent transparent #c7c7c7 transparent;
		}

		&::after {
			bottom: 0;
			left: -10px;
		  border-style: solid;
		  border-width: 0 0 7px 14px;
		}

		&:hover {
			box-shadow: 0 2px 2px rgba(49,100,160,.1);
			transform: none;
		}

		& .icon-close {
			display: block;
			position: absolute;
			width: 15px;
			height: 15px;
			right: -7px;
			top: -7px;
			cursor: pointer;
			background-image: url("../../assets/images/palet/icon_close.png");
			background-size: contain;
			transition: var(--transition-link);

			&:hover {
				opacity: 0.8;
			}
		}

		&.blue {
			&::after {
			  border-color: transparent transparent var(--color-key-8) transparent;
			}
		}

		&.green {
			&::after {
			  border-color: transparent transparent var(--color-key-10) transparent;
			}
		}

		&.yellow {
			&::after {
			  border-color: transparent transparent var(--color-key-12) transparent;
			}
		}
	}
}
</style>

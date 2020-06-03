<template lang="pug">
	.palet
		.title コマンド
		.list
			.item.blue
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.motion[0]")
					li.item.blue(:key="1", data-command-type="motion", data-command-val="go")
						p.text 進む
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.motion[1]")
					li.item.blue(:key="2", data-command-type="motion", data-command-val="rolate")
						p.text 回る
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.motion[2]")
					li.item.blue(:key="3", data-command-type="motion", data-command-val="wait")
						p.text 待つ
						.icon.icon-close(@click="deleteItem($event)")
			.item.green(@change="inputVal($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.figures[0]")
					li.item.green(:key="1", data-command-type="direction", data-command-val="right")
						p.text
							span 右に
							input.input.narrow(type="text", maxlength="1", data-input-type="num")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.figures[1]")
					li.item.green(:key="2", data-command-type="direction", data-command-val="left")
						p.text
							span 左に
							input.input.narrow(type="text", maxlength="1", data-input-type="num")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.figures[2]")
					li.item.green(:key="3", data-command-type="direction", data-command-val="top")
						p.text
							span 上に
							input.input.narrow(type="text", maxlength="1", data-input-type="num")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.figures[3]")
					li.item.green(:key="4", data-command-type="direction", data-command-val="bottom")
						p.text
							span 下に
							input.input.narrow(type="text", maxlength="1", data-input-type="num")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.figures[4]")
					li.item.green(:key="5", data-command-type="direction", data-command-val="forward")
						p.text
							span 前に
							input.input.narrow(type="text", maxlength="1", data-input-type="num")
							span 歩
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.figures[5]")
					li.item.green(:key="6", data-command-type="calculation", data-command-val="degree")
						p.text
							input.input.wide(type="text", maxlength="4", data-input-type="degree")
							span 度
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.figures[6]")
					li.item.green(:key="7", data-command-type="calculation", data-command-val="time")
						p.text
							input.input.narrow(type="text", maxlength="1", data-input-type="num")
							span 秒
						.icon.icon-close(@click="deleteItem($event)")
			.item.yellow(@change="inputVal($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.other[0]")
					li.item.yellow(:key="1", data-command-type="other", data-command-val="roopStart")
						p.text
							| くり返し&nbsp;
							span.small.bold 開始&nbsp;&nbsp;
							span.operator ×
							input.input.narrow(type="text", maxlength="1", data-input-type="num")
							span 回
						.icon.icon-close(@click="deleteItem($event)")
				draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd", v-if="dragItems.other[1]")
					li.item.yellow(:key="2", data-command-type="other", data-command-val="roopEnd")
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
    },
    async inputVal(event) {
    	let target = event.target
    	let inputText = event.target.value
    	
    	if (inputText) {
    		if (target.dataset.inputType == 'num') {
    			event.target.value = await this.$store.dispatch('inputNum', inputText)
    		} else if (target.dataset.inputType == 'degree') {
    			event.target.value = await this.$store.dispatch('inputDegree', inputText)
    		}
    	}
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
  z-index: 2;
  overflow: hidden;

  @media (--tablet) {
  	flex: 1;
  	height: 100%;
  	width: 50%;
  }

  & .list {
  	display: flex;
  	flex: 1;
  	padding: 20px 0;
  	min-width: 480px;

  	@media (--tablet) {
  		flex-direction: column;
  		min-width: 230px;
  	}

  	& > .item {
  		flex: 1;
			position: relative;
			padding: 0 20px;

			@media (--tablet) {
				flex: initial;
			}

			& + .item {
				@media (--tablet) {
					margin-top: 40px;
				}

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

					@media (--tablet) {
						background-size: 12px 6px;
						background-image: linear-gradient(to right, #D4D4D4, #D4D4D4 6px, transparent 6px, transparent 12px);
						background-repeat: repeat-x;
						width: calc(100% - 40px);
						height: 1px;
						top: -20px;
						left: 20px;
						margin: 0;
					}
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

	@media (--tablet) {
		height: auto;
	}
}

.body {
	& + .body {
		margin-top: 10px;
	}
		
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

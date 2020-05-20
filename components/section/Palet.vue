<template lang="pug">
	.palet
		.item.motion
			p.head 動き
			draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
				li.item.motion(:key="1", data-command-type="motion", data-command-val="go", v-if="motion[0]")
					p.text 進む
					.icon.icon-close(@click="deleteItem($event)")
				li.item.motion(:key="2", data-command-type="motion", data-command-val="rolate", v-if="motion[1]")
					p.text 回る
					.icon.icon-close(@click="deleteItem($event)")
				li.item.motion(:key="3", data-command-type="motion", data-command-val="wait", v-if="motion[2]")
					p.text 待つ
					.icon.icon-close(@click="deleteItem($event)")
				li.item.motion(:key="4", data-command-type="motion", data-command-val="roopStart", v-if="motion[3]")
					p.text
						| 繰り返し&nbsp;
						span.small.bold 開始
					.icon.icon-close(@click="deleteItem($event)")
				li.item.motion(:key="5", data-command-type="motion", data-command-val="roopEnd", v-if="motion[4]")
					p.text
						| 繰り返し&nbsp;
						span.small.bold 終了
					.icon.icon-close(@click="deleteItem($event)")
		.item.direction
			p.head 方向
			draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
				li.item.direction(:key="1", data-command-type="direction", data-command-val="right", v-if="direction[0]")
					p.text
						span 右に
						input.input.narrow(maxlength="1")
						span 歩
					.icon.icon-close(@click="deleteItem($event)")
				li.item.direction(:key="2", data-command-type="direction", data-command-val="left", v-if="direction[1]")
					p.text
						span 左に
						input.input.narrow(maxlength="1")
						span 歩
					.icon.icon-close(@click="deleteItem($event)")
				li.item.direction(:key="3", data-command-type="direction", data-command-val="top", v-if="direction[2]")
					p.text
						span 上に
						input.input.narrow(maxlength="1")
						span 歩
					.icon.icon-close(@click="deleteItem($event)")
				li.item.direction(:key="4", data-command-type="direction", data-command-val="bottom", v-if="direction[3]")
					p.text
						span 下に
						input.input.narrow(maxlength="1")
						span 歩
					.icon.icon-close(@click="deleteItem($event)")
		.item.calculation
			p.head 計算
			draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
				li.item.calculation(:key="1", data-command-type="calculation", data-command-val="degree", v-if="calculation[0]")
					p.text
						input.input.wide(maxlength="4")
						span 度
					.icon.icon-close(@click="deleteItem($event)")
				li.item.calculation(:key="2", data-command-type="calculation", data-command-val="time", v-if="calculation[1]")
					p.text
						input.input.narrow(maxlength="1")
						span 秒
					.icon.icon-close(@click="deleteItem($event)")
				li.item.calculation(:key="3", data-command-type="calculation", data-command-val="multiply", v-if="calculation[2]")
					p.text
						span.operator ×
						input.input.narrow(maxlength="1")
						span 回
					.icon.icon-close(@click="deleteItem($event)")
</template>

<script>
import commandList from '~/assets/json/command_list.json'

export default {
	data() {
		return {
			motion: [],
			direction: [],
			calculation: []
		}
	},
	mounted() {
		this.setCommand()
	},
	watch: {
		'$route' (to, from) {
			this.setCommand()
		}
	},
  methods: {
  	setCommand() {
  		let path = this.$route.path
  		let structure = path.split('/')
  		let level = structure[(structure.length - 2)]
  		let no = structure[(structure.length - 1)]
  		this.motion = commandList[level][no]['motion']
  		this.direction = commandList[level][no]['direction']
  		this.calculation = commandList[level][no]['calculation']
  	},
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
	display: grid;
  grid-template-rows: auto;
  grid-template-areas: 'item-1 item-2 item-3';
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  background-color: var(--color-bg-1);
  border: 1px solid #D4D4D4;
  margin: 0 10px 10px;
  border-radius: 3px;
  box-shadow: 1px 5px 10px rgba(49,100,160,.1), -1px 0 10px rgba(49,100,160,.1);
  z-index: 3;

	& > .item {
		position: relative;

		&:nth-child(1) {
			grid-area: item-1;
		}

		&:nth-child(2) {
			grid-area: item-2;
		}

		&:nth-child(3) {
			grid-area: item-3;
		}

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
				height: 85%;
				z-index: 2;
			}
		}

		& .icon-close {
			display: none;
		}
	}
}

.head {
	height: 24px;
	position: absolute;
	top: -5px;
	left: 5px;
	font-size: 1.2rem;
	color: var(--color-text-2);
	letter-spacing: .3em;
	text-indent: .3em;
	padding: 0 15px 0 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 1px;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 10px;
		margin: auto;
		background-color: var(--color-bg-1);
		mask-size: cover;
		display: inline-block;
		mask-repeat: no-repeat;
		width: 14px;
		height: 14px;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: -10px;
		left: 10px;
		margin: auto;
		border: 5px solid transparent;
	}
}

.body {
	height: 100%;
	padding: 40px 20px;
	min-width: 155px;

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

		&.motion {
			background-color: var(--color-key-8);
			color: var(--color-key-5);
		}

		&.direction {
			background-color: var(--color-key-9);
			color: var(--color-key-6);
		}

		&.calculation {
			background-color: var(--color-key-10);
			color: var(--color-key-7);
		}
	}
}

.motion {
	& .head {
		background-color: var(--color-key-5);

		&::before {
			mask-image: url("../../assets/images/palet/icon_motion.svg");
		}

		&::after {
			border-top: 5px solid var(--color-key-5);
		}
	}
}

.direction {
	& .head {
		background-color: var(--color-key-6);

		&::before {
			mask-image: url("../../assets/images/palet/icon_direction.svg");
		}

		&::after {
			border-top: 5px solid var(--color-key-6);
		}
	}
}

.calculation {
	& .head {
		background-color: var(--color-key-7);

		&::before {
			mask-image: url("../../assets/images/palet/icon_calculation.svg");
		}

		&::after {
			border-top: 5px solid var(--color-key-7);
		}
	}
}

.operator {
	font-size: 17px;
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

		&.motion {
			&::after {
			  border-color: transparent transparent var(--color-key-8) transparent;
			}
		}

		&.direction {
			&::after {
			  border-color: transparent transparent var(--color-key-9) transparent;
			}
		}

		&.calculation {
			&::after {
			  border-color: transparent transparent var(--color-key-10) transparent;
			}
		}
	}
}
</style>

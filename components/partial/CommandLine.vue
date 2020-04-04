<template lang="pug">
	.command-line
		.wrap
			.title.start スタート
			.buttons
				.icon.icon-play(@click="play")
				.icon.icon-reset(@click="reset")
				.icon.icon-clear(@click="clear")
			.body
				draggable.line(tag="ul", :group="{ name: 'items' }", ref="elCommand", @end="onEnd")
					li.item.top(:key="1")
				.dummy(:class="{ hover: $store.state.isDummyHover }", ref="elDummy") ここに配置
			.title.goal ゴール
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'

export default {
	data() {
		return {
			commandLineOffsetTop: 10
		}
	},
  mounted() {
    // ドラッグの終了を監視
    this.$store.watch(
      (state, getters) => state.isDragEnd,
      (newVal, oldVal) => {
        if (newVal) {
          this.$store.dispatch('isDragEnd', false)
          this.setDummyPosition()
        }
      }
    )
  },
  methods: {
  	setDummyPosition() {
  		let commandNum = (this.$refs.elCommand.$el.children.length - 1)
  		let dummyOffset = (this.commandLineOffsetTop + commandNum * 30 + (commandNum * 10))
  		this.$refs.elDummy.style.top = dummyOffset + 'px'
  	},
  	onEnd() {
      this.$store.dispatch('isDragEnd', true)
    },
    play() {
      let commands = this.$refs.elCommand.$el.children

      if (commands) {
      	this.reset()
      	
      	let tm = new TimelineMax()
      	let target = this.$store.state.targetEl
      	let isHorizontal = false
      	let isVertical = false
      	let stepNum = 0

      	for (var i = 1; i < commands.length; i++) {
      		let command = commands[i]
	      	let commandType = command.dataset.commandType
	      	let commandVal = command.dataset.commandVal

	      	if (commandType == 'motion') {
	      		if (isHorizontal) {
	      			stepNum = stepNum * 100
	      			this.moveHorizontal(tm, target, stepNum)
	      			isHorizontal = false
	      		} else if (isVertical) {
	      			this.moveVertical(tm, target, stepNum)
	      			isVertical = false
	      		} else {
	      			break
	      		}
	      	}

	      	if (commandType == 'direction') {
	      		stepNum = command.querySelector('.input').value

	      		if (stepNum && stepNum > 0) {
	      			switch(commandVal) {
		      			case 'right':
		      				isHorizontal = true
		      				break
		      			case 'left':
		      				isHorizontal = true
		      				break
		      		}
		      		continue
	      		} else {
	      			break
	      		}
	      	}
      	}
      }
    },
    reset() {
    	let tm = new TimelineMax()
      let target = this.$store.state.targetEl
    	tm.to(target, 0, {
      	x: 0,
      	y: 0
      })
    },
    clear() {
      let commands = this.$refs.elCommand.$el.children

      if (commands) {
      	while (commands.length > 1) {
				  commands.item(1).remove()
				}
      	this.$store.dispatch('isDragEnd', true)
      }
    },
    moveHorizontal(tm, target, val) {
    	return tm.to(target, 1, {
      	x: val
      })
    },
    moveVertical(tm, target, val) {
    	return tm.to(target, 1, {
      	y: val
      })
    }
  }
}
</script>

<style scoped>
.command-line {
	width: 350px;
	height: 100%;
	padding: 10px 10px 10px 0;

	& .wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		box-shadow: 1px 5px 10px rgba(49,100,160,.1), -1px 0 10px rgba(49,100,160,.1);
	}
}

.title {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #4E4E4E;
	color: var(--color-text-2);
	font-weight: bold;
	font-size: 1.8rem;
	z-index: 2;

	&.start {
		height: 45px;
		border-radius: 3px 3px 0 0;
	}

	&.goal {
		height: 40px;
		border-radius: 0 0 3px 3px;
	}
}

.buttons {
	padding: 3px 5px 3px 0;
	background-color: #4E4E4E;
	display: flex;
	justify-content: flex-end;
	border-top: 1px solid var(--color-bg-1);
	z-index: 2;

	& .icon {
		width: 40px;
		height: 20px;
		border: 1px solid var(--color-bg-1);
		border-radius: 3px;
		position: relative;
		cursor: pointer;
		transition: var(--transition-link);

		&::before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			background-color: var(--color-bg-1);
			mask-size: cover;
			display: inline-block;
			mask-repeat: no-repeat;
			transition: var(--transition-link);
		}

		&:hover {
			background-color: var(--color-bg-1);

			&::before {
				background-color: #4E4E4E;
			}
		}

		& + .icon {
			margin-left: 5px;
		}
	}

	& .icon-play {
		&::before {
			mask-image: url("../../assets/images/command_line/icon_play.svg");
			width: 10px;
			height: 10px;
		}
	}

	& .icon-reset {
		&::before {
			mask-image: url("../../assets/images/command_line/icon_reload.svg");
			width: 12px;
			height: 12px;
		}
	}

	& .icon-clear {
		&::before {
			mask-image: url("../../assets/images/command_line/icon_clear.svg");
			width: 12px;
			height: 12px;
		}
	}
}

.body {
	position: relative;
	height: 100%;
	border-left: 1px solid #D4D4D4;
	border-right: 1px solid #D4D4D4;
	background-color: #ececeb;

	&::before {
		content: "";
		width: 10px;
		height: 100%;
		background-color: rgba(112, 112, 112, 0.2);
		position: absolute;
		top: 0;
		left: 10px;
	}
}

.line {
	height: 100%;
	padding: 0 0 10px 30px;

	& .item {
		height: 0;
		width: 100%;
	}
}

.dummy {
	height: 30px;
	left: 30px;
	width: calc(100% - 40px);
	border: 1px dashed rgba(112, 112, 112, 0.5);
	border-radius: 5px;
	position: absolute;
	top: 10px;
	display: flex;
	align-items: center;
	padding: 0 15px;
	color: rgba(112, 112, 112, 0.5);

	&.hover {
		box-shadow: 0 0 10px rgba(49,100,160,.1) inset;
		color: transparent;
	}
}
</style>

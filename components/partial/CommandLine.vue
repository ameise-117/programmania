<template lang="pug">
	.command-line
		.title スタート
		.buttons
			.icon.icon-play(@click="play")
			.icon.icon-stop
			.icon.icon-clear(@click="clear")
		.body
			draggable.line(tag="ul", :group="{ name: 'items' }", ref="elCommand", @end="onEnd")
				li.item.top(:key="1")
			.dummy(:class="{ hover: $store.state.isDummyHover }", ref="elDummy") ここに配置
		.title ゴール
</template>

<script>
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
      let targets = this.$refs.elCommand.$el.children

      if (targets) {
      	for (var i = 1; i < targets.length; i++) {
      		let command = targets[i]
	      	let commandType = command.dataset.commandType
	      	let commandVal = command.dataset.commandVal
      	}
      }
    },
    clear() {
      let targets = this.$refs.elCommand.$el.children

      if (targets) {
      	while (targets.length > 1) {
				  targets.item(1).remove()
				}
      	this.$store.dispatch('isDragEnd', true)
      }
    }
  }
}
</script>

<style scoped>
.command-line {
	width: 350px;
	height: 100%;
	background-color: #e2e2e2;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;

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

.title {
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #4E4E4E;
	color: var(--color-text-2);
	font-weight: bold;
	font-size: 2rem;
	z-index: 2;
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

	& .icon-stop {
		&::before {
			mask-image: url("../../assets/images/command_line/icon_stop.svg");
			width: 10px;
			height: 10px;
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
		box-shadow: 3px 3px 10px rgba(49,100,160,.1), -3px 0 10px rgba(49,100,160,.1) inset;
	}
}
</style>

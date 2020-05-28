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
			commandLineOffsetTop: 10,
			stepWidth: 100,
			positionX: 0,
			positionY: 0,
			routeNum: 0,
			isRouteComplete: true,
			currentDegree: 0,
			currentDirection: 1,
			commandArray: []
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
  computed: {
		translateTerm() {
      return (this.$store.state.checkRotate ? 1 : 0.5)
		}
	},
  watch: {
		'$route' (to, from) {
			this.clear()
		}
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
    	// リセット
    	this.reset()

    	// 回転のみチェックする場合
      if (this.$store.state.checkRotate) {
      	this.checkRotate()

      // 通過ルートをチェックする場合
      } else {
      	this.checkRoute()
      }
    },
    reset() {
    	this.positionX = this.$store.state.startPointX
    	this.positionY = this.$store.state.startPointY
    	this.currentDegree = this.$store.state.startDegree
    	this.currentDirection = this.$store.state.startDirection
    	this.routeNum = 0
    	this.isRouteComplete = true
    	this.commandArray = []
    	this.$store.dispatch('isComplete', false)
    	this.$store.dispatch('countSecond', 0)
    	let tm = new TimelineMax()
      let target = this.$store.state.targetEl
    	tm.to(target, 0.5, {
      	x: this.$store.state.startPointX,
      	y: this.$store.state.startPointY,
      	rotation: this.$store.state.startDegree
      })
    },
    clear() {
    	this.$store.dispatch('isComplete', false)
      let commands = this.$refs.elCommand.$el.children

      if (commands) {
      	while (commands.length > 1) {
				  commands.item(1).remove()
				}
      	this.$store.dispatch('isDragEnd', true)
      }
    },
    checkPosition(isComplete) {
    	let targetPosition = this.$store.state.targetEl.getBoundingClientRect()
    	let targetPositionLeft = Math.round(targetPosition.left * 10) / 10
    	let targetPositionTop = Math.round(targetPosition.top * 10) / 10

    	// 回転のみチェックする場合
  		if (this.$store.state.checkRotate) {
  			// カウントアップ
  			this.$store.dispatch('countSecond', ++this.$store.state.countSecond)
  		}

    	// 最終位置確認
    	if (isComplete) {
    		let goalPosition = this.$store.state.goalEl.getBoundingClientRect()
    		let goalPositionLeft = Math.round(goalPosition.left * 10) / 10
    		let goalPositionTop = Math.round(goalPosition.top * 10) / 10

	    	if (this.isRouteComplete && (goalPositionLeft == targetPositionLeft) && (goalPositionTop == targetPositionTop)) {
	    		setTimeout(() => {
	    			this.$store.dispatch('isComplete', true)
	    		}, 100)
	    	}

	    // チェックポイント通過確認
    	} else {
    		// 通過ルートをチェックする場合
    		if (!this.$store.state.checkRotate) {
    			if (this.routeNum < this.$store.state.routeEls.length) {
    				let routePosition = this.$store.state.routeEls[this.routeNum].getBoundingClientRect()
		    		let routePositionLeft = Math.round(routePosition.left * 10) / 10
		    		let routePositionTop = Math.round(routePosition.top * 10) / 10
						
						if (!this.isRouteComplete || !(routePositionLeft == targetPositionLeft) || !(routePositionTop == targetPositionTop)) {
			    		this.isRouteComplete = false
			    	}
    			} else if (this.routeNum > this.$store.state.routeEls.length) {
    				this.isRouteComplete = false
    			}
    			this.routeNum++
    		}
    	}
    },
    checkRotate() {
    	let tm = new TimelineMax()
    	let commands = this.$refs.elCommand.$el.children
    	let target = this.$store.state.targetEl
    	let isHorizontal = false
    	let isVertical = false
    	let isWait = false
    	let isRotate = false
    	let stepNum = this.$store.state.rotateStep
    	let calcNum = 0
    	let splitNum = this.$store.state.rotateStep
    	let direction = this.currentDirection
    	let rotateCount = 0

    	for (var i = 1; i < commands.length; i++) {
    		let command = commands[i]
      	let commandType = command.dataset.commandType
      	let commandVal = command.dataset.commandVal

      	// 動き
      	if (commandType == 'motion') {
      		switch(commandVal) {
      			case 'rolate':
		      		if (isRotate) {
		      			this.rotate(tm, target, this.currentDegree, false)
		      		}
		      		break
		      	case 'wait':
		      		if (isWait) {
		      			// stepより大きい場合
		      			if (stepNum < calcNum) {
		      				break
		      			} else {
		      				// 待機時間分のstepを進める
		      				splitNum = splitNum - calcNum

						    	// 進行方向に進む
					    		this.moveDiagonal(tm, target, calcNum, this.currentDegree, direction, false)
		      			}
		      		}
		      		break
      		}
      		continue
      	}

      	// 演算
      	if (commandType == 'calculation') {
      		calcNum = command.querySelector('.input').value

      		if (calcNum) {
      			switch(commandVal) {
	      			case 'time':
	      				isWait = true
	      				break
	      			case 'degree':
	      				isRotate = true
	      				this.currentDegree = (this.currentDegree + parseInt(calcNum, 10))
	      				// 入力値が回答配列と正しいかチェック
	      				if (this.$store.state.rotateDegree[rotateCount] != calcNum) {
	      					this.isRouteComplete = false
	      				}
	      				rotateCount++
	      				break
	      		}
	      		continue
      		} else {
      			break
      		}
      	}
    	}

    	// 最終step
    	if (splitNum) {
  			if (this.$store.state.rotateDegree.length !== rotateCount) {
  				this.isRouteComplete = false
    		}

    		// 進行方向に進む
    		this.moveDiagonal(tm, target, splitNum, this.currentDegree, direction, true)
    	}
    },
    checkRoute() {
    	let tm = new TimelineMax()
    	let commands = this.$refs.elCommand.$el.children
    	let target = this.$store.state.targetEl
    	let isHorizontal = false
    	let isVertical = false
    	let isDiagonal = false
    	let isRotate = false
    	let isRoopStart = false
    	let isRoopEnd = false
    	let stepNum = 0
    	let calcNum = 0
    	let roopNum = 0
    	let direction = 1
    	let isLastCommand = false

    	for (var i = 1; i < commands.length; i++) {
    		let command = commands[i]
      	let commandType = command.dataset.commandType
      	let commandVal = command.dataset.commandVal
      	isLastCommand = ((i + 1) === commands.length)

      	// 動き
      	if (commandType == 'motion') {
      		switch(commandVal) {
      			case 'go':
      				// 繰り返しを行う場合
      				if (isRoopStart) {
      					let roopCommand = { 'motion': 'go', 'step': stepNum, 'direction': direction }

      					if (this.commandArray && this.commandArray.length > 0) {
	      					// くり返しが終了した場合
	      					if (isRoopEnd) {
		      					this.commandArray.push({ 'roop_num': 1, 'command_set': [ roopCommand ] })
	      					} else {
		      					let lastNum = (this.commandArray.length - 1)
		      					this.commandArray[lastNum]['command_set'].push(roopCommand)
	      					}
      					}

      				// 斜めに動く場合
      				} else if (isDiagonal) {
      					this.moveDiagonal(tm, target, stepNum, this.currentDegree, direction, isLastCommand)
      					isDiagonal = false

      				// 直線で動く場合
      				} else {
      					if (isHorizontal) {
			      			this.moveHorizontal(tm, target, stepNum, direction, isLastCommand)
			      			isHorizontal = false
			      		} else if (isVertical) {
			      			this.moveVertical(tm, target, stepNum, direction, isLastCommand)
			      			isVertical = false
			      		}
      				}
		      		break
		      	case 'rolate':
		      		// 繰り返しを行う場合
      				if (isRoopStart) {
      					let roopCommand = { 'motion': 'rolate', 'degree': parseInt(calcNum, 10) }

      					if (this.commandArray && this.commandArray.length > 0) {
      						// くり返しが終了した場合
	      					if (isRoopEnd) {
	      						this.commandArray.push({ 'roop_num': 1, 'command_set': [ roopCommand ] })
	      					} else {
	      						let lastNum = (this.commandArray.length - 1)
		      					this.commandArray[lastNum]['command_set'].push(roopCommand)
	      					}
      					}

      				// 回転する場合
      				} else if (isRotate) {
		      			this.rotate(tm, target, this.currentDegree, false)
		      			isRotate = false
		      		}
		      		break
      		}
      		continue
      	}

      	// 方向
      	if (commandType == 'direction') {
      		stepNum = command.querySelector('.input').value

      		if (stepNum && stepNum > 0) {
      			switch(commandVal) {
	      			case 'right':
	      				isHorizontal = true
	      				direction = 1
	      				break
	      			case 'left':
	      				isHorizontal = true
	      				direction = -1
	      				break
	      			case 'top':
	      				isVertical = true
	      				direction = -1
	      				break
	      			case 'bottom':
	      				isVertical = true
	      				direction = 1
	      				break
	      			case 'forward':
	      				isDiagonal = true
	      				direction = this.currentDirection
	      				break
	      		}
	      		continue
      		} else {
      			break
      		}
      	}

      	// 演算
      	if (commandType == 'calculation') {
      		calcNum = command.querySelector('.input').value

      		if (calcNum) {
      			switch(commandVal) {
	      			case 'degree':
	      				isRotate = true
	      				this.currentDegree = (this.currentDegree + parseInt(calcNum, 10))
	      				break
	      		}
	      		continue
      		} else {
      			break
      		}
      	}

      	// その他
      	if (commandType == 'other') {
      		switch(commandVal) {
      			case 'roopStart':
      				isRoopStart = true
      				roopNum = command.querySelector('.input').value
      				if (roopNum) {
	      				this.commandArray.push({ 'roop_num': roopNum, 'command_set': [] })
	      			}
      				break
      			case 'roopEnd':
      				if (isRoopStart) {
      					isRoopEnd = true
      				}
      				break
      		}
      	}
    	}

    	// 繰り返しを行う場合、コマンド再セット後にまとめて実行
    	if (this.commandArray && this.commandArray.length > 0 && isRoopEnd) {
    		this.execCommandArray(tm, target)
    	}
    },
    execCommandArray(tm, target) {
      let isLastCommand = false
      let rolateDegree = this.$store.state.startDegree

    	// セットした全くり返しコマンド数roop
    	for (var i = 0; i < this.commandArray.length; i++) {
    		let thisRoopItem = this.commandArray[i]
    		let thisRoopNum = thisRoopItem['roop_num']

    		// くり返し数コマンドに入力した数roop
    		for (var j = 0; j < thisRoopNum; j++) {
    			let thisCommandSet = thisRoopItem['command_set']

    			// 1つのくり返しコマンド内の各動き分roop
    			for (var k = 0; k < thisCommandSet.length; k++) {
    				let thisCommand = thisCommandSet[k]
    				isLastCommand = ((i === (this.commandArray.length - 1)) && (j === (thisRoopNum - 1)) && (k === (thisCommandSet.length - 1)))

    				switch(thisCommand['motion']) {
    					// 進む
    					case 'go':
    						this.moveDiagonal(tm, target, thisCommand['step'], rolateDegree, thisCommand['direction'], isLastCommand)
    						break

    					// 回転する
    					case 'rolate':
    						rolateDegree += thisCommand['degree']
    						this.rotate(tm, target, rolateDegree, isLastCommand)
    						break
    				}
    			}
    		}
    	}
    },
    moveHorizontal(tm, target, stepNum, direction, isLastCommand) {
    	for (var i = 0; i < stepNum; i++) {
    		this.positionX += (this.stepWidth * direction)
    		let isComplete = isLastCommand && (i === (stepNum - 1))

    		let self = this
    		tm.to(target, this.translateTerm, {
	      	x: this.positionX,
	      	onComplete: function() {
	      		self.checkPosition(isComplete)
	      	}
	      })
    	}
    },
    moveVertical(tm, target, stepNum, direction, isLastCommand) {
    	for (var i = 0; i < stepNum; i++) {
    		this.positionY += (this.stepWidth * direction)
    		let isComplete = isLastCommand && (i === (stepNum - 1))

    		let self = this
    		tm.to(target, this.translateTerm, {
	      	y: this.positionY,
	      	onComplete: function() {
	      		self.checkPosition(isComplete)
	      	}
	      })
    	}
    },
    moveDiagonal(tm, target, stepNum, calcNum, direction, isLastCommand) {
    	for (var i = 0; i < stepNum; i++) {
    		this.positionX += (Math.cos(calcNum * (Math.PI / 180)) * this.stepWidth * direction)
    		this.positionY += (Math.sin(calcNum * (Math.PI / 180)) * this.stepWidth * direction)
    		let isComplete = isLastCommand && (i === (stepNum - 1))

    		let self = this
    		tm.to(target, this.translateTerm, {
    			x: this.positionX,
	      	y: this.positionY,
	      	onComplete: function() {
	      		self.checkPosition(isComplete)
	      	}
	      })
    	}
    },
    rotate(tm, target, calcNum, isLastCommand) {
    	let self = this
    	tm.to(target, 0.5, {
    		rotation: calcNum,
    		transformOrigin: 'center',
    		onComplete: function() {
    			if (isLastCommand) {
    				self.checkPosition(true)
    			}
      	}
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

		&::after {
			position: absolute;
			top: -25px;
			height: 20px;
			background-color: rgba(255, 255, 255, 0.8);
			font-size: 10px;
			border-radius: 3px;
			display: none;
			align-items: center;
			justify-content: center;
			transition: var(--transition-link);
		}

		&:hover {
			background-color: var(--color-bg-1);

			&::before {
				background-color: #4E4E4E;
			}

			&::after {
				display: flex;
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

		&::after {
			content: "実行";
			left: calc(50% - 20px);
			width: 40px;
		}
	}

	& .icon-reset {
		&::before {
			mask-image: url("../../assets/images/command_line/icon_reload.svg");
			width: 12px;
			height: 12px;
		}

		&::after {
			content: "元の位置に戻す";
			left: calc(50% - 45px);
			width: 90px;
		}
	}

	& .icon-clear {
		&::before {
			mask-image: url("../../assets/images/command_line/icon_clear.svg");
			width: 12px;
			height: 12px;
		}

		&::after {
			content: "コマンド削除";
			left: calc(50% - 40px);
			width: 80px;
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

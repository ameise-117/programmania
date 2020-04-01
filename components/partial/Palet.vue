<template lang="pug">
	.palet
		.item
			p.head 動き
			draggable.body(tag="ul", :options="{ group: 'ITEMS1' }", @start="onStart", @end="onEnd")
				li.item.motion(:key="1") 進む
				li.item.motion(:key="2") 回る
				li.item.motion(:key="3") 待つ
		.item
			p.head 方向
			draggable.body(tag="ul", :options="{ group: 'ITEMS2' }", @start="onStart", @end="onEnd")
				li.item.direction(:key="1") 右に
				li.item.direction(:key="2") 左に
				li.item.direction(:key="3") 上に
				li.item.direction(:key="4") 下に
		.item
			p.head 演算
			draggable.body(tag="ul", :options="{ group: 'ITEMS3' }", @start="onStart", @end="onEnd")
				li.item.calculation(:key="1") 右に
				li.item.calculation(:key="2") 左に
				li.item.calculation(:key="3") 上に
</template>

<script>
export default {
	// data() {
	// 	return {
	// 		isMoving: false
	// 	}
	// },
  methods: {
  	onStart() {
  		// this.isMoving = true
  		this.$store.dispatch('isDummyHover', true)
  	},
    onEnd() {
      this.$store.dispatch('isDummyHover', false)
      this.$store.dispatch('isDragEnd', true)
    }
  }
}
</script>

<style scoped>
.palet {
	height: 300px;
	display: grid;
  grid-template-rows: auto;
  grid-template-areas: 'item-1 item-2 item-3';
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  overflow: hidden;

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
				top: 15px;
				left: -1.5px;
				width: 3px;
				height: 100%;
				z-index: 2;
			}
		}
	}
}

.head {
	border: 3px solid var(--color-bg-1);
	border-top: 3px solid #D4D4D4;
	border-radius: 50px;
	height: 35px;
	background-color: var(--color-bg-1);
	position: relative;
	text-align: center;
	font-size: 1.7rem;
	color: #A9A9A9;
	letter-spacing: .5em;
	text-indent: .5em;
	padding-top: 5px;
	margin-left: -7.5px;
  margin-right: -7.5px;
}

.body {
	height: 100%;
	background-color: var(--color-bg-1);
	padding: 15px 20px;

	& .item {
		padding: 0 15px;
		border: 1px solid;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		border-radius: 5px;
		height: 30px;
		width: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		&:hover {
			box-shadow: 3px 3px 10px rgba(49,100,160,.1), -3px 0 10px rgba(49,100,160,.1);
		}

		& + .item {
			margin-top: 10px;
		}
	}
}

.motion {
	background-color: var(--color-key-8);
	color: var(--color-key-5);
}

.direction {
	background-color: var(--color-key-9);
	color: var(--color-key-6);
}

.calculation {
	background-color: var(--color-key-10);
	color: var(--color-key-7);
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
		  border-color: transparent transparent var(--color-key-5) transparent;
		  border-width: 0 0 7px 14px;
		}

		&::after {
			bottom: 0;
			left: -10px;
		  border-style: solid;
		  border-color: transparent transparent var(--color-key-8) transparent;
		  border-width: 0 0 7px 14px;
		}
	}
}
</style>

<template lang="pug">
	.palet
		.item
			p.head 動き
			draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
				li.item.motion(:key="1")
					p.text 進む
					.icon.icon-close(@click="deleteItem($event)")
				li.item.motion(:key="2")
					p.text 回る
					.icon.icon-close(@click="deleteItem($event)")
				li.item.motion(:key="3")
					p.text 待つ
					.icon.icon-close(@click="deleteItem($event)")
		.item
			p.head 方向
			draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
				li.item.direction(:key="1")
					p.text 右に
					.icon.icon-close(@click="deleteItem($event)")
				li.item.direction(:key="2")
					p.text 左に
					.icon.icon-close(@click="deleteItem($event)")
				li.item.direction(:key="3")
					p.text 上に
					.icon.icon-close(@click="deleteItem($event)")
				li.item.direction(:key="4")
					p.text 下に
					.icon.icon-close(@click="deleteItem($event)")
		.item
			p.head 演算
			draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
				li.item.calculation(:key="1")
					p.text 右に
					.icon.icon-close(@click="deleteItem($event)")
				li.item.calculation(:key="2")
					p.text 左に
					.icon.icon-close(@click="deleteItem($event)")
				li.item.calculation(:key="3")
					p.text 上に
					.icon.icon-close(@click="deleteItem($event)")
</template>

<script>
export default {
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
	height: 250px;
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

		& .icon-close {
			display: none;
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
		transition: var(--transition-link);
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
		cursor: initial;

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
		}

		&::after {
			bottom: 0;
			left: -10px;
		  border-style: solid;
		  border-width: 0 0 7px 14px;
		}

		&:hover {
			box-shadow: none;
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
			&::before {
			  border-color: transparent transparent var(--color-key-5) transparent;
			}

			&::after {
			  border-color: transparent transparent var(--color-key-8) transparent;
			}
		}

		&.direction {
			&::before {
			  border-color: transparent transparent var(--color-key-6) transparent;
			}

			&::after {
			  border-color: transparent transparent var(--color-key-9) transparent;
			}
		}

		&.calculation {
			&::before {
			  border-color: transparent transparent var(--color-key-7) transparent;
			}

			&::after {
			  border-color: transparent transparent var(--color-key-10) transparent;
			}
		}
	}
}
</style>

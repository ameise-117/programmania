<template lang="pug">
	.palet
		.item
			p.head 動き
			draggable.body(tag="ul", :group="{ name: 'items', pull: 'clone', put: false }", @start="onStart", @end="onEnd")
				li.item.motion(:key="1", data-command-type="motion", data-command-val="go")
					p.text 進む
					.icon.icon-close(@click="deleteItem($event)")
				li.item.motion(:key="2", data-command-type="motion", data-command-val="rolate")
					p.text 回る
					.icon.icon-close(@click="deleteItem($event)")
				li.item.motion(:key="3", data-command-type="motion", data-command-val="wait")
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
  background-color: var(--color-bg-1);
  border: 1px solid #D4D4D4;
  margin: 0 10px 10px;
  border-radius: 3px;
  box-shadow: 1px 5px 10px rgba(49,100,160,.1), -1px 0 10px rgba(49,100,160,.1);

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
				left: -1.5px;
				width: 1px;
				height: 90%;
				z-index: 2;
			}
		}

		& .icon-close {
			display: none;
		}
	}
}

.head {
	height: 35px;
	position: relative;
	text-align: center;
	font-size: 1.7rem;
	color: #A9A9A9;
	letter-spacing: .5em;
	text-indent: .5em;
	padding-top: 5px;
}

.body {
	height: 100%;
	padding: 15px 20px;

	& .item {
		padding: 0 15px;
		border: 1px solid #D4D4D4;
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

		&:hover {
			transform: translateY(-1px);
			box-shadow: 0px 5px 10px rgba(49,100,160,.1);
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
		  border-color: transparent transparent #D4D4D4 transparent;
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

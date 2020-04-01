<template lang="pug">
	.palet
		.item
			p.head 動き
			.body
		.item
			p.head 方向
			.body
		.item
			p.head 演算
			.body
</template>

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
}
</style>

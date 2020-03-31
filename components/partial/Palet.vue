<template lang="pug">
	.palet
		.item
			p.head 動き
		.item
			p.head 方向
		.item
			p.head 演算
</template>

<style scoped>
.palet {
	height: 300px;
	display: grid;
  grid-template-rows: auto;
  grid-template-areas: 'item-1 item-2 item-3';
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

	& > .item {
		&:nth-child(1) {
			grid-area: item-1;
		}

		&:nth-child(2) {
			grid-area: item-2;
		}

		&:nth-child(3) {
			grid-area: item-3;
		}
	}
}

.head {
	border: 3px solid #D4D4D4;
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

	&::before {
		content: "";
		position: absolute;
		left: -3px;
		top: 50px;
		width: calc(100% + (3px * 2));
		height: calc(35px / 2);
		background-color: var(--color-bg-1);
	}
}
</style>

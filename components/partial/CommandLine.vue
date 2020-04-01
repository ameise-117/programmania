<template lang="pug">
	.command-line
		.title スタート
		.line
			draggable(tag="ul", :options="{group:'ITEMS'}")
				li(:key="1") ああ
				li(:key="2") 回る
				li(:key="3") 待つ
		.title ゴール
</template>

<style scoped>
.command-line {
	width: 250px;
	height: 100%;
	background-color: #FBFBFA;
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
	padding-right: 30px;
	font-size: 2rem;
	z-index: 2;
}
</style>

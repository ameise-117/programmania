<template lang="pug">
	.command-line
		.title スタート
		.body
			draggable.line(tag="ul", :options="{ group: 'ITEMS' }")
				li.item(:key="1")
			.dummy(:class="{ hover: $store.state.isDummyHover }") ここに配置
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

.body {
	position: relative;
	height: 100%;
}

.line {
	height: 100%;
	padding: 10px 0 10px 30px;

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

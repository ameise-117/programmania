<template lang="pug">
	.mainvisual
		h1.title
			| プログラミング的思考力を育てる
			br.br
			| 学習サイト
		.lead
			p.text
				| 画面のコマンドを配置して
				br.br
				| ハリネズミを動かそう！
			img.img(src="~/assets/images/practice/target_center.png")
		a.button(href="/basic/1") スタート
</template>

<style scoped>
.mainvisual {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
  height: 100%;
  text-align: center;
  color: var(--color-key-1);
}

.lead {
	margin-top: 40px;

	& .img {
		margin-top: 5px;
		width: 70px;
		height: auto;
	}
}

.button {
	margin-top: 70px;
	width: 200px;
	height: 60px;
	background-color: var(--color-key-4);
	color: var(--color-text-2);
	font-size: 22px;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 30px;
	border: 2px solid transparent;
	transition: var(--transition-link);

	&:hover {
		background-color: var(--color-bg-1);
		color: var(--color-key-4);
		border-color: var(--color-key-4);
	}
}
</style>
<template lang="pug">
	.modal.guide
		.container
			.wrap
				p.text.bold(v-if="$store.state.windowWidth === 'mobile'") 画面が小さいためプレイできません
				p.text.bold(v-else) 利用環境ではプレイできません
				.note
					p.text 利用できる環境は以下です
					ul.list
						li.item
							| ＜ブラウザ＞
							br
							| ・Google Chrome （最新版）
							br
							| ・Mozilla Firefox （最新版）
							br
							| ・Microsoft Edge （最新版）
							br
							| ・Safari （最新版）
						li.item
							| ＜スマートフォンOS＞
							br
							| ・iOS 12.X.X以上
							br
							| ・Android 7.X.X以上
						li.item
							| ＜画面幅＞
							br
							| ・830px以上
				.body
					img.img(src="~/assets/images/modal/char_cry.png")
</template>

<style scoped>
.guide {
	& .container {
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.8);
	}

	& .wrap {
		width: 100%;
		height: 80%;
		margin: 0 auto;
		background: radial-gradient(#ffffff 40%, transparent);
		box-shadow: none;
		display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
	}

	& .img {
		margin-top: 20px;
	}

	& .note {
		text-align: left;
		margin-top: 10px;
	}

	& .text {
		font-size: 16px;
	}

	& .list {
		margin-top: 5px;

		& .item {
			margin-top: 7px;
		}
	}
}

.bold {
	font-weight: bold;
}
</style>
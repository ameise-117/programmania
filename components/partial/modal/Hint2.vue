<template lang="pug">
	.modal.hint
		.overlay(@click="$emit('close-modal')")
		.container
			.wrap
				.header 実行時間の確認方法
				.body
					img.img(src="~/assets/images/modal/hint2.svg", alt="実行時間の確認方法")
				.icon.icon-close(@click="$emit('close-modal')")
</template>

<style scoped>
.img {
  width: 400px;
}
</style>
<template lang="pug">
	.modal.hint
		.overlay(@click="$emit('close-modal')")
		.container
			.wrap
				.header 角度の設定方法
				.body
					img.img(src="~/assets/images/modal/hint1.svg", alt="角度の設定方法")
</template>

<style scoped>
.img {
  width: 300px;
}
</style>
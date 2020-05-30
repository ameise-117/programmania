<template lang="pug">
	.modal.tutorial
		.overlay(@click="$emit('close-modal')")
		.container
			.wrap
				.header 画面の見方
				.body
					img.img(src="~/assets/images/modal/tutorial1.png", alt="画面の見方")
</template>

<style scoped>
.img {
  width: 800px;
}
</style>
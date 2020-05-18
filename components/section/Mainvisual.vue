<template lang="pug">
	.mainvisual
		.lead
			img.img(src="~/assets/images/practice/target_center.png")
</template>

<style scoped>
.mainvisual {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
  height: 100%;
}

.lead {
	& .img {
		width: 100px;
	}
}
</style>
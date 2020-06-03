<template lang="pug">
	.modal.tutorial
		.overlay(@click="$emit('close-modal')")
		.container
			.wrap
				transition(:name="slideType")
					.page(v-show="pageNo == 1")
						.header 画面の見方
						.body
							img.img(src="~/assets/images/modal/tutorial1.png", alt="画面の見方")
				transition(:name="slideType")
					.page(v-show="pageNo == 2")
						.header 操作方法
						.body
							img.img(src="~/assets/images/modal/tutorial2.png", alt="操作方法")
				transition(:name="slideType")
					.page(v-show="pageNo == 3")
						.header コマンド設定方法
						.body
							img.img(src="~/assets/images/modal/tutorial3.png", alt="コマンド設定方法")
				.navigation
					.prev(:class="{ hide: pageNo == 1 }", @click="slidePage('', 'prev')")
						img.img(src="~/assets/images/modal/arrow_l.svg", alt="左矢印")
					.next(:class="{ hide: pageNo == 3 }", @click="slidePage('', 'next')")
						img.img(src="~/assets/images/modal/arrow_r.svg", alt="右矢印")
				ul.indicator
					li.item(:class="{ active: pageNo == 1 }", @click="slidePage(1, '')")
					li.item(:class="{ active: pageNo == 2 }", @click="slidePage(2, '')")
					li.item(:class="{ active: pageNo == 3 }", @click="slidePage(3, '')")
</template>

<script>
export default {
	data() {
		return {
			pageNo: 1,
      slideType: 'next'
		}
	},
	methods: {
  	slidePage(num, slideType) {
  		if (num) {
  			if (this.pageNo < num) {
  				this.slideType = 'next'
  			} else if (this.pageNo > num) {
  				this.slideType = 'prev'
  			}
  			this.pageNo = num

  		} else if (slideType) {
	      if (slideType === 'prev') {
	        this.pageNo -= 1
	      } else if (slideType === 'next') {
	        this.pageNo += 1
	      }
	      this.slideType = slideType
  		}
	  }
  }
}
</script>

<style scoped>
.navigation {
	& .prev,
	& .next {
		position: absolute;
		cursor: pointer;
		transition: var(--transition-link);

		&:hover {
			opacity: var(--opacity);
		}

		& > .img {
			@media (--tablet) {
				width: 25px;
			}
		}
	}

	& .prev {
		left: 0;
		margin-left: 15px;
	}

	& .next {
		right: 0;
		margin-right: 15px;
	}

	& .hide {
		opacity: 0;
		pointer-events: none;
	}
}

.indicator {
	position: absolute;
	bottom: 15px;
	display: flex;
	align-items: center;
	justify-content: center;

	& .item {
		width: 14px;
		height: 14px;
		margin: 0 6px;
		background-color: #f3f3f3;
		border-radius: 7px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
		opacity: var(--opacity);
		transition: var(--transition-link);
		cursor: pointer;

		&:hover,
		&.active {
			background-color: #879D54;
			opacity: 1;
		}

		& + .item {
			margin-left: 5px;
		}
	}

	&:focus {
		outline: none;
	}
}
</style>
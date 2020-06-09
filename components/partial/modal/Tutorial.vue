<template lang="pug">
	.modal.tutorial
		.overlay(@click="$emit('close-modal')")
		.container
			.wrap
				.label.top(:class="{ over: isFirst }")
				.label.bottom(:class="{ over: isFirst }")
				.page.first(v-show="isFirst")
					.header
						span.small プログラミング的思考力
						br.br
						| 育成道場へようこそ！
					.buttons
						img.src(src="~/assets/images/modal/char_comment.png", alt="コメント")
						.item.view(@click="viewTutorial()") 使い方を見る
						.item.start(@click="startPray()") 始める
				transition(:name="slideType")
					.page(v-show="pageNo == 1")
						.header-wrap
							.header
								span.num
									span.em 1
									| /3&nbsp;&nbsp;
								span.title 画面の見方
						.body
							picture
								source.img(media="(min-width: 830px)", srcset="~/assets/images/modal/tutorial1_pc.png")
								source.img(media="(max-width: 829px)", srcset="~/assets/images/modal/tutorial1_tb.png")
								img.img(src="~/assets/images/modal/tutorial1_pc.png", alt="画面の見方")
				transition(:name="slideType")
					.page(v-show="pageNo == 2")
						.header-wrap
							.header
								span.num
									span.em 2
									| /3&nbsp;&nbsp;
								span.title 操作方法
						.body
							picture
								source.img(media="(min-width: 830px)", srcset="~/assets/images/modal/tutorial2_pc.png")
								source.img(media="(max-width: 829px)", srcset="~/assets/images/modal/tutorial2_tb.png")
								img.img(src="~/assets/images/modal/tutorial2_pc.png", alt="操作方法")
				transition(:name="slideType")
					.page(v-show="pageNo == 3")
						.header-wrap
							.header
								span.num
									span.em 3
									| /3&nbsp;&nbsp;
								span.title コマンド設定方法
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
	props: ['isFirst'],
	data() {
		return {
			pageNo: 1,
      slideType: 'next'
		}
	},
	methods: {
		viewTutorial() {
			this.$emit('update-first')
		},
		startPray() {
			this.$emit('close-modal')
		},
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

.page {
	width: 100%;

	@media (--tablet) {
		height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.first {
  	position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in;

    & .header {
    	color: var(--color-key-1);
    	flex-direction: column;
    	line-height: 0.7;

    	&::before {
    		content: none;
    	}
    }

    & .buttons {
    	margin-top: 130px;
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	position: relative;
    }

    & .item {
    	width: 180px;
    	height: 50px;
    	border-radius: 25px;
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	font-size: 1.6rem;
    	cursor: pointer;
    	font-weight: bold;
    	letter-spacing: 0.05em;
    	transition: var(--transition-link);

    	& + .item {
    		margin-left: 20px;
    	}

    	&.view {
    		background-color: var(--color-key-4);
    		color: var(--color-text-2);
    		border: 2px solid transparent;

    		&:hover {
    			background-color: var(--color-bg-1);
	    		color: var(--color-key-4);
	    		border: 2px solid var(--color-key-4);
    		}
    	}

    	&.start {
    		background-color: var(--color-bg-1);
    		color: var(--color-key-4);
    		border: 2px solid var(--color-key-4);

    		&:hover {
    			background-color: var(--color-key-4);
	    		color: var(--color-text-2);
	    		border: 2px solid transparent;
    		}
    	}
    }

    & .src {
    	position: absolute;
    	left: -50px;
    	top: -92px;
    	height: 90px;
    	width: auto;
    }
  }
}

.header-wrap {
	color: var(--color-key-1);
	margin-bottom: 40px;
	width: 100%;
	position: relative;

	&::before {
		position: absolute;
		content: "";
		width: 50%;
		right: 0;
		bottom: -5px;
		height: 1px;
		background-color: var(--color-key-1);
	}
}

.header {
	font-size: 26px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	margin: 0 auto;

	&::before {
		position: absolute;
		content: "";
		width: 100%;
		left: -5px;
		bottom: -5px;
		height: 1px;
		background-color: var(--color-key-1);
	}
}

.em {
	font-size: 34px;
}

.small {
	font-size: 1.6rem;
	font-weight: initial;
}

.label {
	position: absolute;

	&.top {
		top: 0;
		left: 0;
		border-bottom: 200px solid transparent;
		border-left: 200px solid rgba(239, 245, 212, 0.5);
	}

	&.bottom {
		bottom: 0;
		right: 0;
		border-top: 200px solid transparent;
		border-right: 200px solid rgba(239, 245, 212, 0.5);
	}

	&.over {
		z-index: 5;
	}
}

.img {
	position: relative;
	z-index: 3;
}

.wrap {
	width: 90%;
	max-width: 800px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (--tablet) {
		height: 80vh;
	}
}

.body {
	margin-bottom: 20px;

	@media (--tablet) {
		flex: 1;
	}

	& .img {
		width: 700px;
		pointer-events: none;

		@media (--tablet) {
			max-height: 65vh;
			max-width: 100%;
			width: auto;
		}
	}
}
</style>
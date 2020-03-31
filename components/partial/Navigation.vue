<template lang="pug">
	.navigation
		.title Menu
		ul.list
			li.item
				p.head 基礎編
				ul.contents
					li.item
						nuxt-link.link(to="/practice/1") 直線を描く
					li.item
						nuxt-link.link(to="/practice/2") 回転させる
					li.item
						nuxt-link.link(to="/practice/3") 星座を見つける
					li.item.star
						nuxt-link.link(to="/practice/4") 星座を見つける
</template>

<style scoped>
.navigation {
	width: 250px;
	height: 100%;
	background-color: #FBFBFA;
	box-shadow: 3px 3px 5px rgba(49,100,160,.1), -3px 0 5px rgba(49,100,160,.1);
	z-index: 1;
}

.title {
	background-color: var(--color-key-1);
	color: var(--color-text-2);
	font-weight: bold;
	height: 40px;
	display: flex;
	align-items: center;
	font-size: 2rem;
	padding-left: 30px;
}

.head {
	background-color: #D2DFDC;
	height: 40px;
	display: flex;
	align-items: center;
	font-size: 1.8rem;
	color: var(--color-key-1);
	font-weight: bold;
	padding-left: 25px;
}

.contents {
	font-size: 1.6rem;

	& .item {
		position: relative;

		& + .item {
			border-top: 1px solid rgba(74, 111, 84, 0.1);
		}

		& .link {
			color: var(--color-key-1);
			text-decoration: none;
			padding-left: 25px;
			height: 40px;
			display: flex;
			align-items: center;
			transition: all 0.2s ease-in-out;

			&:hover {
				background-color: #EFEFEB;
			}
		}

		&.star {
			&::before {
				position: absolute;
				top: calc(50% - (15px / 2));
				left: 5px;
				top: 0;
				bottom: 0;
				margin: auto;
				content: url("../../assets/images/menu/icon_star.svg");
				display: inline-block;
				width: 15px;
				height: 15px;
			}
		}
	}
}
</style>

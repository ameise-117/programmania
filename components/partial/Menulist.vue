<template lang="pug">
	.menu
		.title Menu
		ul.list
			li.item
				p.head 基礎編
				ul.contents
					li.item
						nuxt-link.link(to="/practice/1") 直線を描く
					li.item
						nuxt-link.link(to="/practice/2") 回転させる
					li.item 星座を見つける
					li.item 星座を見つける
</template>

<style scoped>
.menu {
	width: 250px;
	height: 100%;
	background-color: #FBFBFA;
	box-shadow: 3px 3px 5px rgba(49,100,160,.1), -3px 0 5px rgba(49,100,160,.1);
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
		height: 40px;
		display: flex;
		align-items: center;
		padding-left: 25px;

		& + .item {
			border-top: 1px solid rgba(74, 111, 84, 0.1);
		}

		& .link {
			color: var(--color-key-1);
			text-decoration: none;
		}
	}
}
</style>

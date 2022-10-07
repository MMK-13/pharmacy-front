<template>
	<div class="menu">
		<router-link :to="{name: 'home'}">
			<div class="menu__action">
				<font-awesome-icon icon="fa-solid fa-capsules" />
				<span class="menu__action-text">Accueil</span>
			</div>
		</router-link>
		<router-link :to="{name: 'maps'}">
			<div class="menu__action">
				<font-awesome-icon icon="fa-regular fa-map" />
				<span class="menu__action-text">Carte</span>
			</div>
		</router-link>
		<router-link :to="{name: 'account'}">
			<div class="menu__action">
				<font-awesome-icon icon="fa-regular fa-user" />
				<span class="menu__action-text">Profil</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'BottomMenu',
	}
</script>

<style scoped>
	.rooter-link-active {
		color: #00A651;
	}
	a {
		text-decoration: none;
		color: #0A0A0A;
	}
	.menu {
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
	}
	.menu__action {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.menu__action-text {
		font-size: 12px;
	}
	svg {
		width: 32px;
		height: 32px;
	}
</style>
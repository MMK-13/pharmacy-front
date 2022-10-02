<template>
	<div class="header">
		<font-awesome-icon icon="fa-solid fa-bars" />	
		<div class="brand">
			<img src="@/assets/logo.svg" class="brand__image" />
			<span class="brand__title">Pharmacie</span>
		</div>
		<div class="notification">
			<font-awesome-icon icon="fa-regular fa-bell" />
			<span class="notification__count"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopHeader',
	}
</script>

<style scoped>
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	svg {
		font-size: 22px;
	}
	.brand {
		display: flex;
		flex-direction: row;		
		justify-content: center;
		align-items: center;
	}
	.brand__image {
		width: 22px;
		height: 22px;
	}
	.brand__title {
		margin-left: 8px;
		font-size: 18px;
		font-weight: 500;
		color: #4D4C4C;
	}
	.notification {
		position: relative;
	}
	.notification__count {
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		right: 0;
		position: absolute;
		height: 8px;
		width: 8px;
		color: #FFF;
		border-radius: 100%;
		background-color: red;
	}
</style>
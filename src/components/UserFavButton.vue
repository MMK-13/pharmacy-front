<template>
	<div class="content">
		<div class="favory">
			<div class="favory__icon">
				<font-awesome-icon icon="fa-solid fa-user-doctor" />
			</div>
			<span class="favory__text">Saved Doctors</span>
		</div>
		<div class="favory">
			<div class="favory__icon">
				<font-awesome-icon icon="fa-solid fa-table-list" />
			</div>
			<span class="favory__text">Saved Articles</span>
		</div>
		<div class="favory">
			<div class="favory__icon">
				<font-awesome-icon icon="fa-regular fa-heart" />
			</div>
			<span class="favory__text">Health Diary</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserFavButton',
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.favory {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.favory__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 64px;
		height: 64px;
		border-radius: 100%;
		background-color: #FFF;
		color: #0A0A0A;
		font-size: 28px;
	}
	.favory__text {
		text-align: center;
		color: #0A0A0A;
		font-size: 14px;
	}
</style>
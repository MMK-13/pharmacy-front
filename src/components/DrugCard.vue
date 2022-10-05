<template>
	<div class="card">
		<div class="card__content">
			<div class="card__content-image"></div>
			<div class="card__content-info">
				<h3 class="card__content-info-name">{{ title }}</h3>
				<p class="card__content-info-data">
					Prix : 100 F
				</p>
				<p class="card__content-info-data">
					Distance : 45 KM
				</p>
			</div>
		</div>
		<div class="card__button">Get</div>
	</div>
</template>

<script>
	export default {
		name: 'DrugCard',
		props: ['title', 'description']
	}
</script>

<style scoped>
	.card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		background-color: #FFF;
		border-radius: 10px;
		box-shadow: 0px 0px 0px #27AE60;
	}
	.card__content-image {
		width: 60px;
		height: 60px;
		background-color: #C4C4C4;
		border-radius: 10px;
	}
	.card__button {
		color: #27AE60;
		background-color: #F8F8FB;
		border-radius: 14px;
		font-size: 14px;
		font-weight: 500;
		padding: 10px 14px;
	}
	.card__content {
		display: flex;
		flex-direction: row;
	}
	.card__content-info {
		margin-left: 10px;
	}
	.card__content-info-name {
		color: #0A0A0A;
		font-size: 14px;
		font-weight: 700;
		margin: 0;
	}
	.card__content-info-description {
		color: #ABAFB3;
		font-size: 12px;
		margin: 0 0 0px 0;
	}
	.card__content-info-data {
		color: #27AE60;
		font-size: 12px;
		margin: 0;
	}
</style>
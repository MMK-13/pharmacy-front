<template>
		<div class="section">
			<div class="section__image">
				{{ image }}
			</div>
			<h2 class="section__title">{{ title }}</h2>
			<p class="section__text">{{ text }}</p>
		</div>
</template>

<script>
	export default {
		name: 'StartingSection',
		props: ['image', 'title', 'text']
	}
</script>

<style scoped>
	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 64px;
	}
	.section__image {
		border: none;
		border-radius: 4px;
		height: 246px;
		width: 246px;
		/* To delete */
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #C4C4C4;
		color: #747474;
		font-size: 32px;
	}
	.section__title {
		margin: 32px 16px;
		font-size: 32px;
		font-weight: bold;
	}
	.section__text {
		margin: 0 16px;
		font-size: 16px;
		color: #908F8F;
	}
</style>
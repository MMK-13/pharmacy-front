<template>
	<img src="@/assets/logo.svg" class="image" />
	<h1 class="title">Pharmacie</h1>
	<p class="slogan">Consulter les pharmacies en ligne!</p>
</template>

<script>
	export default {
		name: 'BrandExtra',
	}
</script>

<style>
	.image {
		height: 48px;
		width: 48px;
	}
	.title {
		margin: 16px 0 0 0;
		font-size: 30px;
		font-weight: 500;
		color: #4D4C4C;
	}
	.slogan {
		margin: 0;
		font-size: 14px;
		color: #908F8F;
	}
</style>
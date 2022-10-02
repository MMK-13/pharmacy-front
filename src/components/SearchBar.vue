<template>
	<div class="search">
		<label for="search" class="search__label">
			<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
		</label>
		<input id="search" type="search" class="search__input" placeholder="Search for pharmacy..." />
	</div>
</template>

<script>
	export default {
		name: 'SearhBar',
	}
</script>

<style scoped>
	.search {
		display: grid;
		grid-template-columns: 1fr 6fr;
		width: 100%;
		background-color: #FFF;
		border-radius: 12px;
		height: 54px;
	}
	.search__input {
		outline: none;
		border: none;
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
		color: #ABAFB3;
		font-size: 16px;
	}
	.search__input:focus {
		color: #0A0A0A;
	}
	.search__label {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #0A0A0A;
		font-size: 16px;
	}
</style>
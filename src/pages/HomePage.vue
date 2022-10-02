<template>
	<div class="container">
		<TopHeader class="TopHeader" />
		<SearchBar class="SearchBar" />
		<div class="title">
			<h2 class="title__text">Pharmacies nearby you</h2>
			<span class="title__action">See all</span>
		</div>

		<PharmacyCard
		class="PharmacyCard"
		v-for="(pharmacy, index) in pharmacies"
		:key="index"
		:title="pharmacy.title"
		:description="pharmacy.description"
		/>

		<BottomMenu />
	</div>
</template>

<script>
	import TopHeader from '@/components/TopHeader.vue'
	import SearchBar from '@/components/SearchBar.vue'
	import PharmacyCard from '@/components/PharmacyCard.vue'
	import BottomMenu from '@/components/BottomMenu.vue'

	export default {
		name: 'HomePage',
		components: {
			TopHeader,
			SearchBar,
			PharmacyCard,
			BottomMenu
		},
		data() {
			return {
				pharmacies : [
					{title: 'Pharmacie', description: 'Get verified medicines.'},
				]
			}
		}
	}
</script>

<style scoped>
	.container {
		height: 100%;
		padding: 40px 26px 0 26px;
	}
	.TopHeader {
		margin-bottom: 28px;
	}
	.SearchBar {
		margin-bottom: 16px;
	}
	.PharmacyCard {
		margin-bottom: 12px;
	}
	.title {
		margin: 0 0 16px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

	}
	.title__text {
		margin: 0;
		font-size: 18px;
		font-weight: 700;
		color: #0A0A0A;
	}
	.title__action {
		color: #219653;
		font-size: 14px;
	}
</style>
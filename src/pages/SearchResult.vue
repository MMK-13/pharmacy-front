<template>
	<div class="container">
		<TopHeader class="TopHeader" />
		<h2 class="title">{{ results.length }} result(s) found for : {{ $route.params.drug }}</h2>

		<DrugCard v-for="(result, key) in results"
			:key="key"
			:title="result.title"
			:description="result.description"
			class="DrugCard"
		/>

		<BottomMenu />
	</div>
</template>

<script>
	import TopHeader from '@/components/TopHeader'
	import DrugCard from '@/components/DrugCard'
	import BottomMenu from '@/components/BottomMenu'
	
	export default {
		name: 'SearchResult',
		components: {
			TopHeader,
			DrugCard,
			BottomMenu
		},
		data() {
			return {
				results: [
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},
					{title: 'Pharma ', description: 'Description...'},

				]
			}
		},
	}
</script>

<style scoped>
	.container {
		min-height: 100%;
		padding: 40px 26px 100px 26px;
	}
	.TopHeader {
		margin-bottom: 16px;
	}
	.SearchBar {
		margin-bottom: 16px;
	}
	.title {
		margin: 0;
		font-size: 18px;
		font-weight: 700;
		color: #0A0A0A;
		margin-bottom: 16px;
	}
	.DrugCard {
		margin-bottom: 8px;
	}
</style>
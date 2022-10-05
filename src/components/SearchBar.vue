<template>
	<div class="search">
		<div class="search__form">
			<label for="search" class="search__label">
				<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
			</label>
			<input id="search" type="search" class="search__input" placeholder="Search for pharmacy..." v-model="typing" />
		</div>
		<div class="search__result" v-show="showResult">
			<div class="search__result-item" v-for="(result, index) in results" :key="index" @click="setSearch(result)">{{ result.name }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SearhBar',
		data() {
			return {
				typing: '',
				drugs: [
					{name: 'Paracetamol'},
					{name: 'Nivaquine'},
					{name: 'Doliprane'},
					{name: 'Café'},
					{name: 'Bonnon'},
					{name: 'maison'},
					{name: 'test'},
					{name: 'asus'},
					{name: 'quinnine'},
					{name: 'Veste'},
					{name: 'toldou'},
					{name: 'Paraphine'},
					{name: 'Doliciprine'},
					{name: 'Quiz'},
					{name: 'joint'},
					{name: 'Perceuse'},
				],
			}
		},
		methods: {
			setSearch(drug) {
				if (!drug.error)
					this.$router.push('/search/' + drug.name)
			},
		},
		computed: {
			results() {
				let results = []
				if (this.typing.length >= 1) {
					this.drugs.filter(result => {
						if (result.name.toLowerCase().includes(this.typing.toLowerCase()))
							results.push({name: result.name})
					})
				}
				if (results.length == 0 && this.typing.length > 0)
					results = [{error: 404, name: "Drug not found :/"}]
				return results
			},
			showResult() {
				if (this.results.length > 0)
					return true
				return false
			}
		}
	}
</script>

<style scoped>
	.search {
		position: relative;
	}
	.search__result {
		position: absolute;
		top: 64px;
		left: 0;
		background-color: #FFF;
		width: 100%;
		padding: 8px 0;
		border-radius: 4px;
		opacity: .95;
	}
	.search__result-item {
		padding: 8px 32px;
		font-size: 16px;
	}
	.search__result-item:hover {
		background-color: #F1F1F1;
	}
	.search__form {
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
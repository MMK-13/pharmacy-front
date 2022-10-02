<template>
	<StartingSection :title="pages[page].title" :image="pages[page].image" :text="pages[page].text" />

	<br><br>

	<div class="pagination">
		<span v-for="(page, index) in pages" :key="index" :class="classes(index)"></span>
	</div>
	<div class="buttons">

		<button :class="cSkip" @click="skip();">Skip</button>
		<button :class="cPrevious" @click="previous();">Previous</button>
		<button :class="cNext" @click="next();">Next</button>
	</div>
	<div class="start" v-show="(max == page)">
		<button class="start__button" @click="start();">Get started</button>
	</div>
</template>

<script>
	import StartingSection from '@/components/StartingSection.vue'

	export default {
		name: 'StartingPage',
		components: {
			StartingSection,
		},
		data() {
			return {
				page: 0,
				pages: [
					{title: 'Find pharmacy near you', image: '246x246', text: 'It\'s easy to find pharmacy that is near to your location. With just one tap.'},
					{title: 'Search with our database', image: '246x246', text: 'It\'s easy to find pharmacy that is near to your location. With just one tap.'},
					{title: 'Get delivery on your door', image: '246x246', text: 'It\'s easy to find pharmacy that is near to your location. With just one tap.'},
				],
			}
		},
		methods: {
			start() {
				this.$router.push('/register')
			},
			previous() {
				if (this.page > 0)
					this.page--
			},
			next() {
				if (this.page < this.max)
					this.page++
			},
			skip() {
				this.page = this.max
			}
		},
		computed: {
			cPrevious() {
				if (this.page == 0)
					return 'hide' 
				else
					return 'buttons__previous'
			},
			cSkip() {
				if (this.page == this.max)
					return 'hide' 
				else
					return 'buttons__skip'
			},
			cNext() {
				if (this.page == this.max)
					return 'hide' 
				else
					return 'buttons__next'
			},
			max() {
				return this.pages.length - 1
			},
			classes() {
					return index => {
						if (index == this.page)
							return 'pagination__dot-active'
						else
							return 'pagination__dot'
					}
			}
		}
	}
</script>

<style scoped>
	.hide {
		display: none;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 48px 16px;
	}
	.buttons__next {
		border: none;
		border-radius: 12px;
		background-color: #00A651;
		color: #FFF;
		font-size: 14px;
		padding: 16px;
		cursor: pointer;
	}
	.buttons__previous {
		border: none;
		padding: 16px;
		border-radius: 12px;
		background-color: #FFF;
		cursor: pointer;
		color: #908F8F;
	}
	.buttons__skip {
		border: none;
		background-color: #E5E5E5;
		text-decoration: underline;
		cursor: pointer;
		color: #908F8F;
	}
	.start {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.start__button {
		border: none;
		border-radius: 12px;
		background-color: #00A651;
		color: #FFF;
		font-size: 18px;
		font-weight: 700;
		padding: 16px;
		cursor: pointer;
	}
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.pagination__dot {
		border-radius: 100%;
		width: 8px;
		height: 8px;
		background-color: #C4C4C4;
		margin-left: 4px;
	}
	.pagination__dot-active {
		background-color: #00A651;
		border-radius: 100%;
		width: 8px;
		height: 8px;
		margin-left: 4px;
	}
</style>
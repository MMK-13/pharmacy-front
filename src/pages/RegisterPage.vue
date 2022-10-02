<template>
	<div class="container">
		<BrandExtra />
		<p class="text">We will send a one time SMS message. Carrier rates may apply.</p>
		<div class="phone">
			<label for="phone" class="phone__label">+223</label>
			<input id="phone" type="number" class="phone__input" placeholder="Enter your phone number..." />
		</div>
		<div class="buttons">
			<button class="buttons__next" @click="submit()">Next</button>
		</div>
	</div>
</template>

<script>
	import BrandExtra from '@/components/BrandExtra.vue'

	export default {
		name: 'RegisterPage',
		components: {
			BrandExtra,
		},
		data() {
			return {
				phone: '',
			}
		},
		methods: {
			submit() {
				// Send number to server
				this.$router.push('/confirmation')
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 0 32px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.phone {
		display: grid;
		grid-template-columns: 1fr 5fr;
		margin-bottom: 64px;
		width: 100%;
		background-color: #FFF;
		border-radius: 12px;
		height: 54px;
	}
	.phone__input {
		outline: none;
		border: none;
		border-left: 2px solid #E5E5E5;
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
		padding-left: 16px;
		color: #ABAFB3;
		font-size: 16px;
	}
	.phone__label {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ABAFB3;
		font-size: 16px;
	}
	.text {
		margin: 32px 0;
		text-align: center;
		font-size: 14px;
		color: #807C7C;
	}
	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.buttons__next {
		border: none;
		border-radius: 12px;
		background-color: #00A651;
		color: #FFF;
		font-size: 18px;
		font-weight: 700;
		padding: 16px;
		cursor: pointer;
	}
	/* Chrome, Safari, Edge, Opera */
	.phone__input::-webkit-outer-spin-button,
	.phone__input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Firefox */
	.phone__input {
		-moz-appearance: textfield;
	}
</style>
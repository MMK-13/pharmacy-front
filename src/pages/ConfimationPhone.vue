<template>
	<div class="container">
		<BrandExtra />
		<p class="text">Submit the 4 digit code you got on your provided number.</p>
		<div class="confirmation">
			<input type="number" class="confirmation__input" min="0" max="9" @keyup="$event.target.nextElementSibling.focus()" />
			<input type="number" class="confirmation__input" min="0" max="9" @keyup="$event.target.nextElementSibling.focus()" />
			<input type="number" class="confirmation__input" min="0" max="9" @keyup="$event.target.nextElementSibling.focus()" />
			<input type="number" class="confirmation__input" min="0" max="9" />
		</div>
		<div class="buttons">
			<button class="buttons__next" @click="submit">Verify</button>
		</div>
		<p class="resent" @click="resentCode">Didn't receive an OTP? Resend</p>
	</div>
</template>

<script>
	import BrandExtra from '@/components/BrandExtra.vue'

	export default {
		name: 'ConfimationPhone',
		components: {
			BrandExtra
		},
		methods: {
			next(event) {
				const char = String.fromCharCode(event.keyCode)
				if (!/[0-9]/.test(char)) {
					event.preventDefault()
					event.target.nextElementSibling.focus()
				}
			},
			submit() {
				this.$router.push('/home')
			},
			resentCode() {
				console.log("Resent!")
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
	.resent {
		text-decoration: underline;
		margin: 48px 0 0 0;
		color: #807C7C;
		text-align: center;
	}
	.confirmation {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 64px;
		width: 100%;
	}
	.confirmation__input {
		text-align: center;
		outline: none;
		border: 2px solid #E5E5E5;
		border-radius: 12px;
		color: #ABAFB3;
		font-size: 32px;
		height: 54px;
		width: 54px;
	}
	/* Chrome, Safari, Edge, Opera */
	.confirmation__input::-webkit-outer-spin-button,
	.confirmation__input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Firefox */
	.confirmation__input {
		-moz-appearance: textfield;
	}
</style>
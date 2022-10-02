<template>
	<div class="container" @click="go();">
		<BrandExtra />
	</div>
</template>

<script>
	import BrandExtra from '@/components/BrandExtra.vue'

	export default {
		name: 'SplashScreen',
		components: {
			BrandExtra,
		},
		methods: {
			go() {
				this.$router.push('/starting');
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
<template>
	<div class="user">
		<div class="user__image"></div>
		<div class="user__fullname">{{ fullname }}</div>
		<div class="user__phone">{{ phone }}</div>
	</div>
</template>

<script>
	export default {
		name: 'UserInfo',
		props: ['fullname', 'phone'],
	}
</script>

<style scoped>
	.user {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.user__image {
		height: 120px;
		width: 120px;
		border-radius: 100%;
		background-color: #C4C4C4;
		margin-bottom: 8px;
	}
	.user__fullname {
		font-size: 18px;
		font-weight: 700;
		color: #0A0A0A;
		margin-bottom: 0px;
	}
	.user__phone {
		font-weight: 500;
		color: #ABAFB3;
		font-size: 14px;
	}
</style>
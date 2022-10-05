<template>
	<div class="notification">
		<h2 class="notification__title">{{ title }}<span class="notification__date">{{ date }}</span></h2>
		<p class="notification__text">{{ content }}</p>
	</div>
</template>

<script>
	export default {
		name: 'NotificationItem',
		props: ['title', 'content', 'date']
	}
</script>

<style scoped>
	.notification {
		position: relative;
		background-color: #FFF;
		border-radius: 4px;
		padding: 4px 8px;
	}
	.notification__title {
		color: #00A651;
		margin: 0;
		font-size: 16px;
	}
	.notification__text {
		color: #9A9A9A;
		margin: 0;
		font-size: 14px;
	}
	.notification__date {
		position: absolute;
		font-size: 10px;
		top: 10px;
		right: 10px;
	}
</style>
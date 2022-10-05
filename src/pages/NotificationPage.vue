<template>
	<div class="container">
		<TopHeader class="TopHeader" />
		<NotificationItem v-for="(notification, key) in notifications" :key="key" class="NotificationItem"
			:title="notification.title"
			:content="notification.content"
			:date="notification.date"
		/>
	</div>
</template>

<script>
	import TopHeader from '@/components/TopHeader'
	import NotificationItem from '@/components/NotificationItem'

	export default {
		name: 'NotificationPage',
		components: {
			TopHeader,
			NotificationItem,
		},
		data() {
			return {
				notifications: [
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
					{title: 'Test de titre', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', date: '05/10/2022'},
				],
			}
		},
	}
</script>

<style scoped>
	.container {
		min-height: 100%;
		padding: 40px 26px 50px 26px;
	}
	.TopHeader {
		margin-bottom: 16px;
	}
	.NotificationItem {
		margin-bottom: 8px;
	}
</style>
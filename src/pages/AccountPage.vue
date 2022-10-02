<template>
	<div class="container">
		<TopHeader class="TopHeader" />
		<UserInfo class="UserInfo" :fullname="user.fullname" :phone="user.phone" />
		<UserFavButton class="UserFavButton" />
		<UserOption />
		<BottomMenu />
	</div>
</template>

<script>
	import BottomMenu from '@/components/BottomMenu.vue'
	import TopHeader from '@/components/TopHeader.vue'
	import UserInfo from '@/components/UserInfo.vue'
	import UserFavButton from '@/components/UserFavButton.vue'
	import UserOption from '@/components/UserOption.vue'

	export default {
		name: 'AccountPage',
		components: {
			BottomMenu,
			TopHeader,
			UserInfo,
			UserFavButton,
			UserOption,
		},
		data() {
			return {
				user: {
					fullname: 'Mamadou M. Kanté',
					phone: '+223 72 14 65 16'
				}
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
		margin-bottom: 32px;
	}
	.UserInfo {
		margin-bottom: 16px;
	}
	.UserFavButton {
		margin-bottom: 16px;
	}
</style>
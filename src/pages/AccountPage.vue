<template>
	<div class="container">
		<TopHeader class="TopHeader" needBack="true" />
		<UserInfo class="UserInfo" :fullname="user.fullname" :phone="user.phone" />
		<UserFavButton class="UserFavButton" />
		<UserOption />
	</div>
</template>

<script>
	import TopHeader from '@/components/TopHeader'
	import UserInfo from '@/components/UserInfo'
	import UserFavButton from '@/components/UserFavButton'
	import UserOption from '@/components/UserOption'

	export default {
		name: 'AccountPage',
		components: {
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
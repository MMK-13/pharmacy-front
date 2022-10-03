<template>
	<Transition name="sidebar">
		<div class="sidebar" v-if="visibility">
			<UserInfo :fullname="user.fullname" :phone="user.phone" />
			<div class="divider"></div>
			
		</div>
	</Transition>
</template>

<script>
	import UserInfo from './UserInfo.vue'

	export default {
		name: 'SideBar',
		props: ['visibility'],
		components: {
			UserInfo,
		},
		data() {
			return {
				user: {
					fullname: 'MMKante',
					phone: '+1234567890'
				}
			}
		}
	}
</script>

<style scoped>
	.sidebar-enter-active,
	.sidebar-leave-active {
		transition: all 0.3s ease-out;
	}
	.sidebar-enter-from,
	.sidebar-leave-to {
		transform: translateX(-275px);
	}
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 275px;
		height: 100%;
		z-index: 10;
		background-color: #FFF;
	}
	.divider {
		border-bottom: 1px solid #E5E5E5;
		padding: 8px 0;
	}
</style>
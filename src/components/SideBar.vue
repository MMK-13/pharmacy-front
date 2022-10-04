<template>
	<Transition name="sidebar">
		<div class="sidebar" v-if="visibility">
			<UserInfo :fullname="user.fullname" :phone="user.phone" />
			<div class="divider"></div>
			<div class="sidebar__options">
				<div class="sidebar__option">
					<font-awesome-icon icon="fa-solid fa-capsules" />
					<span class="sidebar__option-text">Online pharmacy</span>
				</div>
				<div class="sidebar__option">
					<font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
					<span class="sidebar__option-text">All services</span>
				</div>
				<div class="sidebar__option">
					<font-awesome-icon icon="fa-solid fa-info" />
					<span class="sidebar__option-text">About us</span>
				</div>
			</div>
			<div class="divider"></div>
			<div class="sidebar__options">
				<div class="sidebar__option">
					<font-awesome-icon icon="fa-solid fa-share-nodes" />
					<span class="sidebar__option-text">Tell your friend</span>
				</div>
				<div class="sidebar__option">
					<font-awesome-icon icon="fa-regular fa-message" />
					<span class="sidebar__option-text">Feedback & contact us</span>
				</div>
				
			</div>
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
		transform: translateX(-296px);
	}
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 296px;
		height: 100%;
		z-index: 10;
		background-color: #FFF;
	}
	.divider {
		border-bottom: 1px solid #E5E5E5;
		padding: 8px 0;
	}
	.sidebar__options {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
	}
	.sidebar__option {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 16px 32px;
	}
	.sidebar__option:hover {
		transition: background-color 1s ease;
		background-color: #F1F1F1;
	}
	.sidebar__option-text {
		font-size: 16px;
		margin-left: 8px;
		color: #807C7C;
	}
	.sidebar__option svg {
		color: #00A651;
		width: 22px;
		height: 22px;
	}
</style>
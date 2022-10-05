<template>
	<div class="header">
		<Transition name="overlay">
			<div class="overlay" v-if="sideBarVisibility" @click="hideSideBar"></div>
		</Transition>
		<SideBar class="SideBar" :visibility="sideBarVisibility" />
		<font-awesome-icon icon="fa-solid fa-bars" @click="displaySideBar" />	
		<div class="brand">
			<img src="@/assets/logo.svg" class="brand__image" />
			<span class="brand__title">Pharmacie</span>
		</div>
		<div class="notification">
			<font-awesome-icon icon="fa-regular fa-bell" />
			<span class="notification__count"></span>
		</div>
	</div>
</template>

<script>
	import SideBar from './SideBar.vue'

	export default {
		name: 'TopHeader',
		components: {
			SideBar,
		},
		data() {
			return {
				sideBarVisibility: false,
			}
		},
		methods: {
			displaySideBar() {
				this.sideBarVisibility = true
			},
			hideSideBar() {
				this.sideBarVisibility = false
			}
		}
	}
</script>

<style scoped>
	.overlay-enter-active,
	.overlay-leave-active {
		transition: opacity 0.5s ease;
	}
	.overlay-enter-from,
	.overlay-leave-to {
		opacity: 0;
	}
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .75);
		z-index: 9;
	}
	.SideBar {
		padding-top: 32px;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	svg {
		font-size: 22px;
	}
	.brand {
		display: flex;
		flex-direction: row;		
		justify-content: center;
		align-items: center;
	}
	.brand__image {
		width: 22px;
		height: 22px;
	}
	.brand__title {
		margin-left: 8px;
		font-size: 18px;
		font-weight: 500;
		color: #4D4C4C;
	}
	.notification {
		position: relative;
	}
	.notification__count {
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		right: 0;
		position: absolute;
		height: 8px;
		width: 8px;
		color: #FFF;
		border-radius: 100%;
		background-color: red;
	}
</style>
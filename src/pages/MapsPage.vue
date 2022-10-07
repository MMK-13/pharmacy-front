<template>
	<div class="container">
		<TopHeader class="TopHeader" needBack="true" />	
		<LeafletMap />
	</div>
</template>

<script>
	import "leaflet/dist/leaflet.css";
	import TopHeader from '@/components/TopHeader'
	import LeafletMap from "@/components/LeafletMap";

	export default {
		name: 'MapsPage',
		components: {
			TopHeader,
			LeafletMap,
		},
	}
</script>

<style scoped>
	.container {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
	}
	.TopHeader {
		padding: 40px 26px 16px 26px;
	}
	.map {
	}
	.myLocation {
		position: fixed;
		bottom: 10px;
		right: 10px;
		border: 1px solid #CCC;
		box-shadow: 1px 1px 2px #CCC;
		border-radius: 100%;
		z-index: 10000000;
		color: #00A651;
		background-color: #FFF;
		width: 64px;
		height: 64px;
		font-size: 24px;
	}
	.myLocation:active {
		background-color: #00A651;
		color: #FFF;
	}
	.myMarker {
		width: 32px;
		height: 32px;
	}
</style>
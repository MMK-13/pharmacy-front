<template>
	<div class="container">
		<TopHeader class="TopHeader" needBack="true" />
		<button class="myLocation" @click="userPosition">
			<font-awesome-icon icon="fa-solid fa-location-crosshairs" />
		</button>
		<l-map
			:center="center"
			:zoom="zoom"
			:minZoom="12"
			:maxZoom="19"
			ref="map"
			@update:center="centerUpdated"
			@update:zoom="zoomUpdated"
			:zoomAnimation="true"
			class="map"
			>
			<l-tile-layer :url="url"></l-tile-layer>
		</l-map>
	</div>
</template>

<script>
	import "leaflet/dist/leaflet.css";
	import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
	import TopHeader from '@/components/TopHeader'

	export default {
		name: 'MapsPage',
		components: {
			LMap,
			LTileLayer,
			TopHeader,
		},
		data() {
			return {
				url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				zoom: 16,
				center: [12.639132614727998, -8.002730049083848],
				// Bamako : 12.639132614727998, -8.002730049083848
			}
		},
		methods: {
			userPosition() {
				navigator.geolocation.getCurrentPosition(
					position => {
						this.center = [
							position.coords.latitude,
							position.coords.longitude
						]
						this.zoom = 16
					},
					error => console.log(error.message),
				)
			},
			centerUpdated(center) {
				this.center = center
			},
			zoomUpdated(zoom) {
				this.zoom = zoom
			},
		},
		computed: {
			iconUrl() {
				return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
			},
			iconSize() {
				return [this.iconWidth, this.iconHeight];
			},
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
</style>
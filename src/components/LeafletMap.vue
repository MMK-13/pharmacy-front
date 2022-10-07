<template>
	<button class="myPosition" @click="userPosition">
		<font-awesome-icon icon="fa-solid fa-location-crosshairs" />
	</button>
	<l-map
	:center="myPosition"
	:zoom="zoom"
	:minZoom="12"
	:maxZoom="19"
	ref="map"
	@update:zoom="zoomUpdated"
	:zoomAnimation="true"
	:fadeAnimation="true"
	class="map" v-if="showMe">
	<l-tile-layer :url="url"></l-tile-layer>
	<l-marker key="myPosition" :lat-lng="myPosition">
		<l-popup>
			Ma position
		</l-popup>
		<l-icon ref="icon">
			<img src="@/assets/person-marker.png" class="pharmacieMarker" />
		</l-icon>
	</l-marker>

	<l-marker v-for="pharmacie in pharmacies" :key="pharmacie.id" :lat-lng="pharmacie.coords">
		<l-icon ref="icon">
			<img src="@/assets/pharmacie-marker.png" class="pharmacieMarker" />
		</l-icon>
		<l-popup>
			{{ pharmacie.name }}
		</l-popup>
	</l-marker>
</l-map>
<div class="default" v-else>
	Veuillez appuyez sur le bouton de géolocation situé en bas à droite afin de récupérer votre position et autorisez le navigateur à accéder à votre position.
</div>
</template>

<script>
	import "leaflet/dist/leaflet.css";
	import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "@vue-leaflet/vue-leaflet"
	import { Icon } from 'leaflet'

	delete Icon.Default.prototype._getIconUrl;
	Icon.Default.mergeOptions({
		iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
		iconUrl: require('leaflet/dist/images/marker-icon.png'),
		shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
	});
	
	export default {
		name: 'LeafletMap',
		components: {
			LMap,
			LTileLayer,
			LMarker,
			LIcon,
			LPopup
		},
		data() {
			return {
				url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				zoom: 16,
				myPosition: [0, 0],
				showMe: false,
				pharmacies: [
				{id: 0, coords: [55.801155656942896, 37.807713534631084], name: 'Pharmacie 1'},
				{id: 1, coords: [55.79981591543717, 37.808805184938336], name: 'Pharmacie 2'},
				{id: 2, coords: [55.80339732742402, 37.80346467434186], name: 'Pharmacie 3'},
				{id: 3, coords: [55.80418351132004, 37.80591357663776], name: 'Pharmacie 4'},
				{id: 4, coords: [55.807892132286554, 37.80423169672256], name: 'Pharmacie 5'},
				{id: 5, coords: [55.80238581908071, 37.80528356987714], name: 'Pharmacie 6'},
				{id: 6, coords: [55.79813733529652, 37.803657473258816], name: 'Pharmacie 7'},
				{id: 7, coords: [55.79437397941224, 37.805888972606965], name: 'Pharmacie 8'},
				],
			}
		},
		methods: {
			userPosition() {
				navigator.geolocation.getCurrentPosition(
					position => {
						this.myPosition = [
						position.coords.latitude,
						position.coords.longitude
						]
						this.showMe = true
					},
					error => console.log(error.message),
					)
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
	.default {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		font-weight: 700;
		color: #0A0A0A;
		padding: 0 16px;
		line-height: 32px;
		text-align: center;
	}
	.map {}
	.myMarker {}
	.pharmacieMarker {}
	.myPosition {
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
	.myPosition:active {
		background-color: #00A651;
		color: #FFF;
	}
	.myMarker {
		width: 32px;
		height: 32px;
	}
</style>
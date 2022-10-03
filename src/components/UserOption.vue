<template>
	<div class="content">
		<div class="option">
			<div class="option__title">
				<font-awesome-icon icon="fa-regular fa-calendar" />
				<span class="option__title-text">Appointments</span>
			</div>
			<font-awesome-icon icon="fa-solid fa-chevron-right" class="chevron" />
		</div>
		<div class="divider"></div>
		<div class="option">
			<div class="option__title">
				<font-awesome-icon icon="fa-regular fa-calendar" />
				<span class="option__title-text">Appointments</span>
			</div>
			<font-awesome-icon icon="fa-solid fa-chevron-right" class="chevron" />
		</div>
		<div class="divider"></div>
		<div class="option">
			<div class="option__title">
				<font-awesome-icon icon="fa-regular fa-calendar" />
				<span class="option__title-text">Appointments</span>
			</div>
			<font-awesome-icon icon="fa-solid fa-chevron-right" class="chevron" />
		</div>
		<div class="divider"></div>
		<div class="option">
			<div class="option__title">
				<font-awesome-icon icon="fa-regular fa-calendar" />
				<span class="option__title-text">Appointments</span>
			</div>
			<font-awesome-icon icon="fa-solid fa-chevron-right" class="chevron" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserOption',
	}
</script>

<style scoped>
	.option__title svg {
		color: #00A651;
	}
	.content {
		display: flex;
		flex-direction: column;
		background-color: #FFF;
		border-radius: 18px;
		padding: 16px 0;
	}
	.option {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		font-size: 16px;
		color: #0A0A0A;
	}
	.option__title {
		padding: 12px;
	}
	.option__title-text {
		margin-left: 16px;
		font-weight: 500;
	}
	.chevron {
		padding: 12px;
	}
	.divider {
		border-bottom: 2px solid #E5E5E5;
	}
</style>
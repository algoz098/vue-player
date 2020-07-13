<template>
<button
	:class="theClass"
	v-on="$listeners"
>
	<slot />
</button>
</template>

<script>
export default {
	name: 'vue-player-button',

	props: {
		show: Boolean,
	},

	computed: {
		theClass() {
			if (this.$attrs.class) return this.$attrs.class
			
			return 'vue-player-button'
		}
	}
}
</script>

<style scoped>
 .vue-player-button {
	width: 35px;
	border: 0px solid white;
	color: white;
	background-color: transparent;
	outline: 0px;
}
</style>

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
			
			return 'button'
		}
	}
}
</script>

<style scoped>
 .button {
	width: 35px;
	border: 0px solid white;
	color: white;
	background-color: transparent;
}
</style>

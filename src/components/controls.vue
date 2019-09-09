<template>
<transition
	name="smooth"
>
	<div 
		v-if="show"
		:class="theClass"
	>
		<slot></slot>
	</div>
</transition>
</template>

<script>
export default {
	name: 'vue-player-controls',

	props: {
		show: Boolean,
	},

	computed: {
		theClass() {
			if (this.$attrs.class) return this.$attrs.class

			return '.vue-video-player-controls'
		}
	}
}
</script>

<style scoped>

.smooth-enter-active, .smooth-leave-active {
  transition: opacity .5s;
}
.smooth-enter, .smooth-leave-to {
  opacity: 0
}

.vue-video-player-controls {
  max-height: 30px;
  display: flex;
  bottom:0;
  left:0;
  right:0;
  padding: 5px;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

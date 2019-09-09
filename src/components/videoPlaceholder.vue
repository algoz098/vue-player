<template>
	<video 
		:src="src"
		:controls="false"
		class="placeholder"
		:loop="true"
		autoplay 
		muted 
		playsinline
		v-if="showVideo"
		ref="video"
		@loadstart="loadVideo"
	/>

	<img
		:src="poster"
		class="placeholder"
		v-else-if="showPoster"
	/>
</template>

<script>
import enableInlineVideo from 'iphone-inline-video';

export default {
	name: 'video-placeholder',

	props: {
		src: {
			required: false,
			type: String
		},
		
		poster: {
			required: false,
			type: String
		},
		
		previewOnMouse: {
			type: Boolean,
			default: false
		},
		
		mouseover: {
			type: Boolean,
			default: false
		},
	},

	data () {
		return {
		}
	},

	created () {
	},

	methods:{
		loadVideo () {
			enableInlineVideo(this.$refs.video, {
				iPad: true
			})
		},
	},

	computed: {
		showVideo () {
			let result = false 
			
			if (this.previewOnMouse) {
				if (this.src && this.mouseover) result = true
			} 

			if (!this.previewOnMouse) {
				if (this.src) result = true
			}

			return result
		},

		showPoster () {
			if (this.poster) return true

			return false
		}
	}
}
</script>

<style scoped>
</style>

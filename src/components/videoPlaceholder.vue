<template>
<div class="vue-video-player-container">
	<div
		class="loading-bar"
		:style="{width: `${loadPercent}%`}"
		v-if="loading"
	/>

	<video 
		:src="src"
		:controls="false"
		class="placeholder"
		:loop="true"
		autoplay 
		muted 
		playsinline
		v-show="showVideo"
		v-if="ifVideo"
		ref="video"
		@loadstart="loadVideo"
		@progress="atProgress"

	/>

	<img
		:src="poster"
		class="placeholder"
		v-show="showPoster"
	/>
</div>
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
			loading: false,
			loadPercent: 0
		}
	},

	methods:{
		atProgress (e) {
			if (typeof (this.$refs.video.buffered) === 'undefined' || this.$refs.video.buffered.length <= 0) {
				return // we are not yet ready as data is not yet available
			}
			var range = 0;
			var bf = this.$refs.video.buffered;
			var time = this.$refs.video.currentTime;

			while(!(bf.start(range) <= time && time <= bf.end(range))) {
				range += 1;
			}

			var loadStartPercentage = bf.start(range) / this.$refs.video.duration;
			var loadEndPercentage = bf.end(range) / this.$refs.video.duration;

			this.loadPercent = (loadEndPercentage - loadStartPercentage) * 100

			if (this.loadPercent >= 100) this.loading = false
		},

		loadVideo (e) {
			this.loading = true

			enableInlineVideo(this.$refs.video, {
				iPad: true
			})
		},
	},

	computed: {
		ifVideo () {
			let result = false

			if (this.previewOnMouse) {
				if (this.mouseover) result = true

				if (this.loadPercent) result = true
			} else {
				result = true
			}

			return result
		},

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
			if (this.poster && !this.showVideo) return true

			return false
		}
	}
}
</script>

<style scoped>
.loading-bar {
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgb(192, 192, 192);
	height: 3px;
	z-index: 10;
}

div.vue-video-player-container {
	width: 100%;
	height: 100%;
}

div.vue-video-player-container,
img,
video{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>

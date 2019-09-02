<template>
<div
	class="vue-video-player"
	:class="{
		'volume-showing': showSound
	}"
	@mouseenter="atMouseenter"
	@mouseleave="atMouseleave"
>
	<video 
		ref="video"
		:src="srcComputed"
		:controls="false"
		:autoplay="autoplay"
		:class="{
			'transparent': !started
		}"
		@play="play"
		@pause="pause"
		@click="atPlayPause"
		@timeupdate="atTimeupdate"
		@canplay="atCanplay"
		@volumechange="atVolumechange"
		@ended="atEnded"
	/>

	<!-- Use this slot replace the poster image tag -->
	<slot name="poster">
		<img
			:src="poster"
			class="placeholder"
			v-if="!started && poster"
		/>
	</slot>

	<video 
		:src="videoPlaceholderSrc"
		:controls="false"
		class="placeholder"
		muted
		autoplay
		v-if="!started && videoPlaceholderSrc"
	/>

	<div 
		:class="overlayClass"
		v-if="!started"
	>
		<!-- Use this slot to replace the overlay content -->
		<slot name="overlay">
			<p-button
				@click="atPlayPause"
				:style="{fontSize: '29vw', width: '100%'}"
			>
				&#9658
			</p-button>
		</slot>
	</div>
	
	<!-- Use this slot to replace the controls  -->
	<slot name="controls">
		<controls 
			:class="controlsClass"
			:show="showControlsIf"
			:style="controlsStyleComputed"
		>
			<!-- Use this slot to replace the play button  -->
			<slot name="play">
				<p-button
					:class="playButtonClass"
					:style="playButtonStyle"
					@click="atPlayPause"
				>
				<!-- Use this slot to replace the label of play button  -->
					<slot name="play-label">
						<span
							v-if="!playingComputed"
						>
							&#9658
						</span>

						<span
							v-else
						>
							||
						</span>
					</slot>
				</p-button>
			</slot>
			
			<!-- Use this slot to replace the entire volume button and control of the volume  -->
			<slot name="volume">
				<p-button
					@click="atVolume"
					:class="volumeButtonClass"
					:style="volumeButtonStyle"
				>
					<!-- Use this slot to replace the label of volume button  -->
					<slot name="volume-label">
						<span
							v-if="showSound"
						>
							S
						</span>

						<span
							v-else
						>
							s
						</span>
					</slot>
				</p-button>

				<!-- Use this slot to replace the control of the volume  -->
				<slot name="volume-control-input">
					<range
						v-model="volumeComputed"
						:max="1"
						width="60px"
						:show="showSound"
					/>
				</slot>
			</slot>

			<!-- Use this slot to replace the timer layout  -->
			<slot name="timer">
				<p-button
					@click="atVolume"
					:class="timerClass"
					:style="timerStyle"
				>
					<!-- Use this slot to replace the label timer layout  -->
					<slot name="timer-label">
						{{minutesTime}} / {{minutesDuration}}
					</slot>
				</p-button>
			</slot>

			<!-- Use this slot to replace the timer control  -->
			<slot name="timer-control">
				<range
					v-model="timeComputed"
					:max="duration"
					:width="timerControlWidth"
					show
				/>
			</slot>
			
			<p-button
				:class="fullscreenButtonClass"
				:style="fullscreenButtonStyle"
				@click="atFullscreen"
			>
				<!-- Use this slot to replace the label of fullscreen button  -->
				<slot name="fullscreen-label">
					F
				</slot>
			</p-button>
		</controls>
	</slot>
</div>
</template>

<script>
import controls from './controls'
import pButton from './button'
import range from './range'

  /**
   * The custom vue html5 video player
   * 
   * @author Artur  Sena
   * @license MIT
   */
export default {
	name: 'vue-player',

	components: {
		controls,
		pButton,
		range
	},

	props: {
		/**
       * Set play/pause.
       * It automatically set the video the right state
       * @model
       */
		value: {
			type: Boolean,
			default: undefined
		},

		/**
       * Define the source for the video tag. 
	   * if array uses the src-index to pick one
       */
		src: {
			required: true,
			type: [String, Array]
		},

		/**
       * Use ONLY if src is a array
	   * set the index of the src
       */
		srcIndex: [String, Number],

		/**
       * set the video to autoplay as it's loaded
       */
		autoplay: {
			type: Boolean,
			default: false
		},
		
		/**
       * set a image placeholder util the video start to play once
       */
		poster: String,
		
		/**
       * if you want a video teaser you can use this, will be played with-out sound
       */
		videoPlaceholderSrc: String,

		/**
       * define the volume of the player
	   * values from 0 util 1
       */
		volume: {
			type: Number,
			default: undefined
		},
		
		/**
       * show/hide the controls
       */
		controls:  {
			type: Boolean,
			default: undefined
		},

		/**
       * class for the overlay
       */
		overlayClass: {
			default: "vue-video-center"
		},

		/**
       * class for the controls bar
       */
		controlsClass:{
			default: "vue-video-player-controls"
		},

		/**
       * class for the play button
       */
		playButtonClass:{
			default: null
		},

		/**
       * style for the play button
       */
		playButtonStyle:{
			default: null
		},

		/**
       * class for the volume button
       */
		volumeButtonClass:{
			default: null
		},

		/**
       * style for the volume button
       */
		volumeButtonStyle:{
			default: null
		},

		/**
       * class for the timer
       */
		timerClass:{
			default: 'timer'
		},

		/**
       * style for the timer
       */
		timerStyle:{
			default: null
		},

		/**
       * class for the fullscreen button
       */
		fullscreenButtonClass:{
			default: null
		},

		/**
       * style for the fullscreen button
       */
		fullscreenButtonStyle:{
			default: null
		},

		/**
       * style for the controls bar
       */
		controlsStyle: {
			default: undefined
		}
	},

	data () {
		return {
			showSound: false,
			playing: false,
			showControlsInternal: false,
			started: false,
			time: 0,
			duration: 0,
			volumeInternal: 1,
			fullscreenInternal: false
		}
	},

	watch: {
		value(after, before) {
			if (after && this.$refs.video.paused) {
				this.$refs.video.play()
			} else if (!after && !this.$refs.video.paused) {
				this.$refs.video.pause()
			}
		},

		volume(after, before) {
			this.$refs.video.volume = this.volumeComputed
		},
	},

	methods: {
		
		/**
       * @private
       */
		atEnded () {
			if (typeof this.src != 'string') {
				/**
				 * if src is a array, at the end of the video emits the new src-index
				 */
				this.$emit('update:srcIndex', this.srcIndex + 1)
			}
		},

		/**
       * @private
       */
		atFullscreen () {
			if (!this.fullscreenComputed) {
				if (this.$el.requestFullscreen) {
					this.$el.requestFullscreen()
	
				} else if (this.$el.mozRequestFullScreen) { /* Firefox */
					this.$el.mozRequestFullScreen()
	
				} else if (this.$el.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
					this.$el.webkitRequestFullscreen()
	
				} else if (this.$el.msRequestFullscreen) { /* IE/Edge */
					this.$el.msRequestFullscreen()
				}
				this.fullscreenComputed = true
				
				/**
				 * emited when players go fullscreen
				 */
				this.$emit('fullscreen', true)
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.mozCancelFullScreen) { /* Firefox */
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
					document.webkitExitFullscreen();
				} else if (document.msExitFullscreen) { /* IE/Edge */
					document.msExitFullscreen();
				}

				this.fullscreenComputed = false
				
				/**
				 * emited when players exits fullscreen
				 */
				this.$emit('fullscreen', false)
			}
		},

		/**
       * @private
       */
		atVolumechange () {
			this.volume = this.$refs.video.volume
		},

		/**
       * @private
       */
		atVolume () {
			this.showSound = !this.showSound
		},

		/**
       * @private
       */
		atCanplay () {
			this.duration = this.$refs.video.duration

			if (this.started && !this.checkPlaying()) this.$refs.video.play()
		},

		/**
       * @private
       */
		checkPlaying () {
			let result =  !!(this.$refs.video.currentTime > 0 && !this.$refs.video.paused && !this.$refs.video.ended && this.$refs.video.readyState > 2)

			return result
		},

		/**
       * @private
       */
		atTimeupdate () {
			this.time = this.$refs.video.currentTime
		},

		/**
       * @private
       */
		atPlayPause () {
			if (!this.playingComputed) this.$refs.video.play()
			else this.$refs.video.pause()
		},

		/**
       * @private
       */
		atMouseenter () {
			this.showControlsComputed = true
		},

		/**
       * @private
       */
		atMouseleave () {
			this.showControlsComputed = false
		},

		/**
       * @private
       */
		play () {
			this.playingComputed = true
			this.started = true
		},

		/**
       * @private
       */
		pause () {
			if (this.time == 0) return
			this.playingComputed = false
		}
	},

	computed: {
		/**
       * @private
       */
	  	timerControlWidth () {
			if (!this.showSound) return 'calc(100% - 156px)'

			return 'calc(100% - 154px - 60px)'
		},

		/**
       * @private
       */
		controlsStyleComputed() {
			if (this.controlsStyle != undefined) return this.controlsStyle
			
			let result = ''

			return result
		},

		/**
       * @private
       */
		volumeComputed: {
			get () {
				if (this.volume != undefined && typeof this.volume == 'number') return this.volume

				return this.volumeInternal
			},

			set (e) {
				this.$refs.video.volume = e

				if (this.volume != undefined) {
					/**
					 * emited when volume is changed
					 */
					this.$emit('update:volume', e)
				} else {
					this.volumeInternal = e
				}
			}
		},

		/**
       * @private
       */
		showControlsComputed: {
			get () {
				if (this.controls != undefined) return this.controls

				return this.showControlsInternal
			},

			set (e) {
				if (this.controls != undefined) {

					/**
					 * emited when control bar is show/hidden
					 */
					this.$emit('update:controls', e)
				} else {
					this.showControlsInternal = e
				}
			}
		},

		/**
       * @private
       */
		playingComputed: {
			get () {
				if (this.value != undefined) return this.value

				return this.playing
			},

			set (e) {
				if (this.value != undefined) {
					this.$emit('input', e)
				} else {
					this.playing = e
				}
			}
		},

		/**
       * @private
       */
		fullscreenComputed: {
			get () {
				return this.fullscreenInternal
			},

			set (e) {
				this.fullscreenInternal = e
			}
		},

		/**
       * @private
       */
		srcComputed () {
			if (typeof this.src == 'string') return this.src

			return this.src[this.srcIndex]
		},

		/**
       * @private
       */
		showControlsIf () {
			return (this.showControlsComputed || !this.playingComputed) && this.started 
		},

		/**
       * @private
       */
		minutesDuration () {
			let minutes = Math.floor(this.duration / 60);

			let seconds = Math.floor(this.duration - minutes * 60);
			seconds = String(seconds).padStart(2,0)

			return `${minutes}:${seconds}`
		},

		/**
       * @private
       */
		minutesTime () {
			let minutes = Math.floor(this.time / 60);

			let seconds = Math.floor(this.time - minutes * 60);
			seconds = String(seconds).padStart(2,0)
			
			return `${minutes}:${seconds}`
		},

		/**
       * @private
       */
		timeComputed: {
			get () {
				return this.time
			},

			set (e) {
				this.$refs.video.currentTime = e
			},
		},
	}
}
</script>

<style scoped>
.transparent {
	opacity: 0
}

.placeholder {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.vue-video-player video {
	width: 100%;
	height: 100%;
}

.vue-video-player {
	position: relative;
	font-size:0; 
	color: white;
	display: block;
}

.timer {
	width: auto
}

.vue-video-center {
	color: white;
	bottom:0;
	left:0;
	right:0;
	top:0;
	justify-content: center;
	align-items: center;
	display: flex;
	font-size: 12px;
	position: absolute;
}

</style>

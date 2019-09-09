<template>
  <div id="app">
    <vue-player 
		src="http://techslides.com/demos/sample-videos/small.mp4"
		videoPlaceholderSrc="http://techslides.com/demos/sample-videos/small.mp4"
		poster="https://via.placeholder.com/150"
		title="this is a title 5"
		playsinline
		preview-on-mouse
		v-model="playing"
	>
    </vue-player>

		<ul>
			<li>
				src-index: {{srcIndex}}
			</li>

			<li @click="playing = !playing">
				playing: {{playing}}
			</li>

			<li @click="controls = !controls">
				controls: {{controls}}
			</li>

			<li @click="fullscreen = !fullscreen">
				fullscreen: {{fullscreen}}
			</li>

			<li>
				volume: <input type="range" min="0" max="1" step="0.01" :value="volume" @input="setVolume" /> {{volume}}
			</li>
		</ul>
  </div>
</template>

<script>
import vuePlayer from './components/player.vue'

export default {
  name: 'app',

  components: {
	vuePlayer
  },

  data () {
		return {
			srcIndex: 0,
			playing: false,
			controls: false,
			fullscreen: false,
			volume: 0
		}
  },

  methods: {
		setVolume (e) {
			this.volume = Number(e.target.value)
		}
  }
}
</script>

<style>
body {
  margin: 10px;
  max-width: 50vw;
}

#app {
  margin: 0;
}
</style>

<template>
  <div id="app">
    <vue-player 
		:src="[
			'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
			'http://techslides.com/demos/sample-videos/small.mp4'
		]"
		poster="https://via.placeholder.com/150"
		:src-index.sync="srcIndex"
		:controls.sync="controls"
		@fullscreen="fullscreen = $event"
		:volume.sync="volume"
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
	margin: 10px
};

#app {
  margin: 0;
}
</style>

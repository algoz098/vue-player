<template>
	<div id="app">
		<div class="columns is-centered">
			<div class="column is-half">
				<intro />
				
				<div class="container">
					<h2 class="title ">Instalation</h2>

					<p class="subtitle">
						Click <a href="https://github.com/algoz098/vue-player#usage--guide">here</a>
					</p>
				</div>

				<basic-player />

				<minimum-player />

				<preview-player />
				
				<poster-player />
				
				<div class="container">
					<h2 class="title ">More</h2>

					<p class="subtitle">
						For more details, events, and props see <a href="https://github.com/algoz098/vue-player/blob/master/PLAYER.md">this</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import intro from './showcase/intro.vue'
import basicPlayer from './showcase/basicPlayer.vue'
import minimumPlayer from './showcase/minimumPlayer.vue'
import previewPlayer from './showcase/previewPlayer.vue'
import posterPlayer from './showcase/posterPlayer.vue'

export default {
  name: 'app',

  components: {
	intro,
	basicPlayer,
	minimumPlayer,
	previewPlayer,
	posterPlayer
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
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
body {
	margin-top: 0;
	margin-left: 17vw;
	margin-right: 17vw;
	font-family: 'Montserrat', sans-serif;
}

.title {
	margin-bottom: 5px;
	font-size: 2.5rem;
}

.subtitle {
	margin-top: 0;
	font-size: 1.5rem;
	max-width: 900px;
}

.flex {
	display: flex;
}

.flex > div:not(:last-child) {
	padding-right: 10px;
	padding-left: 0px;
}

.flex > div:not(:first-child) {
	padding-right: 0px;
	padding-left: 10px;
}

.highlight {
	background-color: rgb(209, 209, 209);
	padding: 5px 10px;
	border-radius: 5px;
}
</style>

<template>
	<section class="section">
		<div class="vue-video-player-container">
			<h2 class="title ">Basic setup</h2>

			<p class="subtitle">
				With a `poster` image showing and alterates to a video teaser (video-placeholder-src) when the mouse is over and a little title
			</p>
		</div>
			
		<div class="flex">
			<div>
				<h3 class="subtitle">Example</h3>

				<vue-player 
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					video-placeholder-src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
					title="I'm a title for this video"
					playsinline
					preview-on-mouse
				>
				</vue-player>
			</div>

			<div>
				<h3 class="subtitle">Code</h3>

				<div class="highlight">
					<pre><code class="language-html" data-lang="html" >{{html}}</code></pre>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import vuePlayer from '../components/player.vue'

export default {
	components: {
		vuePlayer,
	},

	data () {
		return {
			html: `<vue-player 
	src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
	video-placeholder-src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
	poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
	title="I'm a title for this video"
	playsinline
	preview-on-mouse
></vue-player>`
		}
	}
}
</script>
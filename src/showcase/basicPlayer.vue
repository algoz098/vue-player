<template>
	<section class="section">
		<div class="vue-video-player-container">
			<h2 class="title ">Basic setup</h2>

			<p class="subtitle">
				With a `poster` image showing it changes to a video teaser (v-slot:video-placeholder-sources) when the mouse is over the component.
				It also sets a small title.
			</p>
			<p>
				If only a single source is required for the placeholder you don't need to use the slot and instead can set the `video-placeholder-src` property.
			</p>
			<p>
				In the same way, for the main video if a single source is required you don't need to use the slot and can set the `src` property.
				With the `v-slot:sources` and `v-slot:video-placeholder-sources` you can support devices with different codec
				preferences.
			</p>
		</div>
			
		<div class="flex">
			<div>
				<h3 class="subtitle">Example</h3>

				<vue-player
					poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
					title="I'm a title for this video"
					playsinline
					preview-on-mouse
				>
					<template v-slot:sources>
						<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
					</template>
					<template v-slot:video-placeholder-sources>
						<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
					</template>
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
\tposter="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
\ttitle="I'm a title for this video"
\ttplaysinline
\tpreview-on-mouse
\t>
\t\t<template v-slot:sources>
\t\t\t<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
\t\t</template>
\t\t<template v-slot:video-placeholder-sources>
\t\t\t<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
\t\t</template>
</vue-player>`
		}
	}
}
</script>
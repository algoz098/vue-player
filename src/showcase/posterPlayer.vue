<template>
	<section class="section">
		<div class="container">
			<h2 class="title ">Poster video setup</h2>

			<p class="subtitle">
				This will show a image util the player starts
			</p>
		</div>
			
		<div class="flex">
			<div>
				<h3 class="subtitle">Example</h3>

				<vue-player 
					src="http://techslides.com/demos/sample-videos/small.mp4"
					poster="https://dummyimage.com/600x400/000/fff&text=just+a+image"
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
	src="http://techslides.com/demos/sample-videos/small.mp4"
	poster="https://dummyimage.com/600x400/000/fff&text=just+a+image"
></vue-player>`
		}
	}
}
</script>
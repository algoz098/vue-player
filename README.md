
# vue-player

![](ss.png)

 -  **author** - Artur Sena, forked by Adam Martin

-  **license** - MIT

  

## Intro

This is an html5 video component made in VueJS to quickly add videos with placeholders and intros.
- This has been forked from [this](https://github.com/algoz098/vue-player) repo.  
- Diff:  Added events that emit on video play & pause.

### Features
- Has `poster` to show a image placeholder before video.
- Has `video-placeholder-src` to autoplay a video without sound.
- Has `preview-on-mouse` add option to alter between poster and video-preview (like youtube).
- Events telling what's happening (emitted on video play/pause).
- full control of the player.
- 100% vue.js
- no third parties js libs.
  
### Examples
https://algoz098.github.io/vue-player/

## Usage & Guide

Install it
```
npm i --save @cubanmercury/vue-player
```

Then you import it where you need to use it.
```
import vuePlayer  from  '@cubanmercury/vue-player'
```
Now, just tell vue to use it:
```
Vue.component(vuePlayer)
```
Or inside a ´.vue´ file:
```
<script>
	export  default {
		components: {
			vuePlayer
		}
	}
</script>
```
Now, just use it:
```
<vue-player src="http://techslides.com/demos/sample-videos/small.mp4" poster="https://via.placeholder.com/150" title="this is a title" v-model="playing"></vue-player>
```
  You can see more information [here](https://github.com/cubanmercury/vue-player/blob/master/PLAYER.md)
  

## Contribution
All contribution are wellcome, and every pull request will be seen. Thank you for your time!

# vue-player

![](ss.png)

 -  **author** - Artur Sena

-  **license** - MIT

  

## Intro

This is a html5 video component made in VueJS with to quickly add videos with placeholders and intros.

### Features
- Has `poster` to show a image placeholder before video
- Has `video-placeholder-src` to autoplay a video without sound
- Has `preview-on-mouse` add option to alter between poster and video-preview (youtube like)
- Events telling what's happening
- full control of the player
- 100% vue
- no third parties js libs
  
### Examples
https://algoz098.github.io/vue-player/

## Usage & Guide

Install it
```
npm i --save @algoz098/vue-player
```

Then you import it where you need to use it.
```
import vuePlayer  from  '@algoz098/vue-player'
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
  You can see more information [here](https://github.com/algoz098/vue-player/blob/master/PLAYER.md)
  

## Contribution
All contribution are wellcome, and every pull request will be seen. Thank you for your time!
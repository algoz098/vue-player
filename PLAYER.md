# vue-player 

A must have html5 video player made in VueJS 

- **author** - Artur  Sena 

## slots 

- `controls` Use this slot to replace the controls 

## props 

- `v-model` ***String*** (*optional*) `default: null` 

  Set title.
  It appears on the overlay 

- `v-model` ***Boolean*** (*optional*) `default: undefined` 

  Set play/pause.
  It automatically set the video the right state 

- `src` ***String|Array*** (*required*) 

  Define the source for the video tag.
  if array uses the src-index to pick one 

- `src-index` ***ArrayExpression*** (*optional*) 

  Use ONLY if src is a array
  set the index of the src 

- `autoplay` ***Boolean*** (*optional*) `default: false` 

  set the video to autoplay as it's loaded 

- `preview-on-mouse` ***Boolean*** (*optional*) `default: false` 

  show video preview if mouse hover 

- `playsinline` ***Boolean*** (*optional*) `default: false` 

  set the video to playsinline as it's loaded 

- `poster` ***String*** (*optional*) 

  set a image placeholder util the video start to play once 

- `video-placeholder-src` ***String*** (*optional*) 

  if you want a video teaser you can use this, will be played with-out sound 

- `volume` ***Number*** (*optional*) `default: undefined` 

  define the volume of the player
  values from 0 util 1 

- `controls` ***Boolean*** (*optional*) `default: undefined` 

  show/hide the controls 

- `overlay-class` ***[object Object]*** (*optional*) `default: 'vue-video-center'` 

  class for the overlay 

- `controls-class` ***[object Object]*** (*optional*) `default: 'vue-video-player-controls'` 

  class for the controls bar 

- `play-button-class` ***[object Object]*** (*optional*) `default: null` 

  class for the play button 

- `play-button-style` ***[object Object]*** (*optional*) `default: null` 

  style for the play button 

- `volume-button-class` ***[object Object]*** (*optional*) `default: null` 

  class for the volume button 

- `volume-button-style` ***[object Object]*** (*optional*) `default: null` 

  style for the volume button 

- `timer-class` ***[object Object]*** (*optional*) `default: 'timer'` 

  class for the timer 

- `timer-style` ***[object Object]*** (*optional*) `default: null` 

  style for the timer 

- `fullscreen-button-class` ***[object Object]*** (*optional*) `default: 'fullscreen-button-class'` 

  class for the fullscreen button 

- `fullscreen-button-style` ***[object Object]*** (*optional*) `default: null` 

  style for the fullscreen button 

- `controls-style` ***[object Object]*** (*optional*) `default: undefined` 

  style for the controls bar 

## data 

- `showSound` 

**initial value:** `false` 

- `mouseover` 

**initial value:** `false` 

- `playing` 

**initial value:** `false` 

- `showControlsInternal` 

**initial value:** `false` 

- `started` 

**initial value:** `false` 

- `time` 

**initial value:** `0` 

- `duration` 

**initial value:** `0` 

- `volumeInternal` 

**initial value:** `1` 

- `fullscreenInternal` 

**initial value:** `false` 

## events 

- `update:srcIndex` 

  if src is a array, at the end of the video emits the new src-index 

- `fullscreen` 

  emited when players go fullscreen 


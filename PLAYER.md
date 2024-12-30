# vue-player

A must have html5 video player made in VueJS

- **author** - Artur Sena

## slots

- `controls` Use this slot to replace the controls
- `sources` Use this slot to add `<source>` elements to the video player, as well as fallbacks. When this slot is used the `src` property is ignored. See [<source> docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
- `video-placeholder-sources` Use this slot to add `<source>` elements to the video placeholder player, as well as fallbacks. When this slot is used the `src` property is ignored. See [<source> docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)

## props

- `v-model` **_String_** (_optional_) `default: null`

  Set title.
  It appears on the overlay

- `v-model` **_Boolean_** (_optional_) `default: undefined`

  Set play/pause.
  It automatically set the video the right state

- `src` **_String|Array_** (_required_)

  Define the source for the video tag.
  if array uses the src-index to pick one. Ignored if sources slot used.

- `src-index` **_ArrayExpression_** (_optional_)

  Use ONLY if src is a array
  set the index of the src

- `autoplay` **_Boolean_** (_optional_) `default: false`

  set the video to autoplay as it's loaded

- `preview-on-mouse` **_Boolean_** (_optional_) `default: false`

  show video preview if mouse hover

- `playsinline` **_Boolean_** (_optional_) `default: false`

  set the video to playsinline as it's loaded

- `poster` **_String_** (_optional_)

  set a image placeholder util the video start to play once

- `video-placeholder-src` **_String_** (_optional_)

  if you want a video teaser you can use this, will be played without sound. Ignored if `video-placeholder-source` slot is used.

- `volume` **_Number_** (_optional_) `default: undefined`

  define the volume of the player
  values from 0 util 1

- `controls` **_Boolean_** (_optional_) `default: undefined`

  show/hide the controls

- `overlay-class` **_[object Object]_** (_optional_) `default: 'vue-video-center'`

  class for the overlay

- `controls-class` **_[object Object]_** (_optional_) `default: 'vue-video-player-controls'`

  class for the controls bar

- `play-button-class` **_[object Object]_** (_optional_) `default: null`

  class for the play button

- `play-button-style` **_[object Object]_** (_optional_) `default: null`

  style for the play button

- `volume-button-class` **_[object Object]_** (_optional_) `default: null`

  class for the volume button

- `volume-button-style` **_[object Object]_** (_optional_) `default: null`

  style for the volume button

- `timer-class` **_[object Object]_** (_optional_) `default: 'timer'`

  class for the timer

- `timer-style` **_[object Object]_** (_optional_) `default: null`

  style for the timer

- `fullscreen-button-class` **_[object Object]_** (_optional_) `default: 'fullscreen-button-class'`

  class for the fullscreen button

- `fullscreen-button-style` **_[object Object]_** (_optional_) `default: null`

  style for the fullscreen button

- `controls-style` **_[object Object]_** (_optional_) `default: undefined`

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

- `update:play`

  emited when players update the state of play

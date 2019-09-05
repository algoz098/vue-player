<template>
	<input
		:class="theClass"
		type="range"
		step="any" 
		v-bind="$attrs"
		:value="value"
		@input="atInput"
		:style="style"
		v-if="show"
	/>
</template>

<script>

export default {
	name: 'vue-player-range',

	props: {
		value: null,
		width: null,
		show: Boolean,
	},

	methods: {
		atInput (e) {
			this.$emit('input', Number(e.target.value))
		}
	},

	computed: {
		style () {
			if (this.$attrs.style) return this.$attrs.style

			let result = {}

			if (this.width) result.width = this.width

			return result
		},

		theClass () {
			if (this.$attrs.class) return this.$attrs.class

			return 'vue-player-range'
		}
	}
}
</script>

<style scoped>

input[type=range].vue-player-range {
    padding-top: 7px;
	vertical-align: bottom;
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type=range].vue-player-range::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range" i].vue-player-range {
	margin: 0;
}

input[type=range].vue-player-range:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type=range].vue-player-range::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent; 
  border-color: transparent;
  color: transparent;
}

/* Special styling for WebKit/Blink */
input[type=range].vue-player-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  height:19px;
  width: 5px;
  margin-top: -7px;
  border-radius: 0;
  background: white;
  cursor: pointer;
}

/* All the same stuff for Firefox */
input[type=range].vue-player-range::-moz-range-thumb {
  height:19px;
  width: 5px;
  margin-top: -7px;
  border-radius: 0;
  background: white;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type=range].vue-player-range::-ms-thumb {
  height:19px;
  width: 5px;
  margin-top: -7px;
  border-radius: 0;
  background: white;
  cursor: pointer;
}

input[type=range].vue-player-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  margin-bottom: 7px;
  cursor: pointer;
  background: white;
  border-radius: 1.3px;
  border: 0.2px solid white;
}

input[type=range].vue-player-range:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}

input[type=range].vue-player-range::-moz-range-track {
  width: 100%;
  height: 5px;
  margin-bottom: 7px;
  cursor: pointer;
  background: white;
  border-radius: 1.3px;
  border: 0.2px solid white;
}

input[type=range].vue-player-range::-ms-track {
  width: 100%;
  height: 5px;
  margin-bottom: 7px;
  cursor: pointer;
  background: white;
  border-radius: 1.3px;
  border: 0.2px solid white;
}
input[type=range].vue-player-range::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range].vue-player-range:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range].vue-player-range::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range].vue-player-range:focus::-ms-fill-upper {
  background: #367ebd;
}

</style>

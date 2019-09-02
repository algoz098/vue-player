import { shallowMount } from '@vue/test-utils'
import Player from '@/components/Player.vue'
import pButton from '@/components/button.vue'

describe('Player.vue', () => {
  it('renders props.src when passed', () => {
	const src = 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'

	const wrapper = shallowMount(Player, {
      propsData: { src }
	})

    expect(wrapper.html()).toContain(src)
    expect(wrapper.props().src).toMatch(src)
  })

  it('renders props.src when passed', () => {
	const src = [ '0', '1']
	const srcIndex = 1

	const wrapper = shallowMount(Player, {
      propsData: { src, srcIndex }
	})

    expect(wrapper.html()).toContain(src[srcIndex])
  })

  it('renders props.autoplay when passed', () => {
	const autoplay = true

	const wrapper = shallowMount(Player, {
      propsData: { src: '', autoplay }
	})

    expect(wrapper.html()).toContain('autoplay')
  })

  it('renders props.poster when passed', () => {
	const poster = 'http://www.test.com'

	const wrapper = shallowMount(Player, {
      propsData: { src: '', poster }
	})

    expect(wrapper.html()).toContain(poster)
  })

  it('renders props.video-placeholder-src when passed', () => {
	const videoPlaceholderSrc = 'http://www.test.com'

	const wrapper = shallowMount(Player, {
      propsData: { src: '', videoPlaceholderSrc }
	})

    expect(wrapper.html()).toContain(videoPlaceholderSrc)
  })

  it('renders props.volume when passed', () => {
	const volume  = 0.5

	const wrapper = shallowMount(Player, {
		propsData: { src: '', volume }
	})

    expect(wrapper.props().volume).toBe(volume)
  })

  it('renders props.controls when passed', () => {
	const controls  = true

	const wrapper = shallowMount(Player, {
		propsData: { src: '', controls }
	})

    expect(wrapper.props().controls).toBe(controls)
  })

  it('renders props.overlayClass when passed', () => {
	const overlayClass  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', overlayClass }
	})

    expect(wrapper.props().overlayClass).toBe(overlayClass)
  })

  it('renders props.controlsClass when passed', () => {
	const controlsClass  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', controlsClass }
	})

    expect(wrapper.props().controlsClass).toBe(controlsClass)
  })

  it('renders props.playButtonClass when passed', () => {
	const playButtonClass  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', playButtonClass }
	})

    expect(wrapper.props().playButtonClass).toBe(playButtonClass)
  })

  it('renders props.playButtonStyle when passed', () => {
	const playButtonStyle  = 'background-color: black'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', playButtonStyle }
	})

    expect(wrapper.props().playButtonStyle).toBe(playButtonStyle)
  })

  it('renders props.volumeButtonClass when passed', () => {
	const volumeButtonClass  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', volumeButtonClass }
	})

    expect(wrapper.props().volumeButtonClass).toBe(volumeButtonClass)
  })

  it('renders props.volumeButtonStyle when passed', () => {
	const volumeButtonStyle  = 'background-color: black'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', volumeButtonStyle }
	})

    expect(wrapper.props().volumeButtonStyle).toBe(volumeButtonStyle)
  })

  it('renders props.timerClass when passed', () => {
	const timerClass  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', timerClass }
	})

    expect(wrapper.props().timerClass).toBe(timerClass)
  })

  it('renders props.timerStyle when passed', () => {
	const timerStyle  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', timerStyle }
	})

    expect(wrapper.props().timerStyle).toBe(timerStyle)
  })

  it('renders props.fullscreenButtonClass when passed', () => {
	const fullscreenButtonClass  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', fullscreenButtonClass }
	})

    expect(wrapper.props().fullscreenButtonClass).toBe(fullscreenButtonClass)
  })

  it('renders props.fullscreenButtonStyle when passed', () => {
	const fullscreenButtonStyle  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', fullscreenButtonStyle }
	})

    expect(wrapper.props().fullscreenButtonStyle).toBe(fullscreenButtonStyle)
  })

  it('renders props.controlsStyle when passed', () => {
	const controlsStyle  = 'a-class-exists'

	const wrapper = shallowMount(Player, {
		propsData: { src: '', controlsStyle }
	})

    expect(wrapper.props().controlsStyle).toBe(controlsStyle)
  })

  it('event fullscreen is emmited on click', () => {
	const wrapper = shallowMount(Player, {
		propsData: { src: '' }
	})
	
	wrapper.findAll(pButton).at(4).vm.$emit('click')
	
    expect(wrapper.emitted('fullscreen').flat()[0]).toBe(true)
  })

  it('event update:srcIndex is emmited on ended', () => {
	const srcIndex = 1
	const wrapper = shallowMount(Player, {
		propsData: { src: ['', ''],  srcIndex }
	})
	
	wrapper.find('video').trigger('ended')

	expect(wrapper.emitted('update:srcIndex').flat()[0]).toBe(2)
  })

  it('slot poster renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { poster: slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot overlay renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { overlay: slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot controls renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { controls: slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot play renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { play: slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot playLabel renders', () => {
	const slot = `<span id="slot">test</span>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { 'play-label': slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot volume renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { volume: slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot volumeLabel renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { 'volume-label': slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot volume-control-input renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { 'volume-control-input': slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot timer  renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { 'timer': slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot timer-control  renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { 'timer-control': slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })

  it('slot fullscreen-label renders', () => {
	const slot = `<div id="slot">test</div>`

	const wrapper = shallowMount(Player, {
		propsData: { src: '' },
		slots: { 'fullscreen-label': slot }
	})

	expect(wrapper.html()).toContain('id="slot"')
  })
})

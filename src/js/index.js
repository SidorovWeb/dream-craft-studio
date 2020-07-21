// import 'core-js/fn/object/assign'
import './import/polyfill'
import './import/svg4everybody'
import './import/lazyLoad'
import './import/objectFitImages'
import './import/dragstart'
import './modules/select'
import './modules/scroll-anchors'
import iMask from './modules/IMask'
import parallax from './modules/parallax'
import modals from './modules/modal'
import radnomElement from './modules/random-element'
import cssVars from 'css-vars-ponyfill'
import hamburger from '../blocks/components/hamburger/hamburger'
import stickSidebarEI11 from './modules/stickySidebarEI11'
import swiperSlider from './modules/sliderSwiper'
import yMap from './modules/yandexMap'
import stuckyHeader from './modules/stuckyHeader'
import formsValidate from './modules/formsValidate'

window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-extra-semi
  cssVars({
    // Options...
  })

  stuckyHeader()

  modals()

  hamburger()
  parallax()
  radnomElement()
  stickSidebarEI11()
  swiperSlider()
  iMask()

  formsValidate()
})

window.onload = function () {
  yMap()
}

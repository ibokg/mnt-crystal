import './src/scss/main.scss'
import Splide from '@splidejs/splide'
import Accordion from './src/js/accordion'

document.addEventListener( 'DOMContentLoaded', () => {
  if (document.querySelector('.js-testimonials-slider')) {
    new Splide('.js-testimonials-slider', {
      pagination: false
    }).mount()
  }

  document.querySelectorAll('details').forEach((el) => {
    new Accordion(el)
  })
})

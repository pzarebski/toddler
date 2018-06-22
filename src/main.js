import Vue from 'vue'
import bootstrap from 'bootstrap'
import jquery from 'jquery'
import easing from  'easing'
import slider from './utils/jquery.flexslider.js'
import uitotop from './utils/uitotop.js'
import responsiveslides from 'responsive-slides'

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

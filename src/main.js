import Vue from 'vue'
import bootstrap from 'bootstrap'
import jquery from 'jquery'
import easing from  'easing'
import slider from './utils/jquery.flexslider.js'
import uitotop from './utils/uitotop.js'
import responsiveslides from 'responsive-slides'

import './assets/css/bootstrap.css'
import './assets/css/style.css'

import App from './App.vue'

import appheader from './components/header.vue'
import banner from './components/banner.vue'
import about from './components/about.vue'
import services from './components/services.vue'
import essentials from './components/essentials.vue'
import blog from './components/blog.vue'
import newsletter from './components/newsletter.vue'
import contact from './components/contact.vue'
import map from './components/map.vue'
import appfooter from './components/footer.vue'

Vue.component('appheader', appheader)
Vue.component('banner', banner)
Vue.component('about', about)
Vue.component('services', services)
Vue.component('essentials', essentials)
Vue.component('blog', blog)
Vue.component('newsletter', newsletter)
Vue.component('contact', contact)
Vue.component('map', map)
Vue.component('appfooter', appfooter)


new Vue({
  el: '#app',
  render: h => h(App)
})

$(document).ready(function(){
	toggle_nav_container();
	gotoByScroll();

	// Slideshow 4
  $("#slider4").responsiveSlides({
    auto: true,
    pager:true,
    nav:true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
	});
	
	$('.flexslider').flexslider({
		animation: "slide",
		start: function(slider){
			$('body').removeClass('loading');
		}
		});

		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});

		/*
				var defaults = {
				containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
				};
		*/

		$().UItoTop({ easingType: 'easeOutQuart' });
});

var toggle_nav_container = function () {
	var $toggleButton = $('#toggle_m_nav');
	var $navContainer = $('#m_nav_container');
	var $menuButton = $('#m_nav_menu')
	var $menuButtonBars = $('.m_nav_ham');
	var $wrapper = $('#wrapper');

	// toggle the container on click of button (can be remapped to $menuButton)
	$toggleButton.on("click", function(){

		// declare a local variable for the window width
		var $viewportWidth = $(window).width();

		// if statement to determine whether the nav container is already toggled or not
		if($navContainer.is(':hidden'))
		{	
			$wrapper.removeClass('closed_wrapper');
			$wrapper.addClass("open_wrapper");
			$navContainer.slideDown(200).addClass('container_open').css("z-index", "2");
			// $(window).scrollTop(0);
			$menuButtonBars.removeClass('button_closed');
			$menuButtonBars.addClass('button_open');
			$("#m_ham_1").addClass("m_nav_ham_1_open");
			$("#m_ham_2").addClass("m_nav_ham_2_open");
			$("#m_ham_3").addClass("m_nav_ham_3_open");

		}
		else
		{
			$navContainer.css("z-index", "0").removeClass('container_open').slideUp(200)
			$menuButtonBars.removeClass('button_open')
			$menuButtonBars.addClass('button_closed')
			$wrapper.removeClass('open_wrapper')
			$wrapper.addClass("closed_wrapper")
			$("#m_ham_1").removeClass("m_nav_ham_1_open");
			$("#m_ham_2").removeClass("m_nav_ham_2_open");
			$("#m_ham_3").removeClass("m_nav_ham_3_open");

		}
	});
}
// Function that takes the href value of links in the navbar and then scrolls 
//the div on the page whose ID matches said value. This only works if you use 
//a consistent naming scheme for the navbar anchors and div IDs

var gotoByScroll = function (){
	$(".m_nav_item a").on("click", function(e) {		
		$('html,body').animate({
   			scrollTop: $($(this).attr("href")).offset().top - 50
		}, "slow");
	});
}
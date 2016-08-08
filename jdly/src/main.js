require('./assets/normalize.css');

import Vue from 'vue';
import App from './App';
import store from '../vuex/store';
import vueResource from 'vue-resource';

Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({
	store, // 注入到所有子组件
	el: 'body',
	components: { App }
});

// 全屏
function fullScreen(){
	const de = document.documentElement;
	if (de.requestFullscreen) {
	    de.requestFullscreen();
	} else if (de.mozRequestFullScreen) {
	    de.mozRequestFullScreen();
	} else if (de.webkitRequestFullScreen) {
	    de.webkitRequestFullScreen();
	}
}

// document.addEventListener('touchstart', fullScreen);
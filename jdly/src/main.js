require('./assets/normalize.css');

import Vue from 'vue';
import App from './App';
import vueResource from 'vue-resource';
import store from './vuex/store';

Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({
	store,
  	el: 'body',
  	components: { App }
});

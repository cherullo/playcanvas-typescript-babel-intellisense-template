import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.config.productionTip = false

const elem = document.createElement('div');
elem.id = 'app';
document.body.appendChild(elem);
new Vue({
	render: h => h(HelloWorld)
}).$mount('#app');
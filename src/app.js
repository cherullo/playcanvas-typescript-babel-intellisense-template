import Vue from 'vue';

Vue.config.productionTip = false

const elem = document.createElement('div');
elem.id = 'app';
document.body.appendChild(elem);
new Vue({
	render: h => h(require('./components/HelloWorld.vue'))
}).$mount('#app');
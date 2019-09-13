import Vue from 'vue'
import wrap from '@vue/web-component-wrapper';
import HelloWorld from './components/HelloWorld.vue';
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

const WrappedElement = wrap(Vue, HelloWorld);

window.customElements.define('wc-three', WrappedElement);
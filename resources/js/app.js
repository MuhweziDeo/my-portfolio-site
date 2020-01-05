require('./website/bootstrap');
import Vue from "vue";
import Vuetify from "vuetify";
import router from "./website/routes";
import App from "./website/components/App";
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css';
import VueAgile from 'vue-agile'

Vue.use(VueAgile)
Vue.use(Vuetify);
Vue.use(VueMaterial);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
export default app;

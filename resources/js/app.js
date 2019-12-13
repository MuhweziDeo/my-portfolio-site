require('./bootstrap');
import Vue from "vue";
import Vuetify from "vuetify";
import router from "./routes";
import App from "./components/App";
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css';


Vue.use(Vuetify);
Vue.use(VueMaterial);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
export default app;
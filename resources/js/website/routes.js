import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/pages/Home/index";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        }
    ],
});

export default router;
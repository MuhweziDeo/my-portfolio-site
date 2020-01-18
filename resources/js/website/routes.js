import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        }
    ],
});

export default router;

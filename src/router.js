import VueRouter from "vue-router";
import Main from "@/components/pages/Main";
import Vue from "vue";
import Download from "@/components/pages/Download";
import GettingStarted from "@/components/pages/GettingStarted";

Vue.use(VueRouter)
const routes=[
    { path: '/' , component: Main },
    { path: '/download' , component: Download },
    { path: '/start' , component: GettingStarted }

]
export default new VueRouter({
    mode: "history",
    routes
})

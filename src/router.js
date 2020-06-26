import VueRouter from "vue-router";
import Main from "@/components/pages/Main";
import Vue from "vue";
import Download from "@/components/pages/Download";
import GettingStarted from "@/components/pages/GettingStarted";
import Github from "@/components/Github";

Vue.use(VueRouter)
const routes=[
    { path: '/' , component: Main },
    { path: '/download' , component: Download },
    { path: '/start' , component: GettingStarted },
    { path: '/github',component:Github}

]
export default new VueRouter({
    mode: "history",
    routes
})

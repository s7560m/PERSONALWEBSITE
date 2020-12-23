import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Main";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import workinprogress from "../components/workinprogress";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: '/blog',
      name: "Blog",
      component: workinprogress
    }
  ]
})

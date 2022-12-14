import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import sourceData from "@/data.json";
const routes = [
  {
    path: "/",
    name: "Acceuil",
    component: Home,
  },
  {
    path: "/Apropos",
    name: "Apropos",
    component: About,
  },

  {
    path: '/login',
    name: "login",
    component: ()=>import("@/views/Login.vue")
  },
  {
    path:'/protected',
    name:'Protected',
    component: ()=> import("@/views/Protected.vue"),
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/invoices',
    name:'invoices',
    component: ()=> import("@/views/Invoices.vue"),
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),

    beforeEnter(to, from) {
      const exist = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id) && destination.slug === to.params.slug
      );

      if (!exist) {
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
      }
    },

    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to,from,savedPosition){
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve({top:0}),300)
    })
  }
});

router.beforeEach((to,from)=>{
  if(to.meta.requireAuth && !window.user){
    //some actions
    return {name:'login',query:{ redirect:to.fullPath}}
  }
})
export default router;

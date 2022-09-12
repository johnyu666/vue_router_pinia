import { createRouter, createWebHistory,createWebHashHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
window.isAuth=false;
const router = createRouter({
  history: createWebHistory("hr"),
  routes: [
    {path: "/",name: "home",component: HomeView},
    {path:"/login",name:"Login",component:()=>import("../views/LoginView.vue")},
    {
      path: "/users/:id",
      name:'users',component: () => import("../views/UserView.vue"),props:true,
      children:[
        {path: "",name:'userHome',
          component: ()=> import("../views/UserHomeView.vue")
        },
        {path: "detail",name:"userDetail",
          component: ()=> import("../views/UserDetailView.vue")
        },
        {path: "settings",name:"userSettings",
          component: ()=> import("../views/UserSettingsView.vue")
        },
      ]
    },
  ],
});

router.beforeEach((to, from, next) => {
  if(to.name!='Login') window.prev=to
  if (to.name !== 'Login' && !isAuth) next({ name: 'Login' })
  else next()
})
export default router;

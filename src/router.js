import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'idnex',
      component: ()=> import("./views/index.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import("./views/Login.vue")
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否存在 ele_login 这是在登录后产生的
  const isLogin = localStorage.ele_login ? true:false;
  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/login');
  }
});

export default router;
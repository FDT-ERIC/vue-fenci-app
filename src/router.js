import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'idnex',
      component: () => import("./views/index.vue"),
      children: [
        {
          path: '',
          redirect: '/home' // 重定向回主页
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/test',
          name: 'test',
          component: () => import('./views/Test.vue')
        },
        {
          path: '/me',
          name: 'me',
          component: () => import('./views/Me.vue')
        },
        {
          path: '/address',
          name: 'address',
          component: () => import('./views/Address.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("./views/Login.vue")
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否存在 sv_login 这是在登录后产生的
  const isLogin = localStorage.sv_login ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/login');
  }
});

export default router;
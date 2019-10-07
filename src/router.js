import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      redirect: '/app',
      // name: 'idnex',
      component: () => import("./views/index.vue"),
      children: [
        {
          path: '',
          redirect: '/app/home' // 重定向回主页
        },
        {
          path: '/app/home',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/app/test',
          name: 'test',
          component: () => import('./views/Test.vue')
        },
        {
          path: '/app/me',
          name: 'me',
          component: () => import('./views/Me.vue')
        },
        {
          path: '/app/address',
          name: 'address',
          component: () => import('./views/Address.vue')
        },
        {
          path: '/app/city',
          name: 'city',
          component: () => import('./views/City.vue')
        }
      ]
    },

    // 登录
    {
      path: '/app/login',
      name: 'login',
      component: () => import("./views/Login.vue")
    },

    // 分词
    {
      path: '/app/fenci',
      name: 'fenci',
      component: () => import("./views/fenci/Fenci.vue"),
      children: [
        {
          path: '/app/fenci/show',
          name: 'show',
          component: () => import("./views/fenci/subItems/Show.vue")
        },
        {
          path: '/app/fenci/help',
          name: 'help',
          component: () => import("./views/fenci/subItems/Help.vue")
        },
      ]
    },

    // POS词性
    {
      path: '/app/pos',
      name: 'fenci',
      component: () => import("./views/pos/POS.vue"),
      children: [
        {
          path: '/app/pos/show',
          name: 'show',
          component: () => import("./views/pos/subItems/Show.vue")
        },
        {
          path: '/app/pos/help',
          name: 'help',
          component: () => import("./views/pos/subItems/Help.vue")
        },
      ]
    },

    // NER 
    {
      path: '/app/ner',
      name: 'fenci',
      component: () => import("./views/ner/NER.vue"),
      children: [
        {
          path: '/app/ner/show',
          name: 'show',
          component: () => import("./views/ner/subItems/Show.vue")
        },
        {
          path: '/app/ner/help',
          name: 'help',
          component: () => import("./views/ner/subItems/Help.vue")
        },
      ]
    },

    // 情感分析
    {
      path: '/app/sentiAna',
      name: 'fenci',
      component: () => import("./views/sentiAna/SentiAna.vue"),
      children: [
        {
          path: '/app/sentiAna/show',
          name: 'show',
          component: () => import("./views/sentiAna/subItems/Show.vue")
        },
        {
          path: '/app/sentiAna/help',
          name: 'help',
          component: () => import("./views/sentiAna/subItems/Help.vue")
        },
      ]
    },

    // 文本分类
    {
      path: '/app/txtCla',
      name: 'fenci',
      component: () => import("./views/txtCla/TxtCla.vue"),
      children: [
        {
          path: '/app/txtCla/show',
          name: 'show',
          component: () => import("./views/txtCla/subItems/Show.vue")
        },
        {
          path: '/app/txtCla/help',
          name: 'help',
          component: () => import("./views/txtCla/subItems/Help.vue")
        },
      ]
    },
  ]
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   // 判断是否存在 sv_login 这是在登录后产生的
//   const isLogin = localStorage.sv_login ? true : false;
//   if (to.path == '/login') {
//     next();
//   } else {
//     // 是否在登录状态下
//     isLogin ? next() : next('/login');
//   }
// });

export default router;
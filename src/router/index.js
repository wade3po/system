import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "index" */ '../views/common/Layout.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import(/* webpackChunkName: "index" */ '../views/index/Index.vue'),
        meta: {
          title: "首页",
        },
      },
      {
        path: '/a',
        component: () => import(/* webpackChunkName: "a" */ '../views/common/404.vue'),
        meta: {
          title: "a",
        },
      },
      {
        path: '/b',
        component: () => import(/* webpackChunkName: "b" */ '../views/common/401.vue'),
        meta: {
          title: "b",
        },
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '../views/common/404.vue'),
    meta: {
      title: "404",
    },
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "401" */ '../views/common/401.vue'),
    meta: {
      title: "401",
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = to.meta.title;
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router

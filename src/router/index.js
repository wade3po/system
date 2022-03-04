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
        path: '/table',
        component: () => import(/* webpackChunkName: "index" */ '../views/element/Table.vue'),
        meta: {
          title: "表格",
        },
      },
      {
        path: '/upload',
        component: () => import(/* webpackChunkName: "upload" */ '../views/element/Upload.vue'),
        meta: {
          title: "上传",
        },
      },
      {
        path: '/form',
        component: () => import(/* webpackChunkName: "form" */ '../views/element/Form.vue'),
        meta: {
          title: "表单",
        },
      },
      {
        path: '/echarts',
        component: () => import(/* webpackChunkName: "echarts" */ '../views/element/Echarts.vue'),
        meta: {
          title: "echarts表格",
        },
      },
      {
        path: '/wangeditor',
        component: () => import(/* webpackChunkName: "wangeditor" */ '../views/plugin/WangEditor.vue'),
        meta: {
          title: "富文本编辑器",
        },
      },
      {
        path: '/compressimg',
        component: () => import(/* webpackChunkName: "compressimg" */ '../views/plugin/CompressImg.vue'),
        meta: {
          title: "压缩图片",
        },
      },
      {
        path: '/imageeditor',
        component: () => import(/* webpackChunkName: "imageeditor" */ '../views/plugin/ImageEditor.vue'),
        meta: {
          title: "图片编辑器",
        },
      },{
        path: '/smalldirective',
        component: () => import(/* webpackChunkName: "smalldirective" */ '../views/directive/SmallDirective.vue'),
        meta: {
          title: "常用小指令",
        },
      },{
        path: '/dragEdit',
        component: () => import(/* webpackChunkName: "dragEdit" */ '../views/plugin/DragEdit.vue'),
        meta: {
          title: "可视化拖拽",
        },
      },{
        path: '/qrcode',
        component: () => import(/* webpackChunkName: "qrcode" */ '../views/plugin/qrcode.vue'),
        meta: {
          title: "二维码生成",
        },
      },
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
    path: '*',
    redirect: '/404'
  },
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

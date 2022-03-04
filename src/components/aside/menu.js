export const navList = [
  {
    name: '首页',
    path: '/index'
  },
  {
    name: 'element组件',
    path: '/element',
    children: [
      {
        name: '表格',
        path: '/table'
      },
      {
        name: '上传',
        path: '/upload'
      },
      {
        name: '表单',
        path: '/form'
      },
      {
        name: 'echarts表格',
        path: '/echarts'
      }
    ]
  },
  {
    name: '错误',
    path: '/404',
    children: [
      {
        name: '404',
        path: '/404'
      },
    ]
  },
  {
    name: '插件',
    path: '/plugin',
    children: [
      {
        name: '富文本编辑器',
        path: '/wangeditor'
      },
      {
        name: '压缩图片',
        path: '/compressimg'
      },
      {
        name: '图片编辑器',
        path: '/imageeditor'
      },{
        name: '二维码生成',
        path: '/qrcode'
      },
      // {
      //   name: '可视化拖拽',
      //   path: '/dragEdit'
      // },
    ]
  },
  {
    name: '指令',
    path: '/directive',
    children: [
      {
        name: '常用小指令',
        path: '/smalldirective'
      }
    ]
  },
]

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
      },
      {
        name: '富文本编辑器',
        path: '/wangeditor'
      },
    ]
  },
  {
    name: '错误',
    path: '/error',
    children: [
      {
        name: '404',
        path: '/404'
      },
    ]
  },
]

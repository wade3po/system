//公共样式
const commonStyle = {
  rotate: '',
  opacity: 1,
}

//组件列表
const componentsList = [
  {
    component: 'w-text',
    label: '文字',
    propValue: '文字',
    animations: [],
    events: {},
    editMode: true,
    style: {
      width: 100,
      height: 33,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
    },
  },
  {
    component: 'w-button',
    label: '按钮',
    propValue: '按钮',
    animations: [],
    events: {},
    style: {
      width: 100,
      height: 33,
      borderWidth: '',
      borderColor: '',
      borderRadius: '',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: '',
    },
  },
  {
    component: 'WPicture',
    label: '图片',
    propValue: require('@/assets/images/default.jpg'),
    animations: [],
    events: {},
    style: {
      width: 300,
      height: 200,
      borderRadius: '',
    },
  },
]

componentsList.forEach(item => {
  item.style = { ...item.style, ...commonStyle }
})

export default componentsList

export default [{
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 10,
    data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        position: 'inner'
      },
      labelLine: {
        show: false
      },
      data: [
        {value: 335, name: '直达', selected: true},
        {value: 679, name: '营销广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    },
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '55%'],
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#eee',
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 4,
        // shadowBlur:3,
        // shadowOffsetX: 2,
        // shadowOffsetY: 2,
        // shadowColor: '#999',
        // padding: [0, 7],
        rich: {
          a: {
            color: '#999',
            lineHeight: 22,
            align: 'center'
          },
          // abg: {
          //     backgroundColor: '#333',
          //     width: '100%',
          //     align: 'right',
          //     height: 22,
          //     borderRadius: [4, 4, 0, 0]
          // },
          hr: {
            borderColor: '#aaa',
            width: '100%',
            borderWidth: 0.5,
            height: 0
          },
          b: {
            fontSize: 16,
            lineHeight: 33
          },
          per: {
            color: '#eee',
            backgroundColor: '#334455',
            padding: [2, 4],
            borderRadius: 2
          }
        }
      },
      data: [
        {value: 335, name: '直达'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1048, name: '百度'},
        {value: 251, name: '谷歌'},
        {value: 147, name: '必应'},
        {value: 102, name: '其他'}
      ]
    }
  ]
},{
  title: {
    text: '基础雷达图'
  },
  tooltip: {},
  legend: {
    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
  },
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: '销售（sales）', max: 6500},
      { name: '管理（Administration）', max: 16000},
      { name: '信息技术（Information Techology）', max: 30000},
      { name: '客服（Customer Support）', max: 38000},
      { name: '研发（Development）', max: 52000},
      { name: '市场（Marketing）', max: 25000}
    ]
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    // areaStyle: {normal: {}},
    data: [
      {
        value: [4300, 10000, 28000, 35000, 50000, 19000],
        name: '预算分配（Allocated Budget）'
      },
      {
        value: [5000, 14000, 28000, 31000, 42000, 21000],
        name: '实际开销（Actual Spending）'
      }
    ]
  }]
},{
  title: {
    text: '漏斗图(对比)',
    subtext: '纯属虚构',
    left: 'left',
    top: 'bottom'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    top: 'center',
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['产品A', '产品B', '产品C', '产品D', '产品E']
  },

  series: [
    {
      name: '漏斗图',
      type: 'funnel',
      width: '40%',
      height: '45%',
      left: '5%',
      top: '50%',
      funnelAlign: 'right',

      center: ['25%', '25%'],  // for pie

      data: [
        {value: 60, name: '产品C'},
        {value: 30, name: '产品D'},
        {value: 10, name: '产品E'},
        {value: 80, name: '产品B'},
        {value: 100, name: '产品A'}
      ]
    },
    {
      name: '金字塔',
      type: 'funnel',
      width: '40%',
      height: '45%',
      left: '5%',
      top: '5%',
      sort: 'ascending',
      funnelAlign: 'right',

      center: ['25%', '75%'],  // for pie

      data: [
        {value: 60, name: '产品C'},
        {value: 30, name: '产品D'},
        {value: 10, name: '产品E'},
        {value: 80, name: '产品B'},
        {value: 100, name: '产品A'}
      ]
    },
    {
      name: '漏斗图',
      type: 'funnel',
      width: '40%',
      height: '45%',
      left: '55%',
      top: '5%',
      funnelAlign: 'left',

      center: ['75%', '25%'],  // for pie

      data: [
        {value: 60, name: '产品C'},
        {value: 30, name: '产品D'},
        {value: 10, name: '产品E'},
        {value: 80, name: '产品B'},
        {value: 100, name: '产品A'}
      ]
    },
    {
      name: '金字塔',
      type: 'funnel',
      width: '40%',
      height: '45%',
      left: '55%',
      top: '50%',
      sort: 'ascending',
      funnelAlign: 'left',

      center: ['75%', '75%'],  // for pie

      data: [
        {value: 60, name: '产品C'},
        {value: 30, name: '产品D'},
        {value: 10, name: '产品E'},
        {value: 80, name: '产品B'},
        {value: 100, name: '产品A'}
      ]
    }
  ]
},{
  backgroundColor: '#1b1b1b',
  tooltip: {
    formatter: '{a} <br/>{c} {b}'
  },
  toolbox: {
    show: true,
    feature: {
      mark: {show: true},
      restore: {show: true},
      saveAsImage: {show: true}
    }
  },
  series: [
    {
      name: '速度',
      type: 'gauge',
      min: 0,
      max: 220,
      splitNumber: 11,
      radius: '50%',
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
          width: 3,
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      axisLabel: {            // 坐标轴小标记
        fontWeight: 'bolder',
        color: '#fff',
        shadowColor: '#fff', //默认透明
        shadowBlur: 10
      },
      axisTick: {            // 坐标轴小标记
        length: 15,        // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
          color: 'auto',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      splitLine: {           // 分隔线
        length: 25,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          width: 3,
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      pointer: {           // 分隔线
        shadowColor: '#fff', //默认透明
        shadowBlur: 5
      },
      title: {
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder',
          fontSize: 20,
          fontStyle: 'italic',
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      detail: {
        backgroundColor: 'rgba(30,144,255,0.8)',
        borderWidth: 1,
        borderColor: '#fff',
        shadowColor: '#fff', //默认透明
        shadowBlur: 5,
        offsetCenter: [0, '50%'],       // x, y，单位px
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder',
          color: '#fff'
        }
      },
      data: [{value: 40, name: 'km/h'}]
    },
    {
      name: '转速',
      type: 'gauge',
      center: ['25%', '55%'],    // 默认全局居中
      radius: '30%',
      min: 0,
      max: 7,
      endAngle: 45,
      splitNumber: 7,
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
          width: 2,
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      axisLabel: {            // 坐标轴小标记
        fontWeight: 'bolder',
        color: '#fff',
        shadowColor: '#fff', //默认透明
        shadowBlur: 10
      },
      axisTick: {            // 坐标轴小标记
        length: 12,        // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
          color: 'auto',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      splitLine: {           // 分隔线
        length: 20,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          width: 3,
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      pointer: {
        width: 5,
        shadowColor: '#fff', //默认透明
        shadowBlur: 5
      },
      title: {
        offsetCenter: [0, '-30%'],       // x, y，单位px
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder',
          fontStyle: 'italic',
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      detail: {
        //backgroundColor: 'rgba(30,144,255,0.8)',
        // borderWidth: 1,
        borderColor: '#fff',
        shadowColor: '#fff', //默认透明
        shadowBlur: 5,
        width: 80,
        height: 30,
        offsetCenter: [25, '20%'],       // x, y，单位px
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder',
          color: '#fff'
        }
      },
      data: [{value: 1.5, name: 'x1000 r/min'}]
    },
    {
      name: '油表',
      type: 'gauge',
      center: ['75%', '50%'],    // 默认全局居中
      radius: '30%',
      min: 0,
      max: 2,
      startAngle: 135,
      endAngle: 45,
      splitNumber: 2,
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
          width: 2,
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      axisTick: {            // 坐标轴小标记
        length: 12,        // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
          color: 'auto',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      axisLabel: {
        fontWeight: 'bolder',
        color: '#fff',
        shadowColor: '#fff', //默认透明
        shadowBlur: 10,
        formatter: function (v){
          switch (v + '') {
            case '0': return 'E';
            case '1': return 'Gas';
            case '2': return 'F';
          }
        }
      },
      splitLine: {           // 分隔线
        length:15,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          width:3,
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      pointer: {
        width:2,
        shadowColor: '#fff', //默认透明
        shadowBlur: 5
      },
      title: {
        show: false
      },
      detail: {
        show: false
      },
      data: [{value: 0.5, name: 'gas'}]
    },
    {
      name: '水表',
      type: 'gauge',
      center: ['75%', '50%'],    // 默认全局居中
      radius: '30%',
      min: 0,
      max: 2,
      startAngle: 315,
      endAngle: 225,
      splitNumber: 2,
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
          width: 2,
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      axisTick: {            // 坐标轴小标记
        show: false
      },
      axisLabel: {
        fontWeight: 'bolder',
        color: '#fff',
        shadowColor: '#fff', //默认透明
        shadowBlur: 10,
        formatter: function(v){
          switch (v + '') {
            case '0': return 'H';
            case '1': return 'Water';
            case '2': return 'C';
          }
        }
      },
      splitLine: {           // 分隔线
        length: 15,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          width: 3,
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        }
      },
      pointer: {
        width: 2,
        shadowColor: '#fff', //默认透明
        shadowBlur: 5
      },
      title: {
        show: false
      },
      detail: {
        show: false
      },
      data:[{value: 0.5, name: 'gas'}]
    }
  ]
},{
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    {type: 'bar'},
    {type: 'bar'},
    {type: 'bar'}
  ]
},{
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    areaStyle: {}
  }]
},{
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
},{
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 10,
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  ]
}];

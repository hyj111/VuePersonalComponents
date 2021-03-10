module.exports = {
  base:"/VuePersonalComponents/",
  title: 'Gaily-UI',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {text:'主页',link:'/'},
      {text: '文档', link: '/get-start/'},
      {text:'github',link:'https://github.com/hyj111'}
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title:'入门',
        children: [
          '/get-start/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover'
        ]
      },

    ]
  }  
}
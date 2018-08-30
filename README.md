# vue-home
王伟的音乐播放器

webpack  base  可以配置别名
比如 'common' : resolve('src/common')

安装 stylus  和 stylus-loader （css预编译）ddd
安装 fastclick  解决移动端点击事件的三秒延迟
安装 babel-polyfill  给es6 的api  做个转义（提高兼容度）
npm install babel-polyfill

import MHeader from 'components/m-header/m-header'
引入组件
正确写法 ：MHeader  错误写法 Mheader

跨域 的接口 的请求头  含有  host和 referer 纯前端是不能跨域获取数据的，可使用后端代理的方式解决问题

fastclick 与better-scroll  冲突，导致scroll里面的元素不能点击  这时只需要 把需要点击的元素  添加  needsclick  类名就行了

export 与 export default 的区别

export import 后面 可接多个  export default  后面  只能接一个  export default 通常使用来引入子组件的

通过 export 导出时  需要加 {}  而 export default  不需要

组件可不用写name   引入的时候 按照规则    如 import  Listview from ''  ==>  <listview></listview>  或者  import ListView from '' ==> <list-view></list-view>

使用到相关标签语法的使用就不能使用单引号，双引号 使用反引号

vuex

state => state.singer  的意思就是  function state(){   return state.singer     }

create-keyframe-animation :  js写的css3动画 插件

... 是扩展运算符


@click.stop=""  阻止向父元素冒泡
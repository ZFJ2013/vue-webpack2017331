/*
组件可以扩展 HTML 元素，封装可重用的代码
*/

// 注册全局组件
// Vue.component(tagName, options)
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

/**
 * 组件在注册之后，便可以在父实例的模块中
 * 以自定义元素 <my-component></my-component> 的形式使用。
 * !!! 要确保在初始化根实例之前注册了组件
 */

//局部注册
var Child = {
  template: '<div>A custom component!</div>'
}

new Vue({
  // ...
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  }
})

DOM模板解析说明

自定义组件不可以放置在<ul> ，<ol>，<table> ，<select>中,例如：
<table>
  <my-row>...</my-row>
</table>

变通的方案是使用特殊的 is 属性：
<table>
  <tr is="my-row"></tr>
</table>

应当注意，如果您使用来自以下来源之一的字符串模板，这些限制将不适用：
<script type="text/x-template">
JavaScript内联模版字符串
.vue 组件
因此，有必要的话请使用字符串模版。

组件内的data必须是函数。
原因:由于组件可以复用,如果组件内的data使用的是同一个对象则针对任意一个组件的属性做修改时,其他组件的数据也会产生变化。
详情示例请查看:
https://cn.vuejs.org/v2/guide/components.html#data-必须是函数

构成组件
父子组件的关系可以总结为 props down, events up 。
父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。
组件实例的作用域是孤立的。

使用-Prop-传递数据

Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})

然后我们可以这样向它传入一个普通字符串：
<child message="hello!"></child>

结果： hello!


camelCase Vs. kebab-case

当使用的不是字符串模版,camelCased (驼峰式) 命名的 prop 需要转换为相对应的 kebab-case (短横线隔开式) 命名：
Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
<!-- kebab-case in HTML -->
<child my-message="hello!"></child>
如果你使用字符串模版，则没有这些限制。

推荐使用字符串模板！！

动态-Prop

<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>

使用 v-bind 的缩写语法通常更简单：

<child :my-message="parentMsg"></child>


单向数据流

不应该在子组件内部改变 prop。如果你这么做了，Vue 会在控制台给出警告。

为什么我们会有修改prop中数据的冲动呢？通常是这两种原因：
prop 作为初始值传入后，子组件想把它当作局部数据来用；
prop 作为初始值传入，由子组件处理成其它数据输出。
对这两种原因，正确的应对方式是：
定义一个局部变量，并用 prop 的值初始化它：

props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}

定义一个计算属性，处理 prop 的值并返回。

props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}

Prop-验证

可以为组件的 props 指定验证规格。如果传入的数据不符合规格，Vue 会发出警告。当组件给其他人使用时，这很有用。

https://cn.vuejs.org/v2/guide/components.html#Prop-验证


总结:  父子组件间不存在属性互相流转的关系,父组件通过 props 向下传递数据给子组件，
子组件通过 events 给父组件发送消息(父组件监听事件来做出改变)


需要组合组件时使用Slot
https://cn.vuejs.org/v2/guide/components.html#使用-Slot-分发内容
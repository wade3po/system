//指令实例
import Vue from "vue";
import Message from "element-ui/packages/message/src/main";

Vue.directive('permission', {
  componentUpdated: (el, binding, vnode) => {
    if(!binding.value){
      el.remove()
    }
  }
})

//指令实例
Vue.directive('copy', {
  bind(el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候
        return
      }
      var input = document.createElement("input");
      input.style.position = 'absolute';
      input.style.left = '-9999px';
      input.value = el.$value;
      document.body.appendChild(input);
      input.select();
      const result = document.execCommand("Copy");
      if (result) {
        Message({
          message: "复制成功",
          type: "success",
          duration: 2000
        });
      }
      document.body.removeChild(input);
    }
    // 绑定点击事件
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  }
})

Vue.directive('debounce', {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value();
      }, 2000)
    })
  }
})

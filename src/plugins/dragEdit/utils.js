let id = 0
//创建一个唯一 ID
export function generateID() {
  return id++
}
//深拷贝
export function deepCopy(target) {
  if (typeof target == 'object') {
    const result = Array.isArray(target)? [] : {}
    for (const key in target) {
      if (typeof target[key] == 'object') {
        result[key] = deepCopy(target[key])
      } else {
        result[key] = target[key]
      }
    }

    return result
  }

  return target
}
//数组交换
export function swapArray(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
//获取样式
export function getStyle(style, filter = []) {
  const noNeedUnit = ['color', 'backgroundColor', 'textAlign', 'opacity', 'lineHeight', 'fontWeight', 'borderColor']
  const result = {}
  Object.keys(style).forEach(key => {
    if (!filter.includes(key)) {
      if (key != 'rotate') {
        result[key] = style[key]
        if (!noNeedUnit.includes(key)) {
          result[key] += 'px'
        }
      } else {
        result.transform = key + '(' + style[key] + 'deg)'
      }
    }
  })
  return result
}

import Vue from 'vue'
// 用于监听、触发事件
export const eventBus =  new Vue()

export async function runAnimation($el, animations = []) {
  const play = (animation) => new Promise(resolve => {
    $el.classList.add(animation.value, 'animated')
    const removeAnimation = () => {
      $el.removeEventListener('animationend', removeAnimation)
      $el.removeEventListener('animationcancel', removeAnimation)
      $el.classList.remove(animation.value, 'animated')
      resolve()
    }

    $el.addEventListener('animationend', removeAnimation)
    $el.addEventListener('animationcancel', removeAnimation)
  })

  for (let i = 0, len = animations.length; i < len; i++) {
    await play(animations[i])
  }
}

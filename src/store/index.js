import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    staticComponentData: [],
    curComponent: '',
    curComponentIndex: '',
    contexeMenuShow: false,
    contexeMenuTop: '',
    contexeMenuLeft: '',
  },
  mutations: {
    addComponent(state, component){
      state.staticComponentData.push(component);
    },
    setCurComponent(state, { component, index }) {
      state.curComponent = component;
      state.curComponentIndex = index;
    },
    contexeMenuFlag(state,{show, top, left}){
      state.contexeMenuShow = show;
      if(show){
        state.contexeMenuTop = top;
        state.contexeMenuLeft = left;
      }
    },
    setShapeStyle({ curComponent }, { top, left, width, height, rotate }) {
      if (top) curComponent.style.top = top;
      if (left) curComponent.style.left = left;
      if (width) curComponent.style.width = width;
      if (height) curComponent.style.height = height;
      if (rotate) curComponent.style.rotate = rotate;
    },
  },
})

export default store

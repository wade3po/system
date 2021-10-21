<template>
  <div class="component-list">
    <div v-for="(item, index) in componentList" :key="index" 
         class="list" @click="addComponent(index)">
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
  import componentList from './componentsList.js';
  import './registerComponent.js';
  import {deepCopy, generateID} from "../../utils";
  export default {
    data() {
      return {
        componentList,
      }
    },
    methods: {
      addComponent(index){
        const component = deepCopy(this.componentList[index]);
        component.id = generateID();
        this.$store.commit('addComponent', component);
      }
    },
  }
</script>

<style lang="scss" scoped type="text/scss">
  .component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list {
      width: 40%;
      border: 1px solid #ddd;
      cursor: pointer;
      margin: 15px 8px 0 8px;
      text-align: center;
      color: #333;
      padding: 2px 0;
    }
  }
</style>

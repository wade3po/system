<template>
    <div id="editor">
        <DragShap v-for="(item, index) in staticComponentData"
                  :key="item.id"
                  :style="initShapStyle(item.style)"
                  :element="item">
            <component
              class="component"
              :is="item.component"
              :style="getComponentStyle(item.style)"
              :propValue="item.propValue"
              :item="item"
              @input="handleInput"
            />
        </DragShap>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DragShap from './DragShap.vue'
import {getStyle} from '../../utils.js'
export default {
    components: {DragShap},
    methods: {
        getComponentStyle(style) {
            return getStyle(style, ['top', 'left', 'width', 'height', 'rotate'])
        },
        initShapStyle(style) {
            const initAttrList = ['width', 'height'];
            let initStyle = {};
            for (let i = 0; i < initAttrList.length; i++) {
                let key = initAttrList[i];
                initStyle[key] = style[key] + 'px';
            }
            return initStyle;
        },
        handleInput(element, value) {
            element.propValue = value;
        },
    },
    computed: mapState([
        'staticComponentData',
    ]),
}
</script>

<style lang="scss" type="text/scss" scoped>
.component {
    outline: none;
    width: 100%;
    height: 100%;
}
</style>

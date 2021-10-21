<template>
    <textarea 
        v-if="item.editMode"
        :value="item.propValue"
        class="text textarea"
        @blur="handleInput"
    ></textarea>
    <div v-else class="text disabled">
        <div v-for="(text, index) in propValue.split('\n')" :key="index">{{ text }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', this.item, e.target.value)
        },
    },
}
</script>

<style lang="scss" type="text/scss" scoped>
.text {
    border: 1px solid #ddd;
    padding: 5px 10px;
    white-space: normal;
    word-break: break-all;
}
.textarea {
    overflow: hidden;
    resize: none;
}
.disabled {
    border: none;
}
</style>

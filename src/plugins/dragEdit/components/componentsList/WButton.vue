<template>
    <button class="w-button">{{ item.propValue }}</button>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
}
</script>

<style lang="scss" type="text/Scss" scoped>
.w-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid $border-color;
    color: $font-color;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    width: 100%;
    height: 100%;
    font-size: 14px;
    &:active {
        color: $theme-color;
        border-color: $theme-color;
        outline: 0;
    }
    &:hover {
        background-color: $hover-back;
        color: $theme-color;
        border-color: $hover-border;
    }
}
</style>

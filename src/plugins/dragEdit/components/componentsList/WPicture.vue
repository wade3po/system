<template>
    <div class="w-picture">
        <img :src="item.propValue">
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
}
</script>

<style lang="scss" type="text/scss" scoped>
.w-picture{
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>

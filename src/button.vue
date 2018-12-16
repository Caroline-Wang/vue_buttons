<template>
    <button class="caro-button">hi</button>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .caro-button{
        height: var(--button-height);
        font-size:var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            border-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
    }

</style>
<template>
    <button class="caro-button" :class="iconPosition" @click="$emit('click-me')">
        <caro-icon class="caro-button-icon" :name="svg" v-if="svg && !loading"></caro-icon>
        <caro-icon class="caro-button-icon" name="loading" v-if="loading"></caro-icon>
        <div class="caro-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props:{
            'svg':String,
            'iconPosition':{
                type:String,
                validator:function (value) {
                    return (value === 'left' || value === 'right')
                }
            },
            'loading':{
                type:Boolean,
                default:false
            }
        }
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
        display:flex;
        justify-content: center;
        align-items: center;

        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            border-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }

         .caro-button-content{
             order:1;
         }
         &.left .caro-button-icon{
            order: 1;
          }
        &.right .caro-button-icon{
             order: 2;
         }
    }

</style>
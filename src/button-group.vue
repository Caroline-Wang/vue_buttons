<template>
    <div class="caro-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted(){
//            console.log(this)
        }
    }
</script>

<style lang="scss">
    .caro-button-group{
        display: inline-flex;
        vertical-align: middle;

        .caro-button{
            border-radius: 0;

            &:not(first-child){
                margin-left:-1px;
             }

            &:first-child{
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
             }
            &:last-child{
                 border-bottom-right-radius: var(--border-radius);
                 border-top-right-radius: var(--border-radius);
             }

             &:hover{
                  position:relative;
                  z-index: 1;
              }
          }
    }
</style>
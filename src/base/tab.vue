<template>
  <div class="tab-container">
      <slot></slot>
  </div>
</template>
<script>
export default {
    props:{
        items:{
            type:Array,
            default(){
                return new Array(4).fill(0)
            }
        }
    },
    mounted(){
        console.log(1)
    }
};
</script>
<style scoped lang='less'>
</style>


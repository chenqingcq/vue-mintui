<template>  
    <div class="wrapper">  
        <scroll >
            <ul class="content">
                <li class="scroll" v-for="(item,index) in data" :key="index">{{item}}</li>
            </ul>
        </scroll>
    </div>  
</template>  
<script>
import scroll from "../base/scroll.vue";
export default {
  components: {
    scroll
  },
  data() {
    return {

    };
  },
  computed:{
      data(){
          return new Array(25).fill(0)
      }
  }
};
</script> 
<style lang='less' scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        .scroll{
           width: 100%;
           height: 40px;
           border-bottom: 1px solid #333;
        }
    }
</style>

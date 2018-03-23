<template>  
    <div class="container">
        <mt-header fixed title="vue-demo"> </mt-header>     
        <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
            <img slot="icon" src="./assets/img/avator.jpg">
            tab1
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <img slot="icon" src="./assets/img/avator.jpg">
            tab2
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <img slot="icon" src="./assets/img/avator.jpg">
            tab3
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <img slot="icon" src="./assets/img/avator.jpg">
            tab4
        </mt-tab-item>
        </mt-tabbar>   
      <div class="panel">
        <span class="msg" @click="open">{{getMessage}}</span>
        <span @click="close">close</span>
      </div>
      <router-view></router-view> 
    </div>

</template>  
<script type="text/ecmascript-6">
import { Header } from "mint-ui";
import { Indicator } from "mint-ui";
import { Tabbar, TabItem } from "mint-ui";
import { Toast } from "mint-ui";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  data(){
        return {
            selected:"1"
        }  
  },
  computed: {
    ...mapGetters(["getMessage"])
  },
  methods: {
    ...mapMutations({
      SET_MESSAGE: "SET_MESSAGE"
    }),
    open() {
      console.log(111);
      Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle"
      });
      this.SET_MESSAGE("hah");
    },
    close() {
      Indicator.close();
    }
  },
  mounted() {
    console.log(Indicator);
  }
};
</script>  
<style lang = 'less' scoped>
.msg {
  color: #2f2f2f;
  font-size: 12px;
}
.panel {
  margin-top: 36px;
}
</style>


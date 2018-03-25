<template>  
    <div class="root">      
      <router-view></router-view> 
      <tab class="tab" v-if="items.length>1" >
        <ul  ref="tab">
            <li :class="{active:index===currentIndex}" v-for="(item ,index) in items" :key="index" :id="`tab${item.id}`"  @touchstart = 'changeIndex(index)'>
              <img :src="item.imgUrl" alt="">
            </li>
        </ul>
      </tab>
    </div>

</template>  
<script>
import tab from "./base/tab.vue";
export default {
  components: {
    tab
  },
  name: "App",
  data() {
    return {
      items: [],
      currentIndex: 0
    };
  },
  created() {
    this.getImg();
  },
  computed: {
    _active() {
      return {
        width: "40px",
        heigth: "40px"
      };
    }
  },
  methods: {
    getImg() {
      //发送请求修改items this.$http.get('url').then((res)=>{this.items =  res.data.imgArray})
      for (var i = 0; i < 4; i++) {
        this.items.push({
          imgUrl:
            "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1521948838&di=309b67a91f7315aa8ed1f75cf6f46365&src=http://p.3761.com/allimg/c121015/13502Q50H5R0-255157.jpg",
          id: i
        });
      }
    },
    changeIndex(index) {
      console.log(index);
      this.currentIndex = index;
      switch (index) {
        case 0: {
          this.$router.push("/vedio");
          break;
        }
        case 1: {
          this.$router.push("/hot");
          break;
        }
        case 2: {
          this.$router.push("/vip");
          break;
        }
        case 3: {
          this.$router.push("/user");
          break;
        }
        default: {
          this.$router.push("/vip");
        }
      }
    }
  },
  mounted() {}
};
</script>  
<style lang = 'less' scoped>
.active {
  background-color: rgba(51, 51, 51, 0.4);
  border-bottom: 5px solid #00be06;
}
.root{
  width: 100%;
  height: 100%;
}
.tab {
  border-top: 3px solid #eee;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  /* background-color: hotpink; */
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    li {
      border-collapse: collapse;
      list-style: none;
      border-right: 1px solid #eee;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      padding: 0  10px;

      img {
        display: inline-block;
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>


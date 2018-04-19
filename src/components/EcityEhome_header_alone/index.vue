<template>
  <div>
    <v-header></v-header>
    <!--<p>{{msg}}</p>-->
    <keep-alive>
      <router-view :eceh="eceh"></router-view><!-- -->
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
  import header from 'components/EcityEhome/header/header.vue';//导入插件
  export default {
    name: 'EcityEhome',
    data () {
      return {
//        msg: 'E城E家！！'
        eceh:{}
      }
    },
    beforeCreate:function(){
//      const url = debug ? '/api/seller' : '../json/data.json';
      const url = './static/json/data.json';
      this.$http.get(url).then((response) => {
        response = response.body;
        console.log(response);
        this.eceh = response;
        /*if (response.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, response.data);
        }*/
        this.eceh = response;
      });
    },
    components: {//定义模板
      'v-header': header
    }
  }
//    import star from 'components/star/star';
//
//    export default {
//        props: {
//            seller: {
//                type: Object
//            }
//        },
//        data() {
//            return {
//                detailShow: false
//            };
//        },
//        methods: {
//            showDetail() {
//                this.detailShow = true;
//            }
//        },
//        created() {
//            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
//        },
//        components: {
//            star
//        }
//    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin";
</style>

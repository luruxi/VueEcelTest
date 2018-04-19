<template>
  <h1>{{msg}}</h1>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AuthNo',
    data () {
      return {
        msg: '您没有查看权限！！'
      }
    },
    beforeCreate:function(){
      console.log("创建前")
      /*//http://localhost:8989/#/AuthNo/1/k_123/lsy?auth=1&uId=2017&uName=lsy
      console.log(window.location.href)//完整url可以用
      console.log(this.$route.path)//路由路径可以用
      console.log(this.$route.params)//路由路径参数--路由配置传参方式
      console.log(this.$route.query)//路由路径参数--?传参方式
      console.log(this.$route.params.auth+"___"+this.$route.query.auth)
      debugger
      if(this.$route.params.auth=="1" || this.$route.query.auth=="1"){
        this.$router.forward("/EcityEhome");//动态的导航到一个新 URL
      }else if(this.$route.params.auth=="2" || this.$route.query.auth=="2"){
        this.$router.forward("/SubCity");//动态的导航到一个新 URL
      }else if(this.$route.params.auth=="3" || this.$route.query.auth=="3"){
        this.$router.forward("/GrandServiceStation");//动态的导航到一个新 URL
      }
      debugger*/
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

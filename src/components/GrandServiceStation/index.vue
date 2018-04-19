<template>
  <p>{{msg}}</p>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'GrandServiceStation',
    data () {
      return {
        msg: '服务站！！'
      }
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

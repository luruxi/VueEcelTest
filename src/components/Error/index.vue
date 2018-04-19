<template>
  <h1>{{msg}}</h1>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Error',
    data () {
      return {
        msg: '页面错误！！'
      }
    }
  }
    /*import star from 'components/star/star';

    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                detailShow: false
            };
        },
        methods: {
            showDetail() {
                this.detailShow = true;
            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        },
        components: {
            star
        }
    };*/
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin";
</style>

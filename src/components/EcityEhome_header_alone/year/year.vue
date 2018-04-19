<template>
  <div class="eceh-year">
    <p>year</p>
    <div>{{eceh.data[0].kpiId}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      eceh: {
        type: Object
      }
    },
    created() {
      console.log("父级传递的eceh");
      console.log(this.eceh);
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
    /*@import "@common/stylus/mixin";*/
  .eceh-year
    position:absolute
    top:0.88rem
    bottom:0
    width:100%
    background:#eee
</style>

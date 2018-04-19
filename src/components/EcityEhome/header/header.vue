<template>
  <div class="eceh_head clearfix border-1px">
    <div class="block eceh_picker">
      <el-date-picker
        v-model="eceh_date"
        type="date"
        :readonly=false
        :editable=false
        placeholder="选择日期"
        format="yyyy / MM / dd"
        default-value="2010/10/01">
      </el-date-picker>
      <span class="icon-down"></span>
    </div>
    <div class="menu">
      <router-link to="/EcityEhome/year">年度</router-link>
      <router-link to="/EcityEhome/month">月度</router-link>
    </div>
    <div class="home">
      <span class="icon-home"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        eceh_date: '2010/10/01'
      };
    }
  };
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
    @import "../../../common/stylus/mixin.styl";
  .eceh_head
    display:flex
    height:0.88rem
    background:#fff
    font-size:0.32rem
    border-1px(rgba(7, 17, 27, 0.1))
    .eceh_picker
      position:relative
      flex:3
      /*background:#ff0*/
      .el-input--prefix
        position:relative
        z-index:1
        span
          display:none
        .el-input__inner
          width:2.42rem
          height:0.88rem
          line-height:0.88rem
          padding:0
          padding-left:0.3rem
          border:none
          background:none
         &.el-input
          width:2.42rem
      span
        position:absolute
        top:0
        right:0
        font-size:0.2rem
        line-height:0.88rem
    .menu
      flex:4
      /*background:#f0f*/
      justify-content:space-between
      /*text-align:justify*/
      a
        box-sizing:border-box
        display:inline-block
        height:0.88rem
        line-height:0.88rem
        font-size:0.4rem
        margin:0 0.15rem
        border-bottom:2px solid rgba(52,152,254,0)
        color:#333
      a.active
        color:#3498FE
        border-bottom:2px solid rgba(52,152,254,1)
    .home
      flex:2
      /*background:#0ff*/
      text-align:right
      line-height:0.88rem
      span
        font-size:0.38rem
        color:#3498FE
        margin-right:0.3rem
</style>

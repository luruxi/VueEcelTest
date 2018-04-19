<template>
  <div>
    <!--<v-header></v-header>-->
    <div class="eceh_head clearfix border-1px">
      <div class="block eceh_picker">
        <el-date-picker
          v-model="eceh_date"
          type="date"
          :readonly=false
          :editable=false
          placeholder="选择日期"
          format="yyyy/MM/dd"
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
    <!--<p>{{msg}}</p>-->
    <keep-alive>
      <router-view :eceh="eceh"></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
//  import header from 'components/EcityEhome/header/header.vue';//导入插件
  import {formatDate} from '../../common/js/date.js'
  import echarts from 'echarts'
  export default {
    name: 'EcityEhome',
    data () {//vue中的变量
      return {
//        msg: 'E城E家！！'
        eceh:{},
        eceh_date: formatDate(new Date(),'yyyy/MM/dd'),
        index :0
      }
    },
    beforeCreate:function(){//vue创建之前
//      const url = debug ? '/api/seller' : '../json/data.json';
      const url = './static/json/data.json';
      this.$http.get(url).then((response) => {
        console.log("data.json--beforeCreate");
        response = response.body;
        console.log(response);
        debugger;
        this.eceh = response;
        /*if (response.errno === ERR_OK) {
         this.seller = Object.assign({}, this.seller, response.data);
         }*/
      });
    },
    created() {//创建vue时候
//      const url = debug ? '/api/seller' : '../json/data.json';
      const url = './static/json/data.json';
      this.$http.get(url).then((response) => {
        response = response.body;
        console.log("data.json--created");
        console.log(response)
        debugger;
        this.eceh = response;
        /*if (response.errno === ERR_OK) {
         this.seller = Object.assign({}, this.seller, response.data);
         }*/
      });
    },
    /*computed: {//vue中的计算属性，随着data定义的变量发生变化而时时计算，不需要调用，自动计算触发
      countIndex() {
        return this.index++;
      }
    },*/
    watch: {//vue中的监听变量变化
      /*'eceh_date'() {
        console.log(this.eceh_date);
      }*/
      'eceh_date'(newVal, oldVal) {
        console.log("eceh_date:"+this.eceh_date);
        console.log("newVal:"+newVal);
        console.log("oldVal:"+oldVal);
//        this.eceh_date = formatDate(newVal,'yyyy/MM/dd');
        console.log("format:"+formatDate(newVal,'yyyy/MM/dd'));
        debugger;
        this.quest(formatDate(this.eceh_date,'yyyy/MM/dd'));
      }
    },
    methods:{//vue中的方法
      quest:function(params){
        console.log("请求参数");
        console.log(params);
        debugger;
        const url = './static/json/data2.json';
        this.$http.get(url).then((response) => {
          response = response.body;
          console.log("请求结果");
          console.log(response);
          debugger;
          this.eceh = response;
          /*if (response.errno === ERR_OK) {
           this.seller = Object.assign({}, this.seller, response.data);
           }*/
        });
        /*this.$http.post("http://localhost/test.php",{name:"zhangsan"},{emulateJSON:true}).then(
          function (res) {
            // 处理成功的结果
            alert(res.body);
          },function (res) {
            // 处理失败的结果
          }
        );*/
      }
    },
    components: {//定义模板
//      'v-header': header
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
  @import "../../common/stylus/mixin.styl";
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

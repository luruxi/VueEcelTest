<template>
  <div class="eceh-year" ref="yearScroll">
    <div class="yearCon">
      <div class="cardItem">
        <div class="cardHead clearfix">
          <div class="cardTil fLeft"><span class="tilLine"></span><span class="til">经营</span></div>
          <div class="cardChat fRight"><span class="icon-msg"></span></div>
        </div>
        <div class="cardBody">
          <ul>
            <li cardSubItm>
              <dl>
                <dt class="cardSubTil">
                  <span class="til">收入</span><span class="icon-right"></span>
                </dt>
                <dd class="cardSubCon cardFlex cardJy">
                  <div class="info">
                    <div class="infoItem">
                      <p class="num">906.55 <span class="icon-downtrend"></span></p>
                      <p class="text">月度完成（万）</p>
                    </div>
                    <div class="infoItem">
                      <p class="num">906.55</p>
                      <p class="text">月度完成（万）</p>
                    </div>
                  </div>
                  <div class="chart">
                    <div id="myPie" ref="myPie"></div>
                  </div>
                </dd>
              </dl>
            </li>
            <li cardSubItm>
              <dl>
                <dt class="cardSubTil">
                  <span class="til">利润</span>
                </dt>
                <dd class="cardSubCon cardFlex cardJy">
                  <div class="info">
                    <div class="infoItem">
                      <p class="num">906.55 <span class="icon-downtrend"></span></p>
                      <p class="text">月度完成（万）</p>
                    </div>
                    <div class="infoItem">
                      <p class="num">906.55</p>
                      <p class="text">月度完成（万）</p>
                    </div>
                  </div>
                  <div class="chart"></div>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="cardItem">
        <div class="cardHead clearfix">
          <div class="cardTil fLeft"><span class="tilLine"></span><span class="til">业务</span></div>
          <div class="cardChat fRight"><span class="icon-msg"></span></div>
        </div>
        <div class="cardBody">
          <ul>
            <li class="cardSubItm">
              <dl>
                <dt class="cardSubTil">
                  <span class="til">订单量</span>
                </dt>
                <dd class="cardSubCon cardYw">
                  <div class="chart">
                    <div class="target">目标 6800.45万</div>
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
                  </div>
                  <div class="info">
                    <div class="infoItem">
                      <p class="num">906.55<span class="icon-uptrend"></span></p>
                      <p class="text">月度完成（万）</p>
                    </div>
                    <div class="infoItem">
                      <p class="num">906.55</p>
                      <p class="text">月度完成（万）</p>
                    </div>
                    <div class="infoItem">
                      <p class="num">906.55</p>
                      <p class="text">月度完成（万）</p>
                    </div>
                  </div>
                </dd>
              </dl>
            </li>
            <li class="cardSubItm">
              <dl>
                <dt class="cardSubTil">
                  <span class="til">订单收入</span>
                </dt>
                <dd class="cardSubCon cardYw">
                  <div class="chart">
                    <div class="target">目标 6800.45万</div>
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
                  </div>
                  <div class="info">
                    <div class="infoItem">
                      <p class="num">906.55</p>
                      <p class="text">月度完成（万）</p>
                    </div>
                    <div class="infoItem">
                      <p class="num">906.55</p>
                      <p class="text">月度完成（万）</p>
                    </div>
                    <div class="infoItem">
                      <p class="num">906.55</p>
                      <p class="text">月度完成（万）</p>
                    </div>
                  </div>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="cardItem">
        <div class="cardHead clearfix">
          <div class="cardTil fLeft"><span class="tilLine"></span><span class="til">服务</span></div>
          <div class="cardChat fRight"><span class="icon-msg"></span></div>
        </div>
        <div class="cardBody">
          <ul class="cardFw">
            <li>
              <div class="circle">85%</div>
              <p>综合及时率</p>
            </li>
            <li>
              <div class="circle">85%</div>
              <p>综合及时率</p>
            </li>
            <li>
              <div class="circle">85%</div>
              <p>综合及时率</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="cardItem">
        <div class="cardHead clearfix">
          <div class="cardTil fLeft"><span class="tilLine"></span><span class="til">安全</span></div>
          <div class="cardChat fRight"><span class="icon-msg"></span></div>
        </div>
        <div class="cardBody">
          <dl class="cardSubItm">
            <dt class="cardSubTil">
              <span class="til">安全事件<strong>2</strong>次</span>
            </dt>
            <dd class="cardSubCon cardAq">
              <div class="table">
                <el-table
                  :data="tableData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="90">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址">
                  </el-table-column>
                </el-table>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <p>year</p>
      <div>{{eceh.data[0].kpiId}}</div>
      <div>{{getEceh}}</div>
      <p></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import echarts from 'echarts';
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    props: {//用于接收父组件参数
      eceh: {
        type: Object
      }
    },
    beforeCreate :function(){
//      console.log("this.eceh--beforeCreate");
//      console.log(this.eceh);
    },
    created() {//创建vue时候
      console.log("父级传递的eceh----created");
      console.log("this.eceh--created");
      console.log(this.eceh);
      debugger;
    },
    mounted() {//加载vue完成
      this.$nextTick(() => {
        console.log("加载vue完成--mounted");
        console.log("ref获取元素--mounted");
        console.log("this.eceh--mounted");
        console.log(this.eceh);
        console.log(this.$refs.yearScroll);
        debugger;
//        this._initScroll();
      });
    },
    update() {//数据更新调用
      this._initScroll();
      this.initCharts();
      console.log("this.eceh--update");
      console.log(this.eceh);
      debugger;
    },
    watch: {//vue监听变量
      'eceh'() {
        this.$nextTick(() => {
          console.log("ref获取元素");
          console.log(this.$refs.yearScroll);
          this._initScroll();
          this.initCharts();
          console.log("this.eceh--watch");
          console.log(this.eceh);
          debugger;
        });
      },
      'tableData'() {
        this.$nextTick(() => {
          console.log("ref获取元素");
          console.log(this.$refs.yearScroll);
          this._initScroll();
          this.initCharts();
          debugger;
        });
      }
    },
    computed: {//vue中的计算属性，随着data定义的变量发生变化而时时计算，不需要调用，自动计算触发
      getEceh() {
        console.log("this.eceh--computed");
        console.log(this.eceh);
        debugger;
        return 1;
      }
    },
    methods:{//vue中的方法
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.yearScroll, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      },
      initCharts() {
        this.chart = echarts.init(this.$refs.myPie);
        this.setOptions();
      },
      setOptions() {
        this.chart.setOption({

          title:{
            show:true,
            text:'68%',//10
            textStyle:{
              fontSize:8,
              lineHeight:12,
              color:'#349ef6'
            },
            left:'center',
            top:'30%'
          },
          legend:{
            show:false
          },
          series: [
            {
              name:'CNG/LNG',
              type: 'pie',
              radius: ['60%', '85%'],
              hoverAnimation:false,
              itemStyle : {
                normal : {
                  labelLine : {
                    show : false
                  }
                },
                emphasis : {
                  labelLine : {
                    show : false
                  }
                }
              },
              tooltip:{
                show:false
              },
              data: [
                {value:335, name:'年度完成比',itemStyle:{color:"rgba(112,182,254,1)"}},
                {value:335, name:'年度剩余',itemStyle:{color:"rgba(112,182,254,0.2)"}}
              ]
            }
          ]

        })
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
  @import "../../../common/stylus/base-year.styl";
  /*import "Element-ui" from */
  .eceh-year
    position:absolute
    top:0.88rem
    bottom:0
    width:100%
    background:#eee
    overflow: hidden;
</style>

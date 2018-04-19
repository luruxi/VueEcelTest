import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AuthNo from '@/components/AuthNo/index'
import Error from '@/components/Error/index'
import EcityEhome from '@/components/EcityEhome/index'
import year from '@/components/EcityEhome/year/year'
import month from '@/components/EcityEhome/month/month'
import SubCity from '@/components/SubCity/index'
import GrandServiceStation from '@/components/GrandServiceStation/index'
//import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/EcityEhome',//E城E家页面
      redirect: '/EcityEhome/year',
      //redirect: '/EcityEhome',//重定向
      name: 'EcityEhome',
      component: EcityEhome,
      children: [
        {
          path: 'year',
          name: 'year',
          component: year
        },
        {
          path: 'month',
          name: 'month',
          component: month
        }
      ]
    },
    {
      path: '/SubCity',//城市页面
      //redirect: '/SubCity',//重定向
      name: 'SubCity',
      component: SubCity
    },
    {
      path: '/GrandServiceStation',//服务站页面
      //redirect: '/GrandServiceStation',//重定向
      name: 'GrandServiceStation',
      component: GrandServiceStation
    },
    {
      path: '/Error',//错误页面的路由
      name: 'Error',
      component: Error
    },
    {
      //http://localhost:8989/#/AuthNo/1/k_123/lsy?auth=1&uId=2017&uName=lsy
      path: '/AuthNo/:auth/:uId/:uName',//路由路径参数--路由配置传参方式
      name: 'AuthNo',//没有权限访问的路由
      //需要登录才能进入的页面可以增加一个meta属性
      meta: {
        requireAuth: true
      },
      //按需加载
      component: (resolve) => {
        require(['../components/AuthNo/index'], resolve)
      }
    }
  ],
  linkActiveClass:"active"
})
//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  /*if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限需要走验证，这个验证是否需要在单个路由中写明
    if (localStorage.getItem('username')) {// 需要验证的路由地址再次 判断是否登录了 登录了过
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/Error',
        query: {redirect: to.fullPath}
      })
    }
  } else {//不需要直接过
    next()
  }*/

  console.log("from.path:"+from.path)//路由路径可以用
  console.log("to.path:"+to.path)//路由路径可以用
  //alert(router.app.$options.store.state.myStore.user);//这种形式可以取到app全局参数属性
  console.log(router.app.$options.getters);//这种形式可以取到app全局参数属性
  router.app.$options.store.commit('login', true);//这种形式可以取到app全局方法
  console.log(router.app.$options.store.state.myStore.user);//这种形式可以取到app全局参数属性
  console.log(window.location.href)//完整url可以用
  console.log(to.path)//路由路径可以用
  console.log(to.params)//路由路径参数--路由配置传参方式
  console.log(to.query)//路由路径参数--?传参方式
  //----debugger
  if (to.path === '/login') {//验证所有路由 如果登录地址直接过去登录
    //----debugger
    next()
  } else {//如果不是登录地址需要判断条件
    /*if (!router.app.$options.store.state.myStore.user || to.path === '/Error') {//判断全局store的数据状态以及去跳转的路径
      next({ path: '/Error' })
    } else {
      next()
    }*/
    //----debugger
    if(to.path.indexOf("/AuthNo")!=-1){
      //----debugger
      if(to.params.auth=="1" || to.query.auth=="1"){
        next({ path: '/EcityEhome' })
      }else if(to.params.auth=="2" || to.query.auth=="2"){
        next({ path: '/SubCity' })
      }else if(to.params.auth=="3" || to.query.auth=="3"){
        next({ path: '/GrandServiceStation' })
      }else{
        next({ path: '/Error' })
      }
      //----debugger
    }else{
      //----debugger
      next()
    }
    /*if (!store.state.user && (to.path === '/watchHouse' || to.path === '/AgentMsg')) {//判断全局store的数据状态以及去跳转的路径
      next({ path: '/login' })
    } else {
      next()
    }
    if (!store.state.user && (from.path === '/my') && (to.path === '/ToolCompute')) {//判断全局store的数据状态以及从哪里跳去哪里
      next({ path: '/login' })
    }*/
  }
})
export default router

import Vue from 'vue'
import Vuex from 'vuex'
//import app from './modules/app'
import myStore from './modules/myStore'
//import errorLog from './modules/errorLog'
//import permission from './modules/permission'
//import tagsView from './modules/tagsView'
//import user from './modules/user'
//import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    //app,
    myStore,
    //errorLog,
    //permission,
    //tagsView,
    //user
  },
  //getters
})

export default store

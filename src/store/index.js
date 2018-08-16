/**
 * Created by bennettyw on 2018/8/10.
 */
import Vue from  'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'  //日志打印

Vue.use(Vuex)


//检测store的变化，调试用 ，生产环境关闭
const debug = process.env.NODE_ENV  !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
import vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import * as getters from "./getters"
import actions from "./actions"
vue.use(Vuex)
const state = {
  msg: "hello"
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

import * as types from './mutations-types'
export default {
  [types.SET_MESSAGE](state, msg) {
    state.msg = msg;
  },
  [types.SET_NAME](state, name) {
    state.name = name;
  }
}

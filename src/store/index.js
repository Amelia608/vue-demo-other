import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import main from './modules/main'
import openingOrder from './modules/openingOrder'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    main,
    openingOrder
  },
  getters
})

export default store

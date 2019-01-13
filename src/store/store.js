import Vue from 'vue';
import Vuex from 'vuex';
import report from './modules/report';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    report
  }
});

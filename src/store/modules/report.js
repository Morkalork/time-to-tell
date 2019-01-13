import * as reportApi from '../../api/reportApi';

const state = {
  reports: []
};

const actions = {
  load({ commit, userId }) {
    reportApi.loadReports(userId).then(reports => {
      commit('setReports', { reports });
    });
  }
};

const mutations = {
  setReports(s, { reports }) {
    s.reports = reports;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

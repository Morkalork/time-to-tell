import * as userApi from '../../api/userApi';

const state = {
  users: []
};

const actions = {
  load({ commit }) {
    userApi.loadUsers().then(users => {
      commit('setUsers', { users });
    });
  }
};

const mutations = {
  setUsers(s, { users }) {
    s.users = users;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

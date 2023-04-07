import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      userId: null,
      tokenId: null,
      roleId: null,
      didAutoLogout: false,
      isauth: false,
    };
  },
  mutations,
  actions,
  getters
};
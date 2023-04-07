let timer;

export default {
  



     set(context,payload)
    {

    localStorage.setItem('token', payload.tokenId);
    localStorage.setItem('userId', payload.userId);
    localStorage.setItem('roleId', payload.roleId);

    },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('roleId');
    localStorage.removeItem('tokenExpiration');
   
    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};

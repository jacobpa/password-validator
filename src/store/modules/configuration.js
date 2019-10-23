const state = {
  password: '',
  minLength: 8,
  minSpecialChar: 2,
  minUpperChar: 2,
  minLowerChar: 2,
};

const mutations = {
  setMinLength(state, length) {
    if (!length || length < 0) return;
    state.minLength = length;
  },
  setMinSpecialChar(state, count) {
    if (!count || count < 0) return;
    state.minSpecialChar = count;
  },
  setMinUpperChar(state, count) {
    if (!count || count < 0) return;
    state.minUpperChar = count;
  },
  setMinLowerChar(state, count) {
    if (!count || count < 0) return;
    state.minLowerChar = count;
  },
  setPassword(state, pass) {
    state.password = pass;
  },
};

export default {
  state,
  mutations,
};

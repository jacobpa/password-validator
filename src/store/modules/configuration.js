const state = {
  minLength: 8,
  minSpecialChar: 2,
  minUpperChar: 2,
};

const mutations = {
  setMinLength(state, length) {
    state.minLength = length;
  },
  setMinSpecialChar(state, count) {
    state.minSpecialChar = count;
  },
  setMinUpperChar(state, count) {
    state.minUpperChar = count;
  },
};

export default {
  state,
  mutations,
};

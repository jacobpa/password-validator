export default {
  state: {
    password: '',
    minLength: 8,
    minSpecialChar: 2,
    minUpperChar: 2,
    minLowerChar: 2,
    minNumeric: 2,
  },
  mutations: {
    setMinLength(state, length) {
      if (typeof length !== 'number' || length < 0) return;
      state.minLength = length;
    },
    setMinSpecialChar(state, count) {
      if (typeof count !== 'number' || count < 0) return;
      state.minSpecialChar = count;
    },
    setMinUpperChar(state, count) {
      if (typeof count !== 'number' || count < 0) return;
      state.minUpperChar = count;
    },
    setMinLowerChar(state, count) {
      if (typeof count !== 'number' || count < 0) return;
      state.minLowerChar = count;
    },
    setMinNumeric(state, count) {
      if (typeof count !== 'number' || count < 0) return;
      state.minLowerChar = count;
    },
    setPassword(state, pass) {
      state.password = pass;
    },
  },
};

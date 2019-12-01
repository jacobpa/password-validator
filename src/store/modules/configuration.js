const parseEventInput = (e) => {
  if (e.target) {
    return e.target.type === 'number'
      ? parseInt(e.target.value, 10)
      : e.target.value;
  }
  if (parseInt(e, 10)) {
    return parseInt(e, 10);
  }

  return 0;
};

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
    setMinLength(state, event) {
      const length = parseEventInput(event);
      if (typeof length !== 'number' || length < 0) return;
      state.minLength = length;
    },
    setMinSpecialChar(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.minSpecialChar = count;
    },
    setMinUpperChar(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.minUpperChar = count;
    },
    setMinLowerChar(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.minLowerChar = count;
    },
    setMinNumeric(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.minNumeric = count;
    },
    setPassword(state, pass) {
      state.password = pass;
    },
  },
};

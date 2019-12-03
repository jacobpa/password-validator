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
    minLength: {
      value: 8,
      enabled: true,
    },
    minSpecialChar: {
      value: 2,
      enabled: true,
    },
    minUpperChar: {
      value: 2,
      enabled: true,
    },
    minLowerChar: {
      value: 2,
      enabled: true,
    },
    minNumeric: {
      value: 2,
      enabled: true,
    },
    maxRepeating: {
      value: 3,
      enabled: true,
    },
    repeatingIsCaseSensitive: {
      value: true,
      enabled: true,
    },
  },
  mutations: {
    setMinLength(state, event) {
      const length = parseEventInput(event);
      if (typeof length !== 'number' || length < 0) return;
      state.minLength.value = length;
    },
    setMinSpecialChar(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.minSpecialChar.value = count;
    },
    setMinUpperChar(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.minUpperChar.value = count;
    },
    setMinLowerChar(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.minLowerChar.value = count;
    },
    setMinNumeric(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.minNumeric.value = count;
    },
    setMaxRepeating(state, event) {
      const count = parseEventInput(event);
      if (typeof count !== 'number' || count < 0) return;
      state.maxRepeating.value = count;
    },
    toggleRepeatingSensitivity(state) {
      state.repeatingIsCaseSensitive.value = !state.repeatingIsCaseSensitive.value;
    },
    toggleEnabled(state, config) {
      state[config].enabled = !state[config].enabled;
    },
    setPassword(state, pass) {
      state.password = pass;
    },
  },
};

/* eslint-disable linebreak-style */
import store from '@/store';

const { configuration } = store.state;

const length = password => ({
  status: password.length >= configuration.minLength,
  count: password.length,
});

const specialChar = (password) => {
  const matches = password.match(/[^a-zA-Z0-9]/g); // Match all non-alphanumeric characters
  const count = matches ? matches.length : 0;

  return {
    status: count >= configuration.minSpecialChar,
    count,
  };
};

const upperCaseChar = (password) => {
  const matches = password.match(/[A-Z]/g);
  const count = matches ? matches.length : 0;
  return {
    status: count >= configuration.minUpperChar,
    count,
  };
};

const lowerCaseChar = (password) => {
  const matches = password.match(/[a-z]/g);
  const count = matches ? matches.length : 0;
  return {
    status: count >= configuration.minLowerChar,
    count,
  };
};

const numerical = (password) => {
  const matches = password.match(/[0-9]/g);
  const count = matches ? matches.length : 0;
  return {
    status: count >= configuration.minNumeric,
    count,
  };
};

const passwordWarning = (password) => {
  const zxcvbnResult = zxcvbn(password);
  const warning = zxcvbnResult.feedback.warning;
  return {
    status: warning.length > 0,
    warning,
  };
};

export default {
  length,
  specialChar,
  upperCaseChar,
  lowerCaseChar,
  numerical,
  passwordWarning,
};

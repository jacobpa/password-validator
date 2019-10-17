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

export default {
  length,
  specialChar,
  upperCaseChar,
};
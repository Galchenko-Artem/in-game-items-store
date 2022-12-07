export const USER_REG = 'USER_REG';
export const USER_AUTH = 'USER_AUTH';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userRegistration = (user) => ({
  type: USER_REG, payload: user,
});

export const userAuth = (user) => ({
  type: USER_AUTH, payload: user,
});

export const userLogout = (user) => ({
  type: USER_LOGOUT, payload: user,
});

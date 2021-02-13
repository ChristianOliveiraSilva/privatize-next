export const USER_UPDATE = "USER_UPDATE";
export const USER_RESET = "USER_RESET";

export const userUpdate = (user) => ({
  type: USER_UPDATE,
  payload: user,
});

export const userReset = () => {
  return {
    type: USER_RESET,
  };
};
export const selectUserDetails = (state, userId) => {
  return state.users.find(({ id }) => id === userId);
};

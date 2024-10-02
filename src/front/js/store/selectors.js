export const selectUserDetails = (state, userId) =>
  state.users.find(({ id }) => id === userId);

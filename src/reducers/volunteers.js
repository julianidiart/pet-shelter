const volunteersReducerDefaultState = [];

export default (state = volunteersReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_VOLUNTEER":
      return [...state, action.volunteer];
    case "REMOVE_VOLUNTEER":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_VOLUNTEER":
      return state.map(volunteer => {
        if (volunteer.id === action.id) {
          return {
            ...volunteer,
            ...action.updates
          };
        } else {
          return volunteer;
        }
      });
    case "SET_VOLUNTEERS":
      return action.volunteers;
    default:
      return state;
  }
};

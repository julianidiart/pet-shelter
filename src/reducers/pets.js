const petsReducerDefaultState = [];

export default (state = petsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PET":
      return [...state, action.pet];
    case "REMOVE_PET":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_PET":
      return state.map(pet => {
        if (pet.id === action.id) {
          return {
            ...pet,
            ...action.pet
          };
        } else {
          return pet;
        }
      });
    case "SET_PETS":
      return action.pets;
    default:
      return state;
  }
};

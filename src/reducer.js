export const initialState = {
  basket: [],
};

function reducer(state, actions) {
  switch (actions.type) {
    case 'ADD_TO_BASKET':
      // Logic for Adding item to basket
      break;
    case 'REMOVE_FROM_BASKET':
      // Logic for Removing item to basket
      break;
    default:
      return state;
  }
}

export default reducer;

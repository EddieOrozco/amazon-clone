export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic for Adding item to basket
      return { ...state, basket: [...state.basket, action.item] };

      break;
    case 'REMOVE_FROM_BASKET':
      // Logic for Removing item to basket
      return { state };
      break;
    default:
      return state;
  }
}

export default reducer;

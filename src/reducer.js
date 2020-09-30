export const initialState = {
  basket: [
    {
      id: '5',
      title: 'Forget the sun stay fresh and cool.',
      price: 105.99,
      rating: 5,
      image:
        '//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.framesdirect.com%2Fproduct_elarge_images%2Frayban-sun-rb8301-002-56-angle.jpg&f=1&nofb=1',
    },
    {
      id: '5',
      title: 'Forget the sun stay fresh and cool.',
      price: 105.99,
      rating: 5,
      image:
        '//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.framesdirect.com%2Fproduct_elarge_images%2Frayban-sun-rb8301-002-56-angle.jpg&f=1&nofb=1',
    },
  ],
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

      // Cloned the basket
      let newBasket = [...state.basket];
      // Check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id:${action.id})`);
      }

      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

export default reducer;

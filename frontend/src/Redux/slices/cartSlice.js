import { createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : {
      cartItems: [],
      totalItems: 0,
      totalItemsPrice: 0,
      totalQuantity: 0
    };
  };

  const saveCartToLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify(state));
  };
  
  
const initialState = loadCartFromLocalStorage();

// const initialState = {
//     cartItems: [],
//     totalItems:0,
//     totalItemsPrice:0,
//     totalQuantity:0
// }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        addToCart: (state, action) => {
            console.log('action type called is:', action.type)
            console.log('action product is: ', action.payload)
            const item = state.cartItems.find(item => item.id == action.payload.id)
            if(!item) {

            state.cartItems = [...state.cartItems, action.payload]
            state.totalQuantity = ++state.totalQuantity
            state.totalItemsPrice =  parseFloat(action.payload.price) + parseFloat(state.totalItemsPrice);
            state.totalItems = ++state.totalItems
            saveCartToLocalStorage(state);

            }

            
        },

        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id == action.payload)
            if (itemIndex !== -1) {
                const item = state.cartItems[itemIndex];
                state.totalItems -= 1;
                state.totalItemsPrice -= parseFloat(item.price * 1);
                state.totalQuantity = --state.totalQuantity;
                state.cartItems.splice(itemIndex, 1);
                saveCartToLocalStorage(state);

            }

        
        },
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;
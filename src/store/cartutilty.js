export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };



export const removeItemFromCart = (cartItems, cartItemtoremove) => {
  const existingCartITem = cartItems.find(item => item.id === cartItemtoremove.id)


if (existingCartITem.quantity ===1) {
  return cartItems.filter(cartItem => cartItem.id !== cartItemtoremove.id)
}

return cartItems.map(cartItem => cartItem.id === cartItemtoremove.id ?
  {...cartItem, quantity: cartItem.quantity -1}: cartItem
  )

}
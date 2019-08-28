export function addToCart(product) {
  return {
    type: '@cart/ADD_TO_CART',
    payload: product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    payload: id,
  };
}

export function updateQuantity(id, increment) {
  return {
    type: '@cart/UPDATE_QUANTITY',
    payload: { id, increment },
  };
}

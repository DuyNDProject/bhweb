const updateCart = (cartId, cartData) => {
  return fetch(`https://fakestoreapi.com/carts/${cartId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cartData),
  }).then((response) => response.json());
};

export default updateCart;

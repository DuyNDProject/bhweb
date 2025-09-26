const getCart = () => {
  return fetch("https://fakestoreapi.com/carts/1").then((response) =>
    response.json()
  );
};

export default getCart;

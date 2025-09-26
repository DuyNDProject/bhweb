const getProduct = () => {
  return fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
};

export default getProduct;

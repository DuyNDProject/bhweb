const getProductDetail = (productId) => {
  return fetch(`https://fakestoreapi.com/products/${productId}`).then(
    (response) => response.json()
  );
};

export default getProductDetail;

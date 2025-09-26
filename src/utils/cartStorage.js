const CART_KEY = "cart_products";

// Lấy danh sách sản phẩm từ localStorage
export const getCartStorage = () => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

// Lưu danh sách sản phẩm vào localStorage
export const setCartStorage = (products) => {
  localStorage.setItem(CART_KEY, JSON.stringify(products));
};

// Thêm 1 sản phẩm mới vào giỏ hàng
export const addProductToStorage = (productId) => {
  const current = getCartStorage();
  const index = current.findIndex((item) => item.productId === productId);

  if (index !== -1) {
    // Nếu đã có sản phẩm, tăng quantity
    current[index].quantity += 1;
  } else {
    // Nếu chưa có, thêm mới với quantity = 1
    current.push({ productId, quantity: 1 });
  }

  setCartStorage(current);
};

// Xóa 1 sản phẩm khỏi giỏ hàng
export const removeProductFromStorage = (productId) => {
  const current = getCartStorage();
  const updated = current.filter((item) => item.productId !== productId);
  setCartStorage(updated);
};

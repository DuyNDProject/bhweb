import { useState, useEffect } from "react";
import CartList from "../components/CartList";
import getCart from "../services/carts/GetCart.js";
import getProductDetail from "../services/carts/GetProductDetail.js";
import updateCart from "../services/carts/UpdateCart.js";
import {
  getCartStorage,
  removeProductFromStorage,
} from "../utils/cartStorage.js";

function CartPage() {
  // Khởi tạo state để lưu danh sách sản phẩm
  const [products, setProducts] = useState([]);
  // Khởi tạo state để lưu id giỏ hàng
  const [cartInfo, setCartInfo] = useState({ id: null, userId: null });

  useEffect(() => {
    const initCart = async () => {
      // Nhận thông tin giỏ hàng từ api
      const cart = await getCart();
      // Cập nhật id giỏ hàng
      setCartInfo({ id: cart.id, userId: cart.userId });

      // Lấy danh sách sản phẩm từ local storage
      const storageProducts = getCartStorage();

      // Cập nhật danh sách giỏ hàng lên api
      if (storageProducts.length > 0) {
        const cartData = {
          userId: cart.userId,
          products: storageProducts.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        };
        await updateCart(cart.id, cartData);
      }

      // Lấy id và quantity từ local storage sau đó lấy dữ liệu sản phẩm từ api
      const detailedProducts = await Promise.all(
        storageProducts.map(async (item) => {
          const detail = await getProductDetail(item.productId);
          return { ...detail, quantity: item.quantity };
        })
      );

      // Cập nhật state để UI thay đổi
      setProducts(detailedProducts);
    };

    initCart();
  }, []);

  // --- Hàm xóa sản phẩm ---
  const handleDeleteProduct = async (productId) => {
    // 1. Xóa sản phẩm và lấy danh sách còn lại từ localStorage
    removeProductFromStorage(productId);
    const storageProducts = getCartStorage();

    // 2. Gọi UpdateCart với danh sách mới
    const cartData = {
      userId: cartInfo.userId,
      products: storageProducts.map((item) => ({
        productId: item.productId,
      })),
    };

    await updateCart(cartInfo.id, cartData);

    // 3. Cập nhật state để UI thay đổi
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="container my-4">
      <h1>Giỏ hàng của bạn</h1>
      <CartList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default CartPage;

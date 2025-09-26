import { Fragment, useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import getProduct from "../services/products/GetProduct.js";
import { addProductToStorage } from "../utils/cartStorage.js";
import Toast from "../components/Toast.jsx";

function HomePage() {
  // Khởi tạo state lưu thông tin chi tiết sản phẩm
  const [products, setProducts] = useState([]);
  // Khởi tạo state để bật tắt toast (mặc định tắt)
  const [toastShow, setToastShow] = useState(false);
  // Khởi tạo state để lưu tin nhắn thông báo
  const [toastMessage, setToastMessage] = useState("");

  // Lấy dữ liệu sản phẩm từ api sau đó cập nhật state
  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data);
    });
  }, []);

  // Nhóm sản phẩm theo category
  const groupedProducts = products.reduce((groups, product) => {
    // Tạo mảng dữ liệu cho từng category
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    // Đưa sản phẩm hiện tại vào mảng tương ứng với category
    groups[category].push(product);
    return groups;
  }, {});

  // Lưu id sản phẩm vào localStorage khi bấm nút
  const handleAddToCart = (product) => {
    addProductToStorage(product.id);

    // Cập nhật tin nhắn thông báo và cho hiển thị
    setToastMessage("Đã thêm sản phẩm vào giỏ hàng!");
    setToastShow(true);
    // Tự tắt toast sau 1 giây
    setTimeout(() => setToastShow(false), 1000);
  };

  return (
    <Fragment>
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="container my-4">
          <h1 className="mb-3">{category}</h1>
          <div className="row gx-2 gy-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <ProductCard product={product} onAddToCart={handleAddToCart} />
                <Toast
                  message={toastMessage}
                  show={toastShow}
                  onClose={() => setToastShow(false)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default HomePage;

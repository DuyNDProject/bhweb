function CartList({ products, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th className="d-none d-sm-table-cell">Số lượng</th>
            <th className="d-none d-sm-table-cell">Tổng tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length > 0 ? (
            products.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{ maxWidth: "50px" }}
                  />
                </td>
                <td className="text-truncate" style={{ maxWidth: "100px" }}>
                  {item.title}
                </td>
                <td>${item.price}</td>
                <td className="d-none d-sm-table-cell">{item.quantity}</td>
                <td className="d-none d-sm-table-cell">
                  ${item.price * item.quantity}
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Không có sản phẩm</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CartList;

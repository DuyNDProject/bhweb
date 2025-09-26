import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
    </Routes>
  );
}

export default AppRoutes;

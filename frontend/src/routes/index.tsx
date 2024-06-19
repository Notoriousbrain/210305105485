import { Route, Routes } from "react-router-dom";
import { HomePage, ProductDetails } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AllRoutes;

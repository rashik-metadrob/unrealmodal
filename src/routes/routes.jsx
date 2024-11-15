// src/routes/routes.jsx
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useState } from "react";
import ThreejsScene from "../Pages/ThreejsScene.jsx";
import NotFoundPage from "../Pages/NotFoundPage.jsx";
import { ring2 } from 'ldrs'
import MyBag from "../Components/MyBag.jsx";
import ProductModal from "../Components/ProductModal.jsx";

// Lazy load the components
const Home = lazy(() => import("../Pages/Home"));
const OrderConfirmPage = lazy(() => import("../Pages/OrderConfirmPage"));
const SecurePayment = lazy(() => import("../Pages/SecurePaymentPage.jsx"));
const SecurePayment2 = lazy(() => import("../Components/SecurePayment2.jsx"))
const ProductInfo = lazy(() => import("../Components/ProductInfo.jsx"))
const Address = lazy(() => import("../Pages/AddAddressPage"))


ring2.register()

// Default values shown

const AppRoutes = () => {
  const [open, setOpen] = useState(false)
  return (
    <Suspense fallback={<div className="h-screen flex justify-center items-center" ><l-ring-2
      size="40"
      stroke="5"
      stroke-length="0.25"
      bg-opacity="0.1"
      speed="0.8"
      color="black"
    ></l-ring-2></div>}>
      <Routes>

        <Route path="/" element={<ProductModal open={true} setOpen={setOpen}/>} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/order-confirm" element={<ThreejsScene page="OrderConfirmPage" />} />
        <Route path="/secure-payment" element={<ThreejsScene page="securePayment" />} />
        <Route path="/secure-payment-2" element={<ThreejsScene page="SecurePayment2Page" />} />
        <Route path="/product-info" element={<ProductInfo />} />
        <Route path="/add-address" element={<ThreejsScene page="addAddress" />} /> */}
        {/* <Route path="/bag" element={<MyBag open={true} setOpen={setOpen} />} /> */}
        {/* Handle non-existent routes */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

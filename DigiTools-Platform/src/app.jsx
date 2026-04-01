import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import MainSection from "./components/mainSection";
import StepsSection from "./components/stepsSection";
import PricingSection from "./components/pricingSection";
import CTASection from "./components/ctaSection";
import Footer from "./components/footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <MainSection cart={cart} setCart={setCart} />
      <StepsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;

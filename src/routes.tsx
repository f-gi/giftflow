import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ChooseGift } from "./pages/ChooseGift";
import { RedeemForm } from "./pages/RedeemForm";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-gift" element={<ChooseGift />} />
        <Route path="/user-info" element={<RedeemForm />} />
      </Routes>
    </BrowserRouter>
  );
}

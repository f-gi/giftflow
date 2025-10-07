import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ChooseGift } from "./pages/ChooseGift";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-gift" element={<ChooseGift />} />
      </Routes>
    </BrowserRouter>
  );
}

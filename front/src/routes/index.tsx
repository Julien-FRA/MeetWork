import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserPage from "../features/user/UserPage";
import Login from "../features/auth/login/LoginPage";
import Register from "../features/auth/register/RegisterPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

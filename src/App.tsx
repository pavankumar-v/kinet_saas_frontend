import "./App.css";
import LoginButton from "@components/auth/LoginButton";
import LogoutButton from "@components/auth/LogoutButton";
import UserInfo from "@components/userInfo/UserInfo";
import Logo from "@components/logo/Logo";
import Dashboard from "@components/Pages/Dashboard/Dashboard";
import { BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import LandingPage from "@components/Pages/Home/LandingPage";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter >
      <Link to="/auth"> Home </Link>
        <Link to="/"> Dashboard </Link>
          <Routes >
            <Route path="/" element={<Dashboard />} /> {/* 👈 Renders at /app/ */}
            <Route path="/auth" element={<LandingPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

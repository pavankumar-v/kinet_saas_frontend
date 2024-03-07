import "./App.css";
import Dashboard from "@components/Pages/Dashboard/Dashboard";
import { BrowserRouter, Router, Routes, Route, Link, Navigate, RouteProps, Outlet } from "react-router-dom";
import LandingPage from "@components/Pages/Home/LandingPage";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "@components/Loader/Spinner";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<LandingPage />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const PrivateRoutes = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return isLoading ? <Spinner /> : isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default App;
